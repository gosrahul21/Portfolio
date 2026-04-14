import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, User, Bot, Loader2, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = "You are Rahul Goswami's AI Assistant. You are professional, helpful, and technically savvy. You can answer questions about Rahul's projects, skills, and experience. Keep responses concise and engaging.";

export default function ChatBot({ darkMode }: { darkMode: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm Rahul's AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>("");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionIdRef.current = crypto.randomUUID?.() || Math.random().toString(36).substring(7);
    }
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function handleSend() {
    const q = input.trim();
    if (!q || loading) return;
    
    setInput("");
    const newHistory: Message[] = [...messages, { role: "user", content: q }];
    setMessages(newHistory);
    setLoading(true);

    try {
      const res = await fetch("https://gosrahul21-n8n.hf.space/webhook/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemMessage: SYSTEM_PROMPT,
          message: q,
          sessionId: sessionIdRef.current,
        }),
      });

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = "";
      let buffer = "";

      // Start streaming - remove loading indicator immediately
      setLoading(false);
      setMessages([...newHistory, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (let line of lines) {
          // n8n can send SSE (data: {...}) or raw NDJSON
          const trimmed = line.replace(/^data:\s*/, "").trim();
          if (!trimmed) continue;

          try {
            const parsed = JSON.parse(trimmed);
            
            // Extract the actual text delta depending on n8n version
            if (parsed.type === "token" && parsed.data) {
              reply += parsed.data;
            } else if (parsed.type === "item" && parsed.content) {
              reply += parsed.content;
            } else if (parsed.content) {
              reply += parsed.content;
            }
          } catch (e) {
            // Ignore incomplete or non-JSON lines
          }
        }

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].content = reply;
          return updated;
        });
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages([
        ...newHistory,
        { role: "assistant", content: "I'm experiencing a technical issue. Please try again later." },
      ]);
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`mb-4 w-80 md:w-96 h-[500px] flex flex-col rounded-2xl border shadow-2xl overflow-hidden backdrop-blur-xl transition-colors duration-300 ${
              darkMode 
                ? 'bg-black/80 border-white/20' 
                : 'bg-white/90 border-gray-200'
            }`}
          >
            {/* Header */}
            <div className={`p-4 flex items-center justify-between border-b ${
              darkMode ? 'border-white/10' : 'border-gray-100'
            }`}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Rahul's Assistant
                  </h3>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className={`text-[10px] ${darkMode ? 'text-white/60' : 'text-gray-500'}`}>
                      Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-1.5 rounded-lg transition-colors ${
                  darkMode ? 'hover:bg-white/10 text-white/60' : 'hover:bg-gray-100 text-gray-400'
                }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] flex items-start space-x-2 ${
                    msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                      msg.role === 'user' 
                        ? 'bg-blue-500' 
                        : (darkMode ? 'bg-white/10' : 'bg-gray-100')
                    }`}>
                      {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className={darkMode ? 'text-white' : 'text-gray-600'} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg'
                        : (darkMode ? 'bg-white/10 text-white' : 'bg-gray-100 text-gray-800')
                    }`}>
                      {msg.content || (
                        <div className="flex space-x-1 py-1">
                          <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center space-x-2 text-white/40">
                    <Loader2 size={14} className="animate-spin" />
                    <span className="text-xs italic">Thinking...</span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${
              darkMode ? 'border-white/10 bg-white/5' : 'border-gray-100 bg-gray-50/50'
            }`}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className={`w-full bg-transparent border-none focus:ring-0 text-sm py-2 pr-10 ${
                    darkMode ? 'text-white placeholder:text-white/30' : 'text-gray-900 placeholder:text-gray-400'
                  }`}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || loading}
                  className={`absolute right-1 p-2 rounded-xl transition-all ${
                    input.trim() && !loading
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20'
                      : (darkMode ? 'text-white/20' : 'text-gray-300')
                  }`}
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl relative group overflow-hidden ${
          darkMode 
            ? 'bg-white text-black' 
            : 'bg-black text-white'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        
        {/* Sparkle effect when closed */}
        {!isOpen && (
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={16} className="text-yellow-400 fill-yellow-400" />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
}
