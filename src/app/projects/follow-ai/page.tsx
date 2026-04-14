import React from "react";
import Link from "next/link";
import {
  ArrowLeft, Code2, ShieldCheck, Briefcase, Mic, PhoneCall, CreditCard, LayoutDashboard, GitBranch
} from "lucide-react";
import portfolioData from "../../../data/portfolio-data.json";

export default function FollowAIProjectPage() {
  const isDark = portfolioData.theme.defaults.darkMode;
  const c = isDark ? "text-gray-300" : "text-gray-700";
  const muted = isDark ? "text-gray-400" : "text-gray-500";
  const card = isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200 shadow-sm";

  function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
      <div className={`p-6 rounded-2xl border ${card} ${className}`}>{children}</div>
    );
  }

  function SectionTitle({ icon, color, title }: { icon: React.ReactNode; color: string; title: string }) {
    return (
      <h2 className={`text-2xl font-bold flex items-center gap-2 ${color}`}>
        {icon}
        <span className={isDark ? "text-white" : "text-gray-900"}>{title}</span>
      </h2>
    );
  }

  const techStack = [
    ["Frontend", "Next.js (App Router), React 19"],
    ["Styling & UI", "Tailwind CSS, Framer Motion, Lenis"],
    ["Backend", "Next.js Server Actions & API Routes"],
    ["Database & Auth", "Supabase (PostgreSQL, RLS)"],
    ["AI & Telephony", "Vapi.ai, Deepgram, OpenAI, Twilio"],
    ["Billing", "Stripe (US), Razorpay (India)"],
    ["Email/Comms", "SendGrid, Postmark"],
  ];

  const highlights = [
    ["Telephony & AI Integration", "Navigating the challenges of real-time web-telephony logic, handling connection drops, and abstracting the Vapi/Twilio layers behind a clean, scalable service architecture."],
    ["Managing Distributed State", "Architecting complex RLS rules in PostgreSQL to prevent data leakage in a multi-tenant environment required meticulous planning and rigorous edge-case handling."],
    ["Balancing Aesthetics & Performance", "Ensuring that heavy use of Framer Motion and 3D effects did not degrade metrics like First Contentful Paint (FCP) and Time to Interactive (TTI), optimizing for both aesthetics and speed."],
    ["Dynamic Scalability", "Managing real-time transcriptions and summaries asynchronously without blocking the UI flow for the tenant."],
  ];

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${isDark ? "bg-[#030014] text-white" : "bg-gray-50 text-gray-900"}`}>
      <div className="max-w-5xl mx-auto space-y-12 pb-20">

        {/* Header */}
        <div>
          <Link
            href="/#projects"
            className={`inline-flex items-center gap-2 mb-8 text-sm transition-colors ${isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            CloseFlow AI (Follow-AI)
          </h1>
          <p className={`text-lg ${muted}`}>Multi-Tenant B2B SaaS · AI Voice Orchestration · Next.js & Supabase</p>
        </div>

        {/* Quick Facts */}
        <div className={`p-6 rounded-2xl border grid sm:grid-cols-3 gap-6 ${card}`}>
          {[
            ["Role", "Full-Stack Engineer (AI & Architecture)"],
            ["Timeline", "2023 - Present"],
            ["Project Type", "B2B Conversational AI SaaS"],
          ].map(([label, value]) => (
            <div key={label}>
              <p className={`text-xs uppercase tracking-widest mb-1 ${muted}`}>{label}</p>
              <p className="font-semibold text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Overview */}
        <section className="space-y-4">
          <SectionTitle icon={<Briefcase className="w-6 h-6 text-blue-500" />} color="text-blue-500" title="Project Overview" />
          <div className={`space-y-3 leading-relaxed ${c}`}>
            <p>
              <strong className={isDark ? "text-white" : "text-black"}>CloseFlow AI</strong> is a sophisticated, multi-tenant B2B SaaS platform designed to automate lead follow-ups and customer engagement through advanced AI voice assistants.
            </p>
            <p>
              Built with modern web technologies and a heavy emphasis on dynamic, highly responsive user experiences, the platform allows organizations to configure, deploy, and manage conversational AI agents that mimic human interaction over live phone calls — bridging the gap between expensive manual outreach and cold, robotic IVR systems.
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-4">
          <SectionTitle icon={<Code2 className="w-6 h-6 text-purple-500" />} color="text-purple-500" title="Tech Stack" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {techStack.map(([label, value]) => (
              <div key={label} className={`p-4 rounded-xl border ${card}`}>
                <p className={`text-xs uppercase tracking-widest mb-1 ${muted}`}>{label}</p>
                <p className="text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture & Features */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Key Technical Implementation</h2>

          {/* AI Orchestration */}
          <Card>
            <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-blue-500/10"><Mic className="w-5 h-5" /></span>
              1. Advanced AI Voice Orchestration
            </h3>
            <div className={`space-y-3 ${c}`}>
              <ul className={`list-disc pl-5 space-y-2 text-sm ${muted}`}>
                <li>Integrated <strong className={isDark ? "text-gray-300" : "text-gray-700"}>Vapi.ai</strong> to orchestrate seamless, sub-second latency voice conversations.</li>
                <li>Designed a scalable architecture to configure voice presets, LLM prompts, tuning instructions, and <strong className={isDark ? "text-gray-300" : "text-gray-700"}>Deepgram</strong> transcribers per workspace.</li>
                <li>Implemented real-time call tracking, capturing call metadata, transcripts, and AI-generated summaries directly into the dashboard via Server/API routes.</li>
              </ul>
            </div>
          </Card>

          {/* Multi-Tenant and Auth */}
          <Card>
            <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-purple-500/10"><ShieldCheck className="w-5 h-5" /></span>
              2. Multi-Tenant Architecture via Supabase
            </h3>
            <div className={`space-y-3 ${c}`}>
              <p className="text-sm">Developed a highly secure foundation relying heavily on PostgreSQL <strong className={isDark ? "text-gray-300" : "text-gray-700"}>Row Level Security (RLS)</strong>.</p>
              <ul className={`list-disc pl-5 space-y-2 text-sm mt-3 ${muted}`}>
                <li>Structured strict data isolation between <code className="text-purple-300">Organizations</code>, <code className="text-purple-300">Members</code>, <code className="text-purple-300">Subscriptions</code>, and <code className="text-purple-300">Onboarding Profiles</code>.</li>
                <li>Implemented RBAC and policies separating <code className="text-purple-300">platform_admin</code>, <code className="text-purple-300">org_owner</code>, <code className="text-purple-300">org_admin</code>, and <code className="text-purple-300">staff</code>.</li>
              </ul>
            </div>
          </Card>

          {/* Billing */}
          <Card>
            <h3 className="text-xl font-bold text-green-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-green-500/10"><CreditCard className="w-5 h-5" /></span>
              3. Geo-Routed Payment Infrastructure
            </h3>
            <div className={`space-y-3 ${c}`}>
              <p className="text-sm">Engineered a flexible subscription and billing system that adapts to the user's location.</p>
              <ul className={`list-disc pl-5 space-y-2 text-sm mt-3 ${muted}`}>
                <li>Integrated <strong className={isDark ? "text-gray-300" : "text-gray-700"}>Stripe</strong> for international/US clients and <strong className={isDark ? "text-gray-300" : "text-gray-700"}>Razorpay</strong> for the Indian market.</li>
                <li>Developed dynamic plan models that handle varying currencies, usage limits (Voice Minutes, SMS, WhatsApp), and billing cycles asynchronously.</li>
              </ul>
            </div>
          </Card>

          {/* UI UX */}
          <Card>
            <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-pink-500/10"><LayoutDashboard className="w-5 h-5" /></span>
              4. Premium Frontend Aesthetics
            </h3>
            <div className={`space-y-3 ${c}`}>
              <p className="text-sm">Built a visually stunning and dynamic layout emphasizing a "Luxury Tech" aesthetic.</p>
              <ul className={`list-disc pl-5 space-y-2 text-sm mt-3 ${muted}`}>
                <li>Utilized <strong className={isDark ? "text-gray-300" : "text-gray-700"}>Framer Motion</strong> for widespread micro-interactions alongside <strong className={isDark ? "text-gray-300" : "text-gray-700"}>Lenis</strong> to provide a fluid 60fps smooth scrolling experience.</li>
                <li>Implemented interactive UI components like dynamic magnetic buttons and 3D tilt effects to elevate the overall brand perception.</li>
                <li>Created state-driven onboarding profiles guiding new organizations smoothly without manual intervention.</li>
              </ul>
            </div>
          </Card>

          {/* Outreach */}
          <Card>
            <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-yellow-500/10"><PhoneCall className="w-5 h-5" /></span>
              5. Automated Outbound Campaigns & Appointment Scheduling
            </h3>
            <div className={`space-y-3 ${c}`}>
              <ul className={`list-disc pl-5 space-y-2 text-sm mt-3 ${muted}`}>
                <li>Designed a comprehensive campaign management system where organizations can import lead lists and trigger automated AI outbound calling sequences.</li>
                <li>Integrated programmatic scheduling, allowing the AI to naturally negotiate meeting times over the phone and book appointments directly.</li>
                <li>Built a seamless pipeline from initial lead contact to final appointment confirmation utilizing Postmark/SendGrid for email and Twilio for SMS.</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Key Highlights */}
        <section className="space-y-4">
          <SectionTitle icon={<GitBranch className="w-6 h-6 text-pink-500" />} color="text-pink-500" title="Key Learnings" />
          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map(([title, desc]) => (
              <Card key={title}>
                <p className="font-semibold text-sm text-white mb-1">{title}</p>
                <p className={`text-sm ${muted}`}>{desc}</p>
              </Card>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
