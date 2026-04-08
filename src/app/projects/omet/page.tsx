import React from "react";
import Link from "next/link";
import { ArrowLeft, Monitor, Code2, Server, Database, Target, Trophy, Clock, CheckCircle2 } from "lucide-react";
import portfolioData from "../../../data/portfolio-data.json";

export default function OmetProjectPage() {
  const isDarkMode = portfolioData.theme.defaults.darkMode;

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-[#030014] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto space-y-12 pb-20">
        
        {/* Header & Back Button */}
        <div>
          <Link 
            href="/#projects" 
            className={`inline-flex items-center gap-2 mb-8 transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 inline-block">
            Institutional Trading Desktop Platform (OMET)
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Enterprise Desktop Application
          </p>
        </div>

        {/* Quick Facts */}
        <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row gap-6 sm:gap-12 ${
          isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Role</p>
            <p className="font-semibold">Lead Frontend & Electron Developer</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Company</p>
            <p className="font-semibold">Vegavid</p>
          </div>
        </div>

        {/* Overview section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Monitor className="text-blue-500" />
            Overview
          </h2>
          <div className={`space-y-4 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>
              Engineered a high-performance, real-time institutional trading desktop application from scratch using Electron, React, and TypeScript. This enterprise-grade platform serves as a mission-critical tool for traders, requiring sub-second latency, deterministic state management, and highly reliable data streaming.
            </p>
            <p>
              While the visual design and initial UI component layout were crafted by a specialized UI developer, I was solely responsible for architecting the entire application logic, the Electron infrastructure, real-time data pipelines, state management, and all backend integrations.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Code2 className="text-purple-500" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Framework", value: "React 18, Electron (v30)" },
              { label: "Language", value: "TypeScript" },
              { label: "State Management", value: "Redux Toolkit, React Context" },
              { label: "Real-time", value: "WebSockets, STOMP.js, SockJS" },
              { label: "UI & UX Complexities", value: "TanStack Table, Tailwind CSS, dnd-kit" },
              { label: "Build & Packaging", value: "Webpack, Electron Forge" }
            ].map((tech, i) => (
              <div 
                key={i} 
                className={`p-4 rounded-xl border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
                }`}
              >
                <div className={`text-sm font-medium mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tech.label}
                </div>
                <div className="font-semibold">{tech.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Target className="text-pink-500" />
            Key Responsibilities & Engineering Achievements
          </h2>
          
          <div className="grid gap-6">
            
            {/* Box 1 */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className="text-xl font-bold mb-3 text-purple-400">1. Complex Multi-Window Architecture (Electron)</h3>
              <ul className={`space-y-3 list-disc pl-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Designed and implemented a robust multi-process architecture utilizing Electron's Main and Renderer processes.</li>
                <li>Developed a comprehensive Inter-Process Communication (IPC) layer to route high-frequency market data, user actions, and authentication states seamlessly across multiple independent, tear-away windows (Market Views, Trade Blotters, Launchers, and Responders).</li>
                <li>Implemented intelligent window lifecycle management, preserving user layouts and restoring positional states across sessions.</li>
              </ul>
            </div>

            {/* Box 2 */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className="text-xl font-bold mb-3 text-blue-400">2. High-Frequency Real-Time Data Streaming</h3>
              <ul className={`space-y-3 list-disc pl-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Architected the WebSocket infrastructure using STOMP / SockJS to handle massive volumes of live market data, direct trades, and order broadcasts.</li>
                <li>Built a resilient message-processing engine that handles STOMP subscriptions, connection heartbeats, automatic token refreshes, and seamless reconnection logic without dropping critical trading data.</li>
                <li>Optimized rendering cycles to ensure that the UI remains blazing fast and responsive even during high-throughput market volatility.</li>
              </ul>
            </div>

            {/* Box 3 */}
            <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className="text-xl font-bold mb-3 text-green-400">3. Advanced Data Grids & State Management</h3>
              <ul className={`space-y-3 list-disc pl-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Integrated TanStack Table (React Table v8) to power complex tables like the Order Blotter, Trade Blotter, and Waterfall views.</li>
                <li>Implemented real-time dynamic filtering, sorting, pagination, and multi-column aggregation on massive datasets without degrading rendering performance.</li>
                <li>Managed complex, rapidly changing application states centrally using Redux Toolkit, ensuring that order completions, RFMs (Request for Markets), and actionable notifications updated instantly across all open windows.</li>
              </ul>
            </div>

             {/* Box 4 */}
             <div className={`p-6 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className="text-xl font-bold mb-3 text-yellow-400">4. Enterprise Integrations & Features</h3>
              <ul className={`space-y-3 list-disc pl-5 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <li>Developed secure session management, incorporating JWT tracking, silent automated token refreshes, and Role-Based Access Control (RBAC) to differentiate between Traders and Viewers.</li>
                <li>Implemented drag-and-drop interactivity using @dnd-kit for customizable workspace arrangements.</li>
                <li>Added comprehensive reporting capabilities, allowing traders to export blotters and market data to CSV and PDF locally using jspdf and export-to-csv.</li>
                <li>Orchestrated the final desktop packaging and distribution pipelines using Electron Forge (deb, rpm, squirrel, zip).</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Impact */}
        <section className={`p-8 rounded-2xl ${
          isDarkMode ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-purple-500/30' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-purple-100'
        }`}>
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <Trophy className="text-yellow-500" />
            Project Impact
          </h2>
          <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            The resulting application provides traders with an ultra-responsive, highly reliable institutional interface. By successfully abstracting the complicated Electron IPC layer and strictly enforcing robust WebSocket handling, the platform processes millions of data points flawlessly, scaling to meet the demands of a modern trading floor.
          </p>
        </section>

      </div>
    </div>
  );
}
