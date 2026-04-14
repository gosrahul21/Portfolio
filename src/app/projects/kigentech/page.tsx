import React from "react";
import Link from "next/link";
import {
  ArrowLeft, Layers, Code2, Server, Database, ShieldCheck,
  GitBranch, BarChart2, Cpu, Briefcase, FileCode2
} from "lucide-react";
import portfolioData from "../../../data/portfolio-data.json";

export default function KigentechProjectPage() {
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
        <span className="text-white">{title}</span>
      </h2>
    );
  }

  const techStack = [
    ["Frontend", "React.js"],
    ["Backend API", "NestJS (TypeScript)"],
    ["Upload Service", "Express.js + Multer"],
    ["Smart Contracts", "Solidity 0.8.12, OpenZeppelin, Truffle"],
    ["Blockchain", "Web3.js, Ethers.js"],
    ["Database", "MongoDB (Mongoose ODM)"],
    ["Auth", "JWT (access + refresh), bcrypt"],
    ["Data Integrity", "MerkleTree.js + SHA256"],
    ["Scheduler", "@nestjs/schedule (cron)"],
    ["Networks", "Polygon Mumbai, Goerli Testnet"],
    ["Email", "Nodemailer + nestjs-i18n"],
    ["API Docs", "Swagger (@nestjs/swagger)"],
  ];

  const productApis = [
    ["Create a hydrogen product listing", "POST /product/create", "Producer"],
    ["View marketplace listings", "GET /product/list", "All"],
    ["View personal inventory", "GET /product/inventory", "Producer"],
    ["Get product detail", "GET /product/:productId", "All"],
    ["Certify / reject a product", "PATCH /product/approval", "Certifier"],
    ["Add product to watchlist", "POST /product/watchlist", "Consumer, Distributor"],
    ["Remove from watchlist", "DELETE /product/watchlist/:productId", "Consumer, Distributor"],
    ["Buy / trade hydrogen tokens", "POST /product/trade", "Consumer, Distributor"],
    ["Verify product certificate", "GET /product/verify", "Consumer, Distributor"],
    ["List hydrogen producers", "GET /product/producers", "Consumer, Distributor"],
  ];

  const highlights = [
    ["Merkle chain of custody", "Each minting and trade operation generates a new Merkle root chaining to the previous one — an append-only cryptographic audit trail on-chain."],
    ["Multi-batch trade resolution", "The trade engine automatically aggregates across product batches to fulfil large orders without manual intervention."],
    ["Auto-provisioned blockchain wallets", "Every new user gets an Ethereum wallet generated server-side on signup, transparently linked to their account."],
    ["ESG Factory Pattern", "Production method and energy source drive pluggable ESG calculation strategies (Strategy + Factory patterns), allowing new hydrogen types to be added without touching core logic."],
    ["Role-gated API + UI", "Seven user roles enforced at NestJS AuthGuard level via @Roles() decorator, mirrored in frontend routing and component visibility."],
    ["Automated daily statistics", "Cron-driven stat snapshots power admin dashboards without any read-time aggregation overhead."],
    ["i18n-first error handling", "All validation errors, auth messages, and email templates are externalised into translation files — internationalisation-ready from day one."],
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
            Kigentech — Digital Hydrogen Tracking
          </h1>
          <p className={`text-lg ${muted}`}>Blockchain-powered B2B SaaS · Green Hydrogen Supply Chain · Polygon / Goerli</p>
        </div>

        {/* Quick Facts */}
        <div className={`p-6 rounded-2xl border grid sm:grid-cols-3 gap-6 ${card}`}>
          {[
            ["Role", "Full-Stack Engineer (Frontend + Backend)"],
            ["Client", "Kigentech via Vegavid Technology"],
            ["Project Type", "Blockchain B2B SaaS Platform"],
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
              Kigentech is an enterprise-grade <strong className="text-white">Digital Hydrogen Tracking Platform</strong> bringing transparency and verifiability to the green hydrogen supply chain. The platform enables producers, distributors, consumers, certifiers, regulators, and transporters to interact with hydrogen asset data on-chain — ensuring every kilogram of hydrogen produced, certified, traded, and transported is recorded immutably on the blockchain.
            </p>
            <p>
              The system tokenizes physical hydrogen production batches into <strong className="text-white">ERC-20 digital assets</strong> on the Polygon and Goerli networks, with all token operations anchored by <strong className="text-white">Merkle Tree proofs</strong> to guarantee data integrity across the supply chain.
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

        {/* Architecture Diagram */}
        <section className="space-y-4">
          <SectionTitle icon={<Layers className="w-6 h-6 text-pink-500" />} color="text-pink-500" title="System Architecture" />
          <Card>
            <pre className={`text-xs md:text-sm font-mono leading-relaxed overflow-x-auto ${isDark ? "text-gray-300" : "text-gray-700"}`}>{`┌─────────────────────────────────┐
│        React.js Frontend        │
│  Auth · Products · Trade ·      │
│  Transport · History · Stats    │
└────────────┬────────────────────┘
             │ REST API
    ┌─────────┴──────────┐
    ▼                    ▼
┌─────────────────┐  ┌──────────────────┐
│  NestJS Engine  │  │  Express Upload  │
│  · User / Auth  │  │  Microservice    │
│  · Product      │  │  (Multer · CORS) │
│  · Token/Web3   │  └──────────────────┘
│  · Transport    │
│  · History      │
│  · Stats (Cron) │
└────────┬────────┘
         ├──────────────────────────┐
         ▼                          ▼
   ┌──────────┐        ┌────────────────────────┐
   │ MongoDB  │        │   Blockchain Network   │
   │(Mongoose)│        │  Polygon / Goerli      │
   └──────────┘        │  PlatformController    │
                       │  DigitalHydrogenAsset  │
                       │  DigitalCO2eAsset      │
                       │  RenewableEnergyAsset  │
                       └────────────────────────┘`}</pre>
          </Card>
        </section>

        {/* My Contributions */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">My Contributions</h2>

          {/* Frontend */}
          <Card>
            <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-blue-500/10"><Layers className="w-5 h-5" /></span>
              1. Frontend (React.js)
            </h3>
            <div className={`space-y-5 ${c}`}>
              <div>
                <h4 className="font-semibold text-white mb-2">UI Design & Architecture</h4>
                <ul className={`list-disc pl-5 space-y-1 text-sm ${muted}`}>
                  <li>Architected the full React.js client with a structured component hierarchy and routing.</li>
                  <li>Designed role-aware UI flows supporting <strong className="text-gray-300">7 distinct user roles</strong>: Admin, Producer, Certifier, Regulator, Distributor, Consumer, Transporter.</li>
                  <li>Built a multi-step onboarding flow capturing user profile and company details during registration.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">JWT Authentication Integration</h4>
                <ul className={`list-disc pl-5 space-y-1 text-sm ${muted}`}>
                  <li>Signup → collects user + company details, POSTs to <code className="text-blue-300">/user/signup</code>.</li>
                  <li>Login → authenticates via <code className="text-blue-300">/user/login</code>, stores access and refresh tokens securely.</li>
                  <li>Implemented automatic session renewal via <code className="text-blue-300">/user/refreshSession</code> with <code className="text-blue-300">refresh-token</code> header.</li>
                  <li>Role-based UI guard — elements and routes conditionally rendered from decoded JWT roles.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3">Transaction & Product Flows</h4>
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className={`border-b border-white/10 ${isDark ? "bg-white/5" : "bg-gray-50"}`}>
                        <th className="text-left p-3 font-semibold text-gray-400">Feature</th>
                        <th className="text-left p-3 font-semibold text-gray-400">Endpoint</th>
                        <th className="text-left p-3 font-semibold text-gray-400">Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productApis.map(([feature, endpoint, role], i) => (
                        <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "" : isDark ? "bg-white/[0.02]" : "bg-gray-50/50"}`}>
                          <td className="p-3">{feature}</td>
                          <td className="p-3"><code className="text-blue-300">{endpoint}</code></td>
                          <td className="p-3 text-gray-400">{role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ul className={`list-disc pl-5 space-y-1 text-sm mt-4 ${muted}`}>
                  <li>Built trade flow UI handling partial and multi-batch purchases with clear remaining-balance visibility.</li>
                  <li>Implemented a product verification screen where consumers enter a product ID and retrieve its on-chain certificate link.</li>
                  <li>Integrated the transport module APIs — fleet management, trip creation, and trip tracking for transporter-role users.</li>
                  <li>Integrated a paginated audit log screen and admin stats dashboard powered by cron-generated snapshots.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* NestJS Backend */}
          <Card>
            <h3 className="text-xl font-bold text-purple-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-purple-500/10"><Server className="w-5 h-5" /></span>
              2. Backend — Process & Validation Engine (NestJS)
            </h3>
            <div className={`space-y-5 ${c}`}>

              <div>
                <h4 className="font-semibold text-white mb-2">User & Auth Module</h4>
                <ul className={`list-disc pl-5 space-y-1 text-sm ${muted}`}>
                  <li>bcrypt password hashing (salt rounds: 10) on registration.</li>
                  <li>Automatic <strong className="text-gray-300">blockchain wallet generation</strong> (<code className="text-purple-300">ethers.js Wallet.createRandom()</code>) assigned per user on signup.</li>
                  <li>Dual-token JWT strategy — access tokens: 30 min, refresh tokens: 3 hours.</li>
                  <li>Role-based <code className="text-purple-300">AuthGuard</code> via NestJS <code className="text-purple-300">CanActivate</code> + <code className="text-purple-300">Reflector</code> — no boilerplate repetition across controllers.</li>
                  <li>Admin endpoints for paginated user listing, approval/rejection with i18n-templated email notifications.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Product Module — Blockchain Integration</h4>
                <div className="space-y-4">
                  <div className={`p-4 rounded-xl border ${isDark ? "border-white/10 bg-white/[0.03]" : "border-gray-200 bg-gray-50"}`}>
                    <p className="font-semibold text-sm text-white mb-2">Product Creation Flow</p>
                    <ol className={`list-decimal pl-5 space-y-1 text-sm ${muted}`}>
                      <li>Validate producer's company details from MongoDB.</li>
                      <li>Generate unique <code className="text-purple-300">productId</code> in format <code className="text-purple-300">{"{USERNAME_INITIAL}:{SEQUENCE}"}</code>.</li>
                      <li>Calculate <strong className="text-gray-300">ESG score</strong> via a factory pattern with pluggable ESG processors (production method + energy source).</li>
                      <li>Construct a <strong className="text-gray-300">Merkle Tree</strong> from batch size, user ID, threshold, and ESG metrics — producing a cryptographic fingerprint.</li>
                      <li>Submit root hash on-chain via <code className="text-purple-300">PlatformController.bulkMint()</code> — minting ERC-20 tokens to the producer's wallet.</li>
                      <li>Create balance record in MongoDB; log audit history entry.</li>
                    </ol>
                  </div>
                  <div className={`p-4 rounded-xl border ${isDark ? "border-white/10 bg-white/[0.03]" : "border-gray-200 bg-gray-50"}`}>
                    <p className="font-semibold text-sm text-white mb-2">Product Trade (Transfer) Flow</p>
                    <ol className={`list-decimal pl-5 space-y-1 text-sm ${muted}`}>
                      <li>Validate buyer and seller wallet addresses from MongoDB.</li>
                      <li>If a single batch is insufficient, <strong className="text-gray-300">automatically aggregate across multiple batches</strong> (sorted by ascending remaining balance).</li>
                      <li>Deduct traded amount across batches; update or delete balance records.</li>
                      <li>Construct new Merkle Tree encoding consumed batch hashes, wallet addresses, and trade amount.</li>
                      <li>Call <code className="text-purple-300">PlatformController.bulkTransfer()</code> on-chain; create buyer balance record; log audit entry.</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Statistics Module (Cron-Powered)</h4>
                <ul className={`list-disc pl-5 space-y-1 text-sm ${muted}`}>
                  <li>Daily cron job (<code className="text-purple-300">@Cron('15 0 * * *')</code>) aggregates signup counts by role and trade stats from the previous 24 hours.</li>
                  <li>Persists <code className="text-purple-300">UserStats</code> and <code className="text-purple-300">TradeStats</code> snapshots — eliminates read-time aggregation overhead for admin dashboards.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-2">Cross-Cutting Concerns</h4>
                <ul className={`list-disc pl-5 space-y-1 text-sm ${muted}`}>
                  <li><strong className="text-gray-300">i18n:</strong> All error messages, validation responses, and email content driven by <code className="text-purple-300">nestjs-i18n</code> translation files.</li>
                  <li><strong className="text-gray-300">Compression:</strong> Global <code className="text-purple-300">compression</code> middleware for response optimisation.</li>
                  <li><strong className="text-gray-300">Swagger:</strong> Auto-generated API documentation via <code className="text-purple-300">@nestjs/swagger</code>.</li>
                </ul>
              </div>

            </div>
          </Card>

          {/* Upload Microservice */}
          <Card>
            <h3 className="text-xl font-bold text-green-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-green-500/10"><Database className="w-5 h-5" /></span>
              3. Upload Microservice (Express.js)
            </h3>
            <div className={`space-y-2 ${c}`}>
              <p className="text-sm">A standalone file upload microservice decoupled from the NestJS engine for independent scalability.</p>
              <ul className={`list-disc pl-5 space-y-1 text-sm mt-3 ${muted}`}>
                <li>Accepts multipart uploads at <code className="text-green-300">POST /uploads</code> — validates MIME types (images + PDFs only).</li>
                <li>Generates collision-resistant filenames: <code className="text-green-300">Date.now() + randomUUID()</code>.</li>
                <li>Enforces hard limits: max <strong className="text-gray-300">100 MB</strong> per file, 1 file per request, 2 multipart parts max.</li>
                <li>Serves files as static assets via <code className="text-green-300">GET /uploads/:filename</code>.</li>
                <li>CORS-enabled; centralized error handler returns structured JSON on failure.</li>
              </ul>
            </div>
          </Card>

          {/* Smart Contracts */}
          <Card>
            <h3 className="text-xl font-bold text-yellow-400 flex items-center gap-2 mb-5">
              <span className="p-1.5 rounded-lg bg-yellow-500/10"><FileCode2 className="w-5 h-5" /></span>
              4. Smart Contracts (Solidity + Truffle + OpenZeppelin)
            </h3>
            <div className={`space-y-5 ${c}`}>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    name: "DigitalHydrogenAsset (ERC-20)",
                    color: "text-yellow-300",
                    desc: "Tokenized green hydrogen kg units. Extends OpenZeppelin ERC20, ERC20Burnable, ERC20Pausable, Ownable, ERC20Permit. Mint and transfer callable only by PlatformController.",
                  },
                  {
                    name: "DigitalCO2eAsset (ERC-20)",
                    color: "text-orange-300",
                    desc: "Tokenized carbon emission credits. Same architecture as DigitalHydrogenAsset.",
                  },
                  {
                    name: "RenewableEnergyAsset (ERC-20)",
                    color: "text-green-300",
                    desc: "Tokenized renewable energy certificates. Same architecture.",
                  },
                  {
                    name: "PlatformController",
                    color: "text-blue-300",
                    desc: "Central orchestrator. Sole authorized minter/transferrer across all three token types. Exposes bulkMint() and bulkTransfer() with Merkle hash anchoring. Emits Mint and Transfer events. Pausable by owner.",
                  },
                ].map((contract) => (
                  <div key={contract.name} className={`p-4 rounded-xl border ${isDark ? "border-white/10 bg-white/[0.03]" : "border-gray-200 bg-gray-50"}`}>
                    <p className={`font-semibold text-sm mb-2 font-mono ${contract.color}`}>{contract.name}</p>
                    <p className={`text-sm ${muted}`}>{contract.desc}</p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Deployment</h4>
                <ul className={`list-disc pl-5 space-y-1 text-sm ${muted}`}>
                  <li>Deployed via <strong className="text-gray-300">Truffle</strong> with <code className="text-yellow-300">HDWalletProvider</code>.</li>
                  <li>Deployed to <strong className="text-gray-300">Goerli testnet</strong> and <strong className="text-gray-300">Polygon Mumbai</strong> testnet.</li>
                  <li>Contract addresses stored in deployment JSON manifests referenced by the backend service.</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Key Highlights */}
        <section className="space-y-4">
          <SectionTitle icon={<GitBranch className="w-6 h-6 text-pink-500" />} color="text-pink-500" title="Key Technical Highlights" />
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
