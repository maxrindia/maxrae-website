import { 
  Heart, 
  Building2, 
  ShoppingCart, 
  TrendingUp, 
  GraduationCap, 
  Luggage, 
  Users, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  PhoneCall, 
  MessageSquare, 
  Globe2, 
  Database, 
  Lock, 
  Calendar, 
  Share2, 
  BarChart3,
  Search,
  Bot,
  Coins,
  Factory
} from 'lucide-react';

export const industriesData = {
  "healthcare": {
    id: "healthcare",
    name: "Healthcare & Clinics",
    categoryKey: "healthcare",
    tagline: "Never miss a patient call. We automate clinic reception, WhatsApp reminders, and EHR calendar booking.",
    headline: "AI Receptionist, WhatsApp Booking & Patient Portals for Clinics",
    heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "70% Less No-Shows",
    metrics: [
      { label: "No-Show Reduction", value: "70%" },
      { label: "Call Response Time", value: "< 500ms" },
      { label: "Patient Booking Uplift", value: "3.2×" }
    ],
    servicesProvided: [
      {
        icon: PhoneCall,
        title: "24/7 AI Voice Receptionist & Call Handler",
        description: "Answers patient phone calls instantly in English & Arabic. Checks doctor availability, answers treatment queries, and books appointments with zero missed calls.",
        tag: "VOICE AI"
      },
      {
        icon: MessageSquare,
        title: "Automated WhatsApp Booking & Location Reminders",
        description: "Sends instant WhatsApp appointment confirmations with clinic Google Maps directions and reminders, cutting appointment no-shows by 70%.",
        tag: "BULK WHATSAPP"
      },
      {
        icon: Globe2,
        title: "Clinic Website & Online Patient Booking Portal",
        description: "High-speed medical website showcasing treatments, doctor profiles, patient reviews, and instant online appointment booking.",
        tag: "WEB & PORTALS"
      },
      {
        icon: Calendar,
        title: "EHR & Clinic Management Software Sync",
        description: "Direct 2-way sync with your clinic CRM so patient records, history, and doctor calendars stay updated automatically.",
        tag: "CRM AUTOMATION"
      },
      {
        icon: Search,
        title: "Google Ads & Local Clinic SEO",
        description: "Targeted campaigns to rank #1 when local patients search for dental, dermatology, or specialized medical treatments.",
        tag: "PATIENT GROWTH"
      }
    ],
    results: [
      "70% reduction in appointment no-shows through automated WhatsApp reminders",
      "Zero abandoned patient phone calls during peak morning hours",
      "Reception desk saves 15+ hours weekly on manual phone scheduling"
    ]
  },

  "real-estate": {
    id: "real-estate",
    name: "Real Estate & Property",
    categoryKey: "real-estate",
    tagline: "Close property deals faster. We deploy 45-second speed-to-lead calling, bulk launch broadcasts, and automated broker CRM routing.",
    headline: "AI Voice Calling, Property Portals & Bulk WhatsApp for Real Estate",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "3× Lead Conversion",
    metrics: [
      { label: "Speed to Lead", value: "< 45 Sec" },
      { label: "Viewing Appointments", value: "3.2×" },
      { label: "CRM Sync Accuracy", value: "100%" }
    ],
    servicesProvided: [
      {
        icon: PhoneCall,
        title: "Speed-to-Lead AI Voice Calling Agent",
        description: "Automatically calls property inquiries within 45 seconds of form submission, qualifies buyer budget (cash vs mortgage), and preferred areas.",
        tag: "VOICE AGENT"
      },
      {
        icon: MessageSquare,
        title: "Bulk WhatsApp & SMS Marketing Campaigns",
        description: "Automated broadcast systems to deliver new off-plan project brochures, floorplans, and pricing directly to thousands of high-intent investors.",
        tag: "BULK BROADCASTS"
      },
      {
        icon: Globe2,
        title: "High-Converting Property Listing Website",
        description: "Ultra-fast portal with interactive unit search, virtual 3D tour embeds, floorplans, and direct 1-click WhatsApp broker chat.",
        tag: "PROPERTY PORTAL"
      },
      {
        icon: Users,
        title: "CRM Automation & Round-Robin Broker Routing",
        description: "Automatically logs leads into Zoho, HubSpot, or Salesforce, assigns them to senior brokers, and triggers automated follow-up reminders.",
        tag: "LEAD ROUTING"
      },
      {
        icon: Search,
        title: "Targeted Meta & Google Property Ad Campaigns",
        description: "High-intent buyer acquisition funnels targeting GCC and international real estate investors with proven low cost-per-lead.",
        tag: "PERFORMANCE ADS"
      }
    ],
    results: [
      "Under 45-second first response time to incoming property leads",
      "3.2× increase in verified property viewing appointments booked",
      "100% automated lead logging and broker assignment in CRM"
    ]
  },

  "ecommerce": {
    id: "ecommerce",
    name: "E-Commerce & Retail",
    categoryKey: "ecommerce",
    tagline: "Scale your retail brand. We engineer high-speed headless stores, automated WhatsApp shipping alerts, and AI customer support.",
    headline: "Custom Storefronts, WhatsApp Tracking & Abandoned Cart Recovery",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "28% Cart Recovery",
    metrics: [
      { label: "Page Load Speed", value: "< 1.2s" },
      { label: "Cart Recovery Rate", value: "+28%" },
      { label: "Support Automation", value: "80%" }
    ],
    servicesProvided: [
      {
        icon: ShoppingCart,
        title: "Custom Shopify & Headless Storefront",
        description: "Ultra-fast, mobile-first e-commerce store with 1-click checkout, multi-currency support, and conversion-optimized product pages.",
        tag: "ONLINE STORE"
      },
      {
        icon: MessageSquare,
        title: "Automated WhatsApp Order & Live Tracking Updates",
        description: "Instant order invoices, dispatch alerts, and live tracking links sent automatically to customers via WhatsApp.",
        tag: "ORDER NOTIFICATIONS"
      },
      {
        icon: Bot,
        title: "24/7 AI Customer Support & Return Assistant",
        description: "Handles order tracking queries ('Where is my shipment?'), exchange policies, and product FAQs without human agent overhead.",
        tag: "AI SUPPORT BOT"
      },
      {
        icon: Zap,
        title: "Abandoned Cart Recovery via WhatsApp & SMS",
        description: "Automatically messages customers who leave checkout with dynamic discount codes, recovering 25%+ of lost carts.",
        tag: "RECOVERY FUNNELS"
      },
      {
        icon: Share2,
        title: "Meta (Instagram / FB) & Google Shopping Ad Scaling",
        description: "Dynamic product catalog ads, Meta CAPI tracking, and audience retargeting that scale store return on ad spend (ROAS).",
        tag: "PAID MARKETING"
      }
    ],
    results: [
      "28% recovered revenue from automated WhatsApp cart reminders",
      "Sub-1.2s page load times across mobile storefronts",
      "80% of customer support queries resolved autonomously without staff"
    ]
  },

  "finance": {
    id: "finance",
    name: "Finance & FinTech",
    categoryKey: "finance",
    tagline: "Bank-grade digital infrastructure. We build encrypted client dashboards, automated WhatsApp transaction alerts, and executive analytics.",
    headline: "Secure Portals, Automated Alerts & AI Client Support for Finance",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "99.9% Cloud Uptime",
    metrics: [
      { label: "KYC Automation", value: "100%" },
      { label: "System Uptime SLA", value: "99.9%" },
      { label: "Response Time", value: "< 60 Sec" }
    ],
    servicesProvided: [
      {
        icon: Lock,
        title: "Secure Client Portal & Investment Dashboard",
        description: "Bank-grade encrypted portal for portfolio tracking, KYC document uploads, and transaction histories.",
        tag: "SECURE PORTAL"
      },
      {
        icon: MessageSquare,
        title: "Automated WhatsApp & Email Alert System",
        description: "Real-time transaction notifications, account status updates, payment reminders, and statement delivery.",
        tag: "ALERTS & STATEMENTS"
      },
      {
        icon: PhoneCall,
        title: "AI Inbound Support & Document Verification Agent",
        description: "Instant responses for loan requirements, investment inquiries, and automated preliminary document checks.",
        tag: "VOICE & CHATBOT"
      },
      {
        icon: BarChart3,
        title: "Executive BI & Financial Analytics Dashboards",
        description: "Real-time business intelligence visualizing revenue streams, customer acquisition costs, and compliance metrics.",
        tag: "BI REPORTING"
      },
      {
        icon: ShieldCheck,
        title: "Multi-Tenant Cloud Infrastructure & Security",
        description: "99.9% uptime architecture with database isolation, automated backups, and financial data compliance.",
        tag: "CLOUD SECURITY"
      }
    ],
    results: [
      "100% automated KYC intake and preliminary document verification",
      "99.9% uptime SLA with bank-grade data encryption standards",
      "Instant automated delivery of statements and payment receipts"
    ]
  },

  "education": {
    id: "education",
    name: "Education & EdTech",
    categoryKey: "education",
    tagline: "Fill your batches faster. We deploy AI inquiry callers, student portals, and bulk WhatsApp campus notifications.",
    headline: "Student Portals, AI Admission Callers & Bulk Announcements",
    heroImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "2.5× Enrollments",
    metrics: [
      { label: "Inquiry Callback", value: "< 60 Sec" },
      { label: "WhatsApp Open Rate", value: "98%" },
      { label: "Enrollment Uplift", value: "2.5×" }
    ],
    servicesProvided: [
      {
        icon: Globe2,
        title: "Institute Website & Student Admission Portal",
        description: "Professional campus website with course listings, fee schedules, online application forms, and payment gateway integration.",
        tag: "CAMPUS PORTAL"
      },
      {
        icon: PhoneCall,
        title: "AI Admission Inquiry Caller & WhatsApp Assistant",
        description: "Instantly calls prospective students who register interest, answers syllabus & fee queries, and books campus counseling tours.",
        tag: "VOICE AI CALLER"
      },
      {
        icon: MessageSquare,
        title: "Bulk WhatsApp & SMS Announcements",
        description: "Broadcast exam dates, timetable changes, admission deadlines, and parent notifications with 98% open rates.",
        tag: "BULK BROADCASTS"
      },
      {
        icon: Users,
        title: "Student Management CRM & Lead Tracking",
        description: "Tracks inquiries from first click to paid enrollment with automated staff follow-up reminders.",
        tag: "ADMISSIONS CRM"
      },
      {
        icon: Search,
        title: "Google Search Ads & Social Media Student Enrollment Funnels",
        description: "Targeted campaigns to fill batches for upcoming academic terms and specialized training programs.",
        tag: "STUDENT ACQUISITION"
      }
    ],
    results: [
      "Under 60s phone qualification of prospective student applications",
      "98% open rate on urgent campus announcements via WhatsApp",
      "2.5× increase in completed student admission enrollments"
    ]
  },

  "hospitality": {
    id: "hospitality",
    name: "Hospitality & Tourism",
    categoryKey: "hospitality",
    tagline: "Cut OTA commissions. We build direct reservation websites, multilingual AI WhatsApp concierges, and automated guest review funnels.",
    headline: "Direct Booking Engines, 24/7 AI Concierge & Review Automation",
    heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "40% Direct Bookings",
    metrics: [
      { label: "Direct Bookings", value: "+40%" },
      { label: "5-Star Review Growth", value: "3.0×" },
      { label: "OTA Commission Saved", value: "100%" }
    ],
    servicesProvided: [
      {
        icon: Luggage,
        title: "Direct Hotel & Restaurant Booking Engine",
        description: "Custom booking website with zero commission fees, instant room/table reservations, and payment processing.",
        tag: "DIRECT BOOKING"
      },
      {
        icon: PhoneCall,
        title: "24/7 Multilingual AI Concierge Bot (English & Arabic)",
        description: "Handles guest inquiries on WhatsApp and phone for menu specials, room service, check-in policies, and local Dubai attractions.",
        tag: "AI CONCIERGE"
      },
      {
        icon: MessageSquare,
        title: "Automated Pre-Arrival Guides & Google Review Collection",
        description: "Sends check-in details and WiFi passwords before arrival, and triggers automated WhatsApp review requests post-stay.",
        tag: "REPUTATION BOT"
      },
      {
        icon: Share2,
        title: "Social Media Content & Influencer Growth Strategy",
        description: "High-impact video reels, menu highlights, and seasonal promotion campaigns that drive foot traffic.",
        tag: "VIRAL REACH"
      },
      {
        icon: Search,
        title: "Local Dubai SEO & Google Business Profile Optimization",
        description: "Ranks your venue at the top of Google Maps and local search for tourists and residents.",
        tag: "LOCAL MAPS SEO"
      }
    ],
    results: [
      "40%+ increase in direct zero-commission reservations",
      "3× increase in 5-star Google reviews collected on autopilot",
      "Instant 24/7 guest service in both English and Arabic"
    ]
  },

  "professional-services": {
    id: "professional-services",
    name: "Professional Services",
    categoryKey: "professional-services",
    tagline: "Position your firm as an elite authority. We build corporate websites, AI lead screening, and automated contract e-signatures.",
    headline: "Authority Websites, AI Appointment Booking & Client Onboarding",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "#1 Search Ranking",
    metrics: [
      { label: "Lead Qualification", value: "100%" },
      { label: "Onboarding Speed", value: "< 5 Mins" },
      { label: "Retainer Growth", value: "2.8×" }
    ],
    servicesProvided: [
      {
        icon: Globe2,
        title: "Corporate Authority Website & Partner Profiles",
        description: "High-credibility digital presence highlighting practice areas, case wins, certifications, and online appointment booking.",
        tag: "CORPORATE PORTAL"
      },
      {
        icon: PhoneCall,
        title: "AI Lead Screening & Meeting Scheduler",
        description: "Screens inquiries, collects case details, and books qualified meetings directly into partner calendars.",
        tag: "AI QUALIFIER"
      },
      {
        icon: Database,
        title: "Automated Client Onboarding & Contract E-Sign",
        description: "Automatically generates and sends NDAs, engagement proposals, and deposit invoices upon client agreement.",
        tag: "CONTRACT WORKFLOWS"
      },
      {
        icon: MessageSquare,
        title: "Bulk Email & WhatsApp Newsletter Workflows",
        description: "Keeps existing clients engaged with legal/tax updates, regulatory changes, and service reminders.",
        tag: "CLIENT RETENTION"
      },
      {
        icon: Search,
        title: "B2B LinkedIn & Google Search Client Acquisition",
        description: "Targeted advertising and SEO positioning your firm as the go-to authority in the UAE and region.",
        tag: "B2B PIPELINE"
      }
    ],
    results: [
      "Zero time wasted on unqualified inquiry phone calls",
      "Automated proposal and contract signing in under 5 minutes",
      "#1 Google ranking for high-ticket corporate practice searches"
    ]
  },

  "technology": {
    id: "technology",
    name: "Technology & Startups",
    categoryKey: "technology",
    tagline: "Launch in days, not months. We build production web & mobile apps in 2-week agile sprints with enterprise scalability.",
    headline: "Rapid MVP Development, AI Pipeline Integration & Cloud DevOps",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "< 7 Day MVP Launch",
    metrics: [
      { label: "MVP Sprint 1", value: "< 7 Days" },
      { label: "Architecture Uptime", value: "99.9%" },
      { label: "Code Ownership", value: "100%" }
    ],
    servicesProvided: [
      {
        icon: Rocket,
        title: "Rapid Full-Stack MVP Product Development",
        description: "We build your web or mobile app in agile 2-week sprints using React, Next.js, Flutter, and Node.js with production-ready architecture.",
        tag: "MVP SPRINTS"
      },
      {
        icon: Bot,
        title: "Autonomous AI & LLM Pipeline Integration",
        description: "Custom AI agents, vector database search (Pinecone/pgvector), and automated LLM workflows tailored to your product.",
        tag: "AI & VECTOR SEARCH"
      },
      {
        icon: ShieldCheck,
        title: "Cloud Infrastructure, Docker & CI/CD Pipelines",
        description: "Scalable AWS / GCP serverless setup with automated deployment pipelines and 99.9% uptime monitoring.",
        tag: "DEVOPS & SCALING"
      },
      {
        icon: Zap,
        title: "Subscription & Payment Gateway Integration",
        description: "Stripe, Apple Pay, and local GCC payment gateways with automated recurring billing and invoice generation.",
        tag: "BILLING & STRIPE"
      },
      {
        icon: PhoneCall,
        title: "Speed-to-Lead Outbound Voice & Chatbot Demos",
        description: "Interactive product demos with automated call triggers and live onboarding bots.",
        tag: "DEMO AGENTS"
      }
    ],
    results: [
      "Sprint 1 working prototype deployed to production in under 7 days",
      "Zero technical debt with modular, strictly typed codebases",
      "99.9% uptime SLA with automated serverless scaling"
    ]
  },

  "web3-crypto": {
    id: "web3-crypto",
    name: "Web3 & Crypto",
    categoryKey: "web3-crypto",
    tagline: "Institutional-grade dApps, Telegram & Discord AI community agents, tokenomics dashboards, and automated on-chain alerts.",
    headline: "Smart Contract Portals, AI Community Agents & On-Chain Analytics",
    heroImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "99.99% Uptime",
    metrics: [
      { label: "RPC Response Latency", value: "< 25ms" },
      { label: "Community Queries Automated", value: "85%" },
      { label: "Security Audit Readiness", value: "100%" }
    ],
    servicesProvided: [
      {
        icon: Coins,
        title: "Decentralized Web Applications & Multi-Chain Wallet Connect",
        description: "High-performance Next.js & Wagmi/Viem frontends with seamless wallet onboarding (MetaMask, Phantom, Coinbase, WalletConnect), gas optimization, and instant transaction signing.",
        tag: "DAPP FRONTENDS"
      },
      {
        icon: Bot,
        title: "24/7 Telegram & Discord AI Community Agents",
        description: "Autonomous support agents trained on protocol whitepapers and tokenomics that moderate communities, verify token holders, answer user inquiries, and filter spam in real-time.",
        tag: "COMMUNITY AI"
      },
      {
        icon: ShieldCheck,
        title: "Smart Contract Security & Multi-Sig Workflow Automation",
        description: "Automated vulnerability scanning, invariant unit testing harnesses, and automated multi-sig treasury workflows built to institutional security standards.",
        tag: "ON-CHAIN SECURITY"
      },
      {
        icon: BarChart3,
        title: "Live Tokenomics & On-Chain Analytics Dashboards",
        description: "Interactive executive BI tracking Total Value Locked (TVL), daily active addresses, liquidity pool depth, staking yields, and token burn schedules.",
        tag: "ANALYTICS & BI"
      },
      {
        icon: Zap,
        title: "Automated Whale Alerts & Event Dispatches",
        description: "Real-time webhook pipelines triggering instant alerts across Telegram, Discord, and X for large transfers, liquidity shifts, or governance voting events.",
        tag: "ALERT AUTOMATION"
      }
    ],
    results: [
      "85% automated resolution of repetitive Telegram and Discord support tickets",
      "Sub-second dApp wallet connection and low-latency RPC query execution",
      "Real-time treasury monitoring with automated anomaly alerts"
    ]
  },

  "manufacturing": {
    id: "manufacturing",
    name: "Manufacturing",
    categoryKey: "manufacturing",
    tagline: "Streamline shop-floor operations. We build predictive maintenance dashboards, ERP-synced supply chain pipelines, and automated vendor communication.",
    headline: "Smart Factory IoT Dashboards, ERP Automations & Supply Chain Systems",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80",
    metricBadge: "42% Downtime Drop",
    metrics: [
      { label: "Downtime Reduction", value: "42%" },
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "PO Processing Speed", value: "4× Faster" }
    ],
    servicesProvided: [
      {
        icon: Factory,
        title: "Shop-Floor IoT Telemetry & Real-Time Production Screens",
        description: "Centralized plant monitoring dashboards tracking machine cycle times, line yield, OEE (Overall Equipment Effectiveness), and temperature sensors across operational facilities.",
        tag: "SMART FACTORY"
      },
      {
        icon: Database,
        title: "ERP & Warehouse Automated Supply Chain Pipelines",
        description: "Two-way automated pipelines linking SAP, Oracle, Zoho, or custom ERPs for real-time inventory counts, automated purchase orders, and shipment dispatch sync.",
        tag: "ERP PIPELINES"
      },
      {
        icon: Zap,
        title: "Predictive Maintenance & Machine Anomaly Alerts",
        description: "Sensor-driven anomaly detection models triggering instant WhatsApp and SMS alerts to plant engineers before critical equipment failure occurs.",
        tag: "PREDICTIVE AI"
      },
      {
        icon: PhoneCall,
        title: "Automated Vendor & Supplier Follow-Up Voice Agents",
        description: "AI calling and WhatsApp engines that follow up on purchase orders, delivery ETAs, and warehouse dispatch verifications without manual coordinator time.",
        tag: "SUPPLIER AGENTS"
      },
      {
        icon: ShieldCheck,
        title: "Digitized Quality Assurance & ISO Audit Reporting",
        description: "Mobile-ready batch inspection logging, barcode verification, and automated compliance report generation replacing error-prone manual paper sheets.",
        tag: "QA & COMPLIANCE"
      }
    ],
    results: [
      "42% reduction in unplanned equipment downtime through automated anomaly alerts",
      "4× faster purchase order confirmation and supplier reconciliation cycles",
      "Paperless shop-floor records synced directly into executive BI reporting"
    ]
  }
};
