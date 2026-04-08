import React from "react";
import Link from "next/link";
import { ArrowLeft, Mic, Code2, Server, Database, Globe, Zap, Cpu, MessageSquare, Layers, ShieldCheck } from "lucide-react";
import portfolioData from "../../../data/portfolio-data.json";

export default function EchoAIProjectPage() {
  const isDarkMode = portfolioData.theme.defaults.darkMode;

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? "bg-[#030014] text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-5xl mx-auto space-y-12 pb-20">
        
        {/* Header & Back Button */}
        <div>
          <Link 
            href="/#projects" 
            className={`inline-flex items-center gap-2 mb-8 transition-colors ${
              isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block">
            EchoAI (GustoAI Concierge)
          </h1>
          <p className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            Full-Stack Real-time Conversational AI Platform
          </p>
        </div>

        {/* Quick Facts */}
        <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row gap-6 sm:gap-12 ${
          isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200 shadow-sm"
        }`}>
          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Role</p>
            <p className="font-semibold">Full-Stack AI Engineer</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Complexity</p>
            <p className="font-semibold">High (Real-time binary streaming)</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Core Tech</p>
            <p className="font-semibold">Web Audio API, Socket.io, Deepgram</p>
          </div>
        </div>

        {/* Overview section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 underline decoration-blue-500 underline-offset-8">
            <Mic className="text-blue-500" />
            Project Overview
          </h2>
          <div className={`space-y-4 leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
            <p>
              EchoAI is a high-performance, real-time AI voice conversation platform. It allows users to talk to an AI agent with ultra-low latency, feeling as natural as a real human conversation. 
            </p>
            <p>
              This project serves as a perfect demonstration of **Full-Stack AI Engineering**, spanning low-level signal processing on the server to advanced browser threading and audio buffer management on the client.
            </p>
          </div>
        </section>

        {/* Technical Deep Dive: Backend */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 underline decoration-purple-500 underline-offset-8">
            <Server className="text-purple-500" />
            1. Backend Engineering (The Core Engine)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-6 rounded-2xl border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-400 flex items-center gap-2">
                <Cpu size={20} /> Signal Processing & VAD
              </h3>
              <ul className={`list-disc pl-5 space-y-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <li><strong className="text-white">Real-time VAD:</strong> Designed a server-side VAD system using RMS energy calculation and time-based silence threshold logic.</li>
                <li><strong className="text-white">Custom Denoising:</strong> Developed a manual noise-gate and soft-clipping algorithm to clean incoming raw PCM data.</li>
                <li><strong className="text-white">WAV Serialization:</strong> Hand-wrote a binary 44-byte WAV header constructor for transcription API compatibility.</li>
              </ul>
            </div>
            <div className={`p-6 rounded-2xl border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}>
              <h3 className="text-xl font-bold mb-3 text-blue-400 flex items-center gap-2">
                <Layers size={20} /> Orchestration & Streaming
              </h3>
              <ul className={`list-disc pl-5 space-y-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <li><strong className="text-white">AI Service Orchestration:</strong> Integrated Deepgram Nova-2 (STT) and Aura-2 (TTS) via n8n webhooks for modular RAG logic. </li>
                <li><strong className="text-white">Streaming Handler:</strong> Engineered a Socket.io server with session-based state management to handle simultaneous binary I/O.</li>
                <li><strong className="text-white">Latency Profiling:</strong> Optimized end-to-end data flow to achieve sub-500ms total response cycles.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive: Frontend */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 underline decoration-pink-500 underline-offset-8">
            <Zap className="text-pink-500" />
            2. Frontend Engineering (The Interactive Layer)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className={`p-6 rounded-2xl border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}>
              <h3 className="text-xl font-bold mb-3 text-pink-400 flex items-center gap-2">
                <Code2 size={20} /> Web Audio API Mastery
              </h3>
              <ul className={`list-disc pl-5 space-y-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <li><strong className="text-white">AudioWorklet Integration:</strong> Offloaded heavy processing to a separate thread using a custom PCMProcessor (Float32 to Int16).</li>
                <li><strong className="text-white">MediaSource API:</strong> Implemented "fragmented" audio playback using SourceBuffers, allowing playback during active streaming.</li>
                <li><strong className="text-white">Hardware Management:</strong> Strict cleanup cycles for AudioContext graphs to prevent memory leaks and hardware locks.</li>
              </ul>
            </div>
            <div className={`p-6 rounded-2xl border ${isDarkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}>
              <h3 className="text-xl font-bold mb-3 text-green-400 flex items-center gap-2">
                <ShieldCheck size={20} /> Resilient UX & State
              </h3>
              <ul className={`list-disc pl-5 space-y-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <li><strong className="text-white">Reactive States:</strong> Five distinct states (idle, recording, ai-speaking, connected, disconnected) driven by real-time events.</li>
                <li><strong className="text-white">Binary Encoding:</strong> Efficient data transfer using window.btoa and Uint8Array for high-speed socket throughput.</li>
                <li><strong className="text-white">Animations:</strong> Premium interface with pulsating glow rings and dynamic Framer Motion visualizers.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Technical Achievement: Smart Interruption */}
        <section className={`p-8 rounded-2xl ${
          isDarkMode ? "bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-500/30" : "bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100"
        }`}>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <MessageSquare className="text-yellow-500" />
            Key Achievement: "Smart Interruption"
          </h2>
          <p className={`leading-relaxed text-lg italic ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}>
            "I solved the 'AI Overlap' problem by engineering a bidirectional interruption signal. When the frontend's AudioWorklet detects user speech while the AI is speaking, it sends an immediate signal to the backend. The backend then destroys the current TTS stream and kills the audio queue, while the frontend clears its local MediaSource buffer. This creates a natural human-like 'oops, I'm listening' behavior."
          </p>
        </section>

      </div>
    </div>
  );
}
