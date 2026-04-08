import React from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, Code2, LineChart, ShieldCheck, Palette, Layers, Database, AlertTriangle } from "lucide-react";
import portfolioData from "../../../data/portfolio-data.json";

export default function LarkFinservProjectPage() {
  const isDarkMode = portfolioData.theme.defaults.darkMode;

  const achievements = [
    {
      icon: <Layers className="w-5 h-5" />,
      color: "text-purple-400",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-500/10",
      title: "1. Embedded B2B2C Application Architecture",
      content: (
        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
          Engineered a complete multi-step loan origination frontend in React (Vite + Tailwind), designed to be injected into partner applications via a lightweight SDK. The flow covers Mobile verification, OTP authentication, live mutual fund holdings, and tiered loan offer surfacing — all within an iframe without context-switching the user.
        </p>
      ),
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      color: "text-blue-400",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-500/10",
      title: "2. Custom Hooks & Clean Code Architecture",
      content: (
        <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <p>
            Abstracted complex, asynchronous business logic from UI components using fully typed custom React hooks — <code className="text-blue-300 text-sm bg-white/5 px-1 rounded">useMFCentralResponse</code>, <code className="text-blue-300 text-sm bg-white/5 px-1 rounded">useFetchOffers</code>, <code className="text-blue-300 text-sm bg-white/5 px-1 rounded">useReportIssue</code>.
          </p>
          <ul className={`space-y-2 list-disc pl-5 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>Integrated secure XHR/axios fetching to proprietary backend endpoints using signed API keys (<code className="text-blue-300">X-SDK-Key</code>, <code className="text-blue-300">X-SDK-Secret</code>).</li>
            <li>Built resend timers, focus management for OTP fields, and unified error handling via <code className="text-blue-300">notistack</code> — keeping UX clean without polluting presentation components.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      color: "text-green-400",
      borderColor: "border-green-500/30",
      iconBg: "bg-green-500/10",
      title: "3. Live Portfolio Analysis via MFCentral",
      content: (
        <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <p>
            Integrated real-time portfolio tracking via MFCentral. Upon OTP authorization, the app pulls live NAVs, Scheme Codes, and total investment values to determine loan eligibility.
          </p>
          <ul className={`space-y-2 list-disc pl-5 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>Designed complex <code className="text-green-300">PortfolioData</code> typings to safely differentiate eligible vs. non-eligible Mutual Fund assets.</li>
            <li>Implemented real-time calculations for total portfolio value and eligible loan value to surface the best financing offers dynamically.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <Database className="w-5 h-5" />,
      color: "text-yellow-400",
      borderColor: "border-yellow-500/30",
      iconBg: "bg-yellow-500/10",
      title: "4. Resilient Session Hydration & Theming",
      content: (
        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
          Engineered a persistent hydration system that caches <code className="text-yellow-300 text-sm bg-white/5 px-1 rounded">sdkCredentials</code> in <code className="text-yellow-300 text-sm bg-white/5 px-1 rounded">sessionStorage</code> and syncs configuration via URL parameters (<code className="text-yellow-300 text-sm bg-white/5 px-1 rounded">partnerId</code>, <code className="text-yellow-300 text-sm bg-white/5 px-1 rounded">sessionId</code>, <code className="text-yellow-300 text-sm bg-white/5 px-1 rounded">theme</code>). This ensures the UX survives refreshes and network drops, while host apps retain full dynamic control over branding and context.
        </p>
      ),
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      color: "text-pink-400",
      borderColor: "border-pink-500/30",
      iconBg: "bg-pink-500/10",
      title: "5. Secure Cross-Origin Message Bridge",
      content: (
        <div className={`space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <p>
            Built a security layer on top of <code className="text-pink-300 text-sm bg-white/5 px-1 rounded">window.parent.postMessage</code> to handle all communication with the host application.
          </p>
          <ul className={`space-y-2 list-disc pl-5 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <li>Enforced strict origin allowlisting to prevent XSS payloads across staging and production domains.</li>
            <li>Abstracted the session handshake (<code className="text-pink-300">SDK_INIT</code>, <code className="text-pink-300">SDK_INIT_ACK</code>) and transaction finalization (<code className="text-pink-300">ELIGIBILITY_RESULT</code>, <code className="text-pink-300">CLOSE_FRAME</code>) — enabling host apps to react accurately to user progression without tight coupling.</li>
          </ul>
        </div>
      ),
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      color: "text-orange-400",
      borderColor: "border-orange-500/30",
      iconBg: "bg-orange-500/10",
      title: "6. Error Recovery & Telemetry",
      content: (
        <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
          Implemented a failover state machine for empty or malformed MFCentral responses, gracefully routing users into an integrated "Report Issue" dialogue (<code className="text-orange-300 text-sm bg-white/5 px-1 rounded">useReportIssue</code>). This prevents silent drop-offs at the highest-friction points in the financial funnel and provides continuous telemetry data without breaking the embedded session.
        </p>
      ),
    },
  ];

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDarkMode ? 'bg-[#030014] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto space-y-12 pb-20">

        {/* Header */}
        <div>
          <Link
            href="/#projects"
            className={`inline-flex items-center gap-2 mb-8 text-sm transition-colors ${
              isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Lark Finserv Embedded Loan Application
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Fintech · B2B2C Embedded Finance · Mutual Fund-Backed Loans
          </p>
        </div>

        {/* Quick Facts */}
        <div className={`p-6 rounded-2xl border grid sm:grid-cols-2 gap-6 ${
          isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'
        }`}>
          <div>
            <p className={`text-xs uppercase tracking-widest mb-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Role</p>
            <p className="font-semibold">Architect & Lead Developer</p>
          </div>
          <div>
            <p className={`text-xs uppercase tracking-widest mb-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Domain</p>
            <p className="font-semibold">Fintech / Embedded Finance</p>
          </div>
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-500" />
            Overview
          </h2>
          <div className={`leading-relaxed space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <p>
              Lark Finserv's flagship product is a fully embeddable, white-labeled loan eligibility and application journey. I built the entire frontend ecosystem and SDK, enabling third-party platforms — banks, wealth management apps — to inject a mutual-fund-backed loan flow directly into their UI without redirecting users.
            </p>
            <p>
              The system integrates with MFCentral to fetch and evaluate user portfolios in real time, surfacing pre-approved loan offers in a seamless, single-page experience embedded in the partner's own domain.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Code2 className="w-6 h-6 text-purple-500" />
            Technical Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              ["Frontend", "React 19, TypeScript, Vite"],
              ["Styling", "Tailwind CSS 4"],
              ["State", "Context API, sessionStorage"],
              ["Security", "postMessage, Origin Allowlist"],
              ["APIs", "MFCentral OTP & Data"],
              ["UX", "notistack, Custom Hooks"],
            ].map(([label, value], i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200 shadow-sm'}`}
              >
                <p className={`text-xs uppercase tracking-widest mb-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Achievements */}
        <section className="space-y-5">
          <h2 className="text-2xl font-bold">Key Technical Achievements</h2>
          <div className="grid gap-5">
            {achievements.map((item, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl border ${isDarkMode ? `bg-white/5 ${item.borderColor}` : 'bg-white border-gray-200 shadow-sm'}`}
              >
                <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${item.color}`}>
                  <span className={`p-1.5 rounded-lg ${item.iconBg}`}>{item.icon}</span>
                  {item.title}
                </h3>
                {item.content}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
