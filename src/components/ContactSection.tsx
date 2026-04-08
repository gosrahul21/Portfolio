import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { getContactSection } from "../utils/portfolio-data";
import { FadeInUp, ScaleIn } from "./StaggeredReveal";

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
  darkMode: boolean;
}

export default function ContactSection({ contactRef, darkMode }: ContactSectionProps) {
  const contactData = getContactSection();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const iconMap = {
    Mail,
    Github,
    Linkedin,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", contactData.web3formsKey || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-20 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <ScaleIn className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {contactData.title}
          </motion.h2>
          <motion.p 
            className={`text-lg md:text-xl max-w-2xl mx-auto transition-colors duration-300 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {contactData.subtitle}
          </motion.p>
        </ScaleIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Socials */}
          <FadeInUp className="space-y-8">
            <div className={`p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
              darkMode ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-200"
            }`}>
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              <div className="space-y-6">
                {contactData.socialLinks.map((social) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-4 group"
                      whileHover={{ x: 10 }}
                    >
                      <div className={`p-3 rounded-2xl transition-all duration-300 ${
                        darkMode ? "bg-white/10 group-hover:bg-blue-500/20" : "bg-white group-hover:bg-blue-50 group-hover:shadow-lg"
                      }`}>
                        {IconComponent && <IconComponent size={24} className={darkMode ? "text-blue-400" : "text-blue-600"} />}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{social.platform}</p>
                        <p className="font-bold">{social.label}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className={`p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 ${
              darkMode ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/10" : "bg-gradient-to-br from-blue-50 to-purple-50 border-gray-200"
            }`}>
              <p className="text-sm font-medium mb-2 uppercase tracking-widest text-blue-500">Quick Response</p>
              <h4 className="text-xl font-bold mb-4">Expect a reply within 24 hours</h4>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                Whether you have a project in mind or just want to say hi, my inbox is always open.
              </p>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.2}>
            <form 
              onSubmit={handleSubmit}
              className={`p-8 rounded-3xl border backdrop-blur-xl shadow-2xl relative transition-all duration-300 ${
                darkMode ? "bg-white/5 border-white/10" : "bg-white border-gray-200"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className={`text-sm font-medium ml-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className={`w-full px-5 py-4 rounded-2xl border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                      darkMode ? "border-white/10 text-white placeholder:text-white/20" : "border-gray-200 text-gray-900 placeholder:text-gray-400"
                    }`}
                  />
                </div>
                <div className="space-y-2">
                  <label className={`text-sm font-medium ml-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className={`w-full px-5 py-4 rounded-2xl border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                      darkMode ? "border-white/10 text-white placeholder:text-white/20" : "border-gray-200 text-gray-900 placeholder:text-gray-400"
                    }`}
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <label className={`text-sm font-medium ml-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (234) 567-890"
                  className={`w-full px-5 py-4 rounded-2xl border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
                    darkMode ? "border-white/10 text-white placeholder:text-white/20" : "border-gray-200 text-gray-900 placeholder:text-gray-400"
                  }`}
                />
              </div>
              <div className="space-y-2 mb-8">
                <label className={`text-sm font-medium ml-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className={`w-full px-5 py-4 rounded-2xl border bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none ${
                    darkMode ? "border-white/10 text-white placeholder:text-white/20" : "border-gray-200 text-gray-900 placeholder:text-gray-400"
                  }`}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all relative overflow-hidden group ${
                  submitStatus === 'success' ? 'bg-green-500' : 
                  submitStatus === 'error' ? 'bg-red-500' :
                  'bg-gradient-to-r from-blue-500 to-purple-600'
                } text-white shadow-xl shadow-blue-500/20`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </motion.div>
                  ) : submitStatus === 'success' ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 size={20} />
                      Message Sent!
                    </motion.div>
                  ) : submitStatus === 'error' ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2"
                    >
                      <AlertCircle size={20} />
                      Try Again
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-sm mt-4 text-green-500 font-medium"
                  >
                    Thank you! Your message has been received.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-sm mt-4 text-red-500 font-medium"
                  >
                    Oops! Something went wrong. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </FadeInUp>
        </div>
      </div>

      {/* Background Decorative Circles */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
}
