import React from "react";
import Link from "next/link";
import { ArrowLeft, Server, BrainCircuit, MonitorSmartphone, Database, Code2, Cpu, ShieldAlert, LineChart } from "lucide-react";
import portfolioData from "../../../data/portfolio-data.json";

export default function RiskReducerProjectPage() {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Risk Reducer Platform
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Full-Stack Algorithmic Trading Ecosystem
          </p>
        </div>

        {/* Quick Facts */}
        <div className={`p-6 rounded-2xl border flex flex-col sm:flex-row gap-6 sm:gap-12 ${
          isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Architecture</p>
            <p className="font-semibold">True Full-Stack (Node.js & React 18)</p>
          </div>
          <div>
            <p className={`text-sm mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Focus</p>
            <p className="font-semibold">Algorithmic Trading & Execution</p>
          </div>
        </div>

        {/* Tech Stack Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Code2 className="text-purple-500" />
            Core Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["Node.js / Express", "React 18", "TypeScript", "WebSockets", "MongoDB", "Binance/CoinDCX API", "Recharts", "Swagger OpenAPI"].map((tech, i) => (
              <div 
                key={i} 
                className={`py-3 px-4 rounded-xl text-center text-sm font-semibold border ${
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
                }`}
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Breakdown */}
        <section className="space-y-8">
          
          {/* Architecture & Core Infrastructure */}
          <div className={`p-6 md:p-8 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-blue-400">
              <Server className="w-7 h-7" />
              Architecture & Core Infrastructure
            </h2>
            <ul className={`space-y-4 list-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                <div>
                  <strong className="text-white block mb-1">True Full-Stack Environment</strong>
                  Developed the entire ecosystem utilizing Node.js/Express for the core engine and React 18 for the client interface, with TypeScript enforcing strict typing across both environments.
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                <div>
                  <strong className="text-white block mb-1">SOLID Design Principles</strong>
                  Architected the backend using rigorous Dependency Injection (DI) and Interface Segregation. Services like <code className="text-pink-400">TradingService</code>, <code className="text-pink-400">PriceService</code>, and <code className="text-pink-400">StrategyService</code> are completely decoupled, allowing for extreme modularity.
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-blue-500" />
                <div>
                  <strong className="text-white block mb-1">Dual-API Communication Model</strong>
                  Implemented REST endpoints for standard CRUD operations (documented via Swagger OpenAPI 3.0) paired with a custom WebSocket Server for continuous, low-latency, real-time price broadcasting to the client.
                </div>
              </li>
            </ul>
          </div>

          {/* Algorithmic Strategy Engine & Technical Analysis (Backend) */}
          <div className={`p-6 md:p-8 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-pink-400">
              <BrainCircuit className="w-7 h-7" />
              Algorithmic Strategy Engine & Analysis
            </h2>
            <ul className={`space-y-4 list-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-pink-500" />
                <div>
                  <strong className="text-white block mb-1">Custom Support/Resistance Engine</strong>
                  Developed an algorithm in the <code className="text-blue-400">TechnicalService</code> to detect local minima in historical price data by scanning variable window sizes (e.g., 3, 5, and 7 periods).
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-pink-500" />
                <div>
                  <strong className="text-white block mb-1">Dynamic Strength Scoring</strong>
                  Implemented a proprietary scoring system that ranks support levels based on:
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-400">
                    <li><strong className="text-gray-300">Volume Strength:</strong> Traded volume at that price point.</li>
                    <li><strong className="text-gray-300">Bounce Strength:</strong> The percentage the price rejected and bounced off the support.</li>
                    <li><strong className="text-gray-300">Test Frequency:</strong> Number of times the price approached the level within a 0.2% tolerance without breaking.</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-pink-500" />
                <div>
                  <strong className="text-white block mb-1">Algorithmic Indicator Implementation</strong>
                  Wrote from-scratch implementations for calculating SMA (20/50), Fibonacci Retracements, and standard Pivot Points.
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-pink-500" />
                <div>
                  <strong className="text-white block mb-1">Automated Risk Engine</strong>
                  Engineered the <code className="text-blue-400">StopLossService</code> to parse incoming WebSocket price data against active configurations. If a price crosses a custom formula threshold, the backend intercepts and fires a market execution order to CoinDCX/Binance to mitigate losses.
                </div>
              </li>
            </ul>
          </div>

          {/* Live-Streaming React Dashboard (Frontend) */}
          <div className={`p-6 md:p-8 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-green-400">
              <MonitorSmartphone className="w-7 h-7" />
              Live-Streaming React Dashboard
            </h2>
            <ul className={`space-y-4 list-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-green-500" />
                <div>
                  <strong className="text-white block mb-1">Data Visualization</strong>
                  Built intelligent chart components using Recharts that overlay algorithmically calculated support/resistance bands over live candlestick data to visually verify the bot's logic.
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-green-500" />
                <div>
                  <strong className="text-white block mb-1">Complex State Management</strong>
                  Managed highly volatile state updates gracefully using custom hooks and Context providers without causing massive, application-breaking re-renders.
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-green-500" />
                <div>
                  <strong className="text-white block mb-1">Robust Error Handling</strong>
                  Implemented top-level ErrorBoundary wrappers to ensure malformed JSON or streaming faults don't crash the trading application, protecting the ongoing session.
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-green-500" />
                <div>
                  <strong className="text-white block mb-1">Comprehensive Trading Interfaces</strong>
                  Built dedicated UI views for every facet of a professional trading terminal: Orders, Positions, Price Alerts, Strategies, Technical Analysis, and Stop-Loss panels.
                </div>
              </li>
            </ul>
          </div>

          {/* Database & API Integration */}
          <div className={`p-6 md:p-8 rounded-2xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}>
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-purple-400">
              <Database className="w-7 h-7" />
              Database & API Integration
            </h2>
            <ul className={`space-y-4 list-none ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-purple-500" />
                <div>
                  <strong className="text-white block mb-1">Mongoose ODM</strong>
                  Designed schemas to hold persistent state across bot restarts, tracking historical positions, active trading strategies, and detailed trade logs for auditing purposes.
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircleIcon className="w-5 h-5 mt-1 flex-shrink-0 text-purple-500" />
                <div>
                  <strong className="text-white block mb-1">External Exchange Integration</strong>
                  Managed secure, HMAC SHA256 authenticated API connections to Binance/CoinDCX to handle fetching prices, account balance lookups, leverage adjustments, and live market order dispatches.
                </div>
              </li>
            </ul>
          </div>

        </section>

      </div>
    </div>
  );
}

// Helper icon component
function CheckCircleIcon(props: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
