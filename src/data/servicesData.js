import { 
  Globe2, 
  Smartphone, 
  Layers, 
  TrendingUp, 
  Share2, 
  Bot, 
  Users, 
  Palette, 
  Cpu, 
  BarChart3, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Code2, 
  Terminal, 
  Search,
  Workflow
} from 'lucide-react';

export const servicesData = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    category: "DIGITAL ENGINEERING",
    headline: "High-Performance Websites & Web Apps Engineered to Convert",
    subheadline: "We build ultra-fast, search-optimized web platforms using React, Next.js, and modern headless architectures that turn visitors into high-ticket clients.",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Average Page Load", value: "< 1.2s" },
      { label: "Conversion Uplift", value: "3.2×" }
    ],
    overview: "In modern business, a slow or confusing website leaks revenue every minute. We build clean, responsive, and secure web applications designed with high-conversion typography, instantaneous loading, and seamless backend integrations.",
    capabilities: [
      {
        icon: Globe2,
        title: "Enterprise Corporate Portals",
        description: "Bespoke digital platforms tailored for enterprise credibility, high search visibility, and seamless customer intake."
      },
      {
        icon: Code2,
        title: "Next.js & React Web Apps",
        description: "Server-side rendered dynamic web applications built with type-safe architectures and lightning-fast edge caching."
      },
      {
        icon: Zap,
        title: "Headless E-Commerce Frontends",
        description: "Ultra-fast checkout funnels, multi-currency pricing, and real-time inventory synchronization."
      },
      {
        icon: Search,
        title: "Technical SEO & Core Web Vitals",
        description: "Clean semantic HTML, structured JSON-LD schema, and sub-second rendering that rank your brand at the top of Google."
      }
    ],
    process: [
      { step: "01", title: "Information Architecture", desc: "User journeys, conversion wireframes, and technical stack selection." },
      { step: "02", title: "Design & Prototyping", desc: "Interactive Figma prototypes matching your exact brand aesthetic." },
      { step: "03", title: "Agile Development", desc: "Two-week execution sprints with continuous staging previews." },
      { step: "04", title: "Launch & Optimization", desc: "Automated CI/CD deployment, CDN caching, and 24/7 uptime monitoring." }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel Edge", "Cloudflare"],
    faqs: [
      {
        q: "How long does a custom web project take?",
        a: "Standard corporate portals launch within 2 to 4 weeks. Complex web applications with authentication and custom integrations typically take 4 to 8 weeks delivered in agile bi-weekly sprints."
      },
      {
        q: "Will our team be able to update content easily?",
        a: "Yes. We configure user-friendly headless content management systems (Sanity, Strapi, or WordPress API) so your marketing team can publish updates without writing code."
      },
      {
        q: "Is post-launch hosting and maintenance included?",
        a: "Yes, every deployment includes 30 days of complimentary hypercare support, with dedicated ongoing SLA maintenance plans available."
      }
    ]
  },

  "app-development": {
    slug: "app-development",
    title: "Mobile App Engineering",
    category: "MOBILE ENGINEERING",
    headline: "Native iOS & Android Apps Crafted for 60 FPS Performance",
    subheadline: "Engage customers directly on their home screens with fluid cross-platform mobile apps built with Flutter and React Native.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "App Store Approvals", value: "100%" },
      { label: "Crash-Free Sessions", value: "99.9%" }
    ],
    overview: "We architect reliable mobile apps from concept to App Store and Google Play publishing. We focus on offline-first reliability, biometric security, and micro-interactions that keep users returning.",
    capabilities: [
      {
        icon: Smartphone,
        title: "Cross-Platform iOS & Android",
        description: "Single-codebase Flutter and React Native engineering that cuts development cost while delivering authentic native feel."
      },
      {
        icon: ShieldCheck,
        title: "Biometric & Secure Auth",
        description: "FaceID, fingerprint verification, and enterprise-grade OAuth token storage."
      },
      {
        icon: Zap,
        title: "Push Notifications & Engagement",
        description: "Segmented automated push campaigns that trigger re-engagement and notify customers in real time."
      },
      {
        icon: Workflow,
        title: "Offline-First Synchronization",
        description: "Local device caching and background queueing so the app works reliably in poor network environments."
      }
    ],
    process: [
      { step: "01", title: "App Scope & UX Flow", desc: "User interaction blueprints, screen hierarchy, and offline logic." },
      { step: "02", title: "Native UI Design", desc: "High-fidelity iOS Human Interface & Android Material Design layouts." },
      { step: "03", title: "Sprint Execution", desc: "Bi-weekly builds delivered directly via TestFlight and Google Internal Testing." },
      { step: "04", title: "Store Submission", desc: "End-to-end handling of Apple App Store and Google Play store compliance and launch." }
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "GraphQL", "Supabase", "Stripe Mobile SDK"],
    faqs: [
      {
        q: "Do you build for both Apple and Android?",
        a: "Yes. Our cross-platform engineering delivers pixel-perfect native apps for both iOS and Android simultaneously from a unified codebase."
      },
      {
        q: "Do you handle the App Store review process?",
        a: "Yes, we handle the entire submission, developer certificates, metadata setup, and guidelines verification until approved."
      }
    ]
  },

  "software-development": {
    slug: "software-development",
    title: "Software & Product Development",
    category: "CLOUD SOFTWARE & SAAS",
    headline: "Custom Software & SaaS Platforms Built for Enterprise Scale",
    subheadline: "Eliminate spreadsheet chaos and inflexible off-the-shelf subscriptions with proprietary software built precisely for your workflows.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Architecture SLA", value: "99.9%" },
      { label: "Deployment Sprints", value: "2 Weeks" },
      { label: "Technical Debt", value: "Zero" }
    ],
    overview: "When off-the-shelf tools don't fit, custom software becomes your greatest competitive advantage. We engineer scalable multi-tenant SaaS products, internal operations portals, and secure cloud databases.",
    capabilities: [
      {
        icon: Layers,
        title: "Multi-Tenant SaaS Architecture",
        description: "Scalable cloud database models, isolated tenant environments, and automated subscription billing."
      },
      {
        icon: Terminal,
        title: "Custom Internal Dashboards",
        description: "Centralized operational hubs for inventory management, partner portals, and staff scheduling."
      },
      {
        icon: ShieldCheck,
        title: "Role-Based Access Control",
        description: "Granular permissions, audit logging, and SOC2-ready data architecture."
      },
      {
        icon: Cpu,
        title: "REST & GraphQL Microservices",
        description: "Clean documented API endpoints built for high concurrency and painless integration."
      }
    ],
    process: [
      { step: "01", title: "System Architecture", desc: "Data schemas, API contracts, and security perimeter definition." },
      { step: "02", title: "Core Engine Build", desc: "Database modeling, authentication flows, and permission structures." },
      { step: "03", title: "Frontend Client Portal", desc: "Ultra-clean UI panels optimized for daily high-volume operations." },
      { step: "04", title: "Hardening & Scale", desc: "Load testing, vulnerability scans, and CI/CD automated deployment." }
    ],
    techStack: ["Node.js", "Python", "Go", "Next.js", "Docker", "PostgreSQL", "Redis", "AWS Lambda"],
    faqs: [
      {
        q: "Who owns the intellectual property (IP)?",
        a: "You own 100% of the code, IP, and repository from day one. No vendor lock-in or licensing fees."
      },
      {
        q: "Can this integrate with our existing accounting/ERP software?",
        a: "Yes, we build secure webhook pipelines connecting with SAP, Oracle, Zoho Books, QuickBooks, and proprietary internal systems."
      }
    ]
  },

  "digital-marketing": {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    category: "COMMERCIAL GROWTH",
    headline: "Data-Driven Acquisition & High-Intent Search Visibility",
    subheadline: "Stop wasting budget on vanity metrics. We build profitable paid acquisition funnels and technical SEO engines that drive measurable inbound revenue.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Average ROAS", value: "4.2×" },
      { label: "Search Impressions", value: "+350%" },
      { label: "Cost Per Lead", value: "-45%" }
    ],
    overview: "Marketing only matters when it drives qualified revenue. We combine technical SEO engineering with high-intent Google Ads and Meta paid media, paired with ruthless conversion rate optimization on landing pages.",
    capabilities: [
      {
        icon: Search,
        title: "Technical SEO & Keyword Dominance",
        description: "Dominate high-commercial intent keywords in Google Search with optimized site architecture and backlinks."
      },
      {
        icon: TrendingUp,
        title: "Google Search & Performance Max",
        description: "Target decision-makers at the exact moment they search for your services with optimized bidding strategies."
      },
      {
        icon: Zap,
        title: "High-Converting Landing Pages",
        description: "Standalone landing experiences designed specifically for paid traffic to double lead capture rates."
      },
      {
        icon: BarChart3,
        title: "Attribution & Revenue Tracking",
        description: "Server-side tracking (Meta CAPI & GA4) ensuring zero lost data and complete visibility on customer acquisition costs."
      }
    ],
    process: [
      { step: "01", title: "Competitor & Keyword Audit", desc: "Finding untapped high-intent search queries and market gaps." },
      { step: "02", title: "Funnel & Landing Build", desc: "Deploying high-converting landing pages with sub-second load times." },
      { step: "03", title: "Campaign Launch", desc: "Targeted ad groups, automated budget rules, and A/B ad creative testing." },
      { step: "04", title: "Weekly Tuning & Scaling", desc: "Pruning negative keywords and doubling down on winning segments." }
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Semrush", "Meta CAPI", "Hotjar", "Google Tag Manager"],
    faqs: [
      {
        q: "How soon do we see results?",
        a: "Paid advertising funnels generate qualified inquiries within 48 to 72 hours of campaign launch. Organic SEO typically matures over 60 to 90 days."
      },
      {
        q: "Do you provide transparent reporting?",
        a: "Yes. You receive real-time Looker Studio dashboard access showing spend, leads generated, and cost per acquisition updated hourly."
      }
    ]
  },

  "social-media-management": {
    slug: "social-media-management",
    title: "Social Media Management",
    category: "BRAND & CONTENT",
    headline: "Strategic Content & Brand Authority Across High-Intent Channels",
    subheadline: "Elevate your enterprise reputation with high-aesthetic visual storytelling, video clips, and executive positioning that commands industry respect.",
    heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Engagement Lift", value: "4.5×" },
      { label: "Monthly Reach", value: "250K+" },
      { label: "Community Inbound", value: "+80%" }
    ],
    overview: "Your social presence is the modern first impression of your company. We turn your social profiles into engines of brand authority, producing executive video shorts, carousel guides, and community engagement.",
    capabilities: [
      {
        icon: Share2,
        title: "Executive LinkedIn Positioning",
        description: "Establish founders and executives as recognized industry leaders through data-backed thought leadership."
      },
      {
        icon: Palette,
        title: "High-Production Video Shorts",
        description: "Reels and Shorts crafted with dynamic pacing, motion typography, and sound design."
      },
      {
        icon: Users,
        title: "Community & Lead Outreach",
        description: "Active monitoring of direct messages and comment inquiries to channel high-intent leads to your CRM."
      },
      {
        icon: BarChart3,
        title: "Monthly Content Calendar",
        description: "Organized 30-day production cycles with pre-approved creative themes and scheduled distribution."
      }
    ],
    process: [
      { step: "01", title: "Brand Voice Alignment", desc: "Setting tone guidelines, visual palettes, and target client personas." },
      { step: "02", title: "Batch Asset Production", desc: "Shooting, editing, and formatting 30 days of creative in one go." },
      { step: "03", title: "Automated Scheduling", desc: "Publishing across LinkedIn, Instagram, X, and YouTube at peak engagement hours." },
      { step: "04", title: "Monthly Growth Audit", desc: "Refining visual styles and topics based on actual audience engagement metrics." }
    ],
    techStack: ["Adobe Premiere Pro", "Figma", "After Effects", "Buffer", "Later", "CapCut Pro", "LinkedIn Creator"],
    faqs: [
      {
        q: "Do we have to approve posts before they go live?",
        a: "Yes. Every month's content is uploaded to a shared approval board for your sign-off before anything is published."
      }
    ]
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    category: "AUTONOMOUS OPERATIONS",
    headline: "Autonomous Operations & Self-Healing Workflow Integrations",
    subheadline: "Eliminate 70% of manual repetitive paperwork, copy-pasting, and delayed follow-ups with intelligent AI pipelines and automated integrations.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Hours Saved / Mo", value: "140+" },
      { label: "Error Rate Reduction", value: "99.4%" },
      { label: "Response Latency", value: "< 2 Mins" }
    ],
    overview: "We automate back-office operations by connecting your communications, CRM, ERP, and databases. Inquiries get qualified in seconds, invoices generate automatically, and data synchronizes without manual human entry.",
    capabilities: [
      {
        icon: Bot,
        title: "Autonomous AI Business Agents",
        description: "LLM-driven assistants that read documents, summarize customer inquiries, and draft contextual email replies."
      },
      {
        icon: Workflow,
        title: "Cross-System Workflow Automation",
        description: "Real-time automated data pipelines connecting WhatsApp, Google Workspace, Slack, and accounting software."
      },
      {
        icon: Zap,
        title: "Instant Lead Intake & Routing",
        description: "New inquiries from any channel are parsed, enriched with company details, and assigned to sales reps instantly."
      },
      {
        icon: ShieldCheck,
        title: "Self-Healing Fallback Logic",
        description: "Workflows built with error-detection, automatic retries, and instant alerting so systems never silently fail."
      }
    ],
    process: [
      { step: "01", title: "Workflow Triage", desc: "Mapping your current manual processes to pinpoint exact bottlenecks." },
      { step: "02", title: "Scenario Architecture", desc: "Building webhook endpoints and secure tokenized authentication." },
      { step: "03", title: "Stress Testing", desc: "Testing edge cases and rate limits in a dedicated sandbox environment." },
      { step: "04", title: "Production Deployment", desc: "Live integration with 24/7 telemetry and automated failure notifications." }
    ],
    techStack: ["n8n", "Make.com", "OpenAI API", "Python", "LangChain", "Meta Cloud API", "Zapier", "PostgreSQL"],
    faqs: [
      {
        q: "What tools can you connect?",
        a: "Almost any tool with an API or webhooks: WhatsApp, HubSpot, Salesforce, Zoho, Google Workspace, Slack, Stripe, QuickBooks, and custom databases."
      },
      {
        q: "Is our company data kept private?",
        a: "Yes. We use zero-retention enterprise API keys and private cloud instances so your company data is never used to train public AI models."
      }
    ]
  },

  "crm-lead-solutions": {
    slug: "crm-lead-solutions",
    title: "CRM & Speed-to-Lead Solutions",
    category: "SALES OPERATIONS",
    headline: "Under-60s Inbound Response & Automated Sales Pipelines",
    subheadline: "Leads decay 10x after 15 minutes. We build instant response engines that qualify and book prospects on your calendar before competitors even open their email.",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Response Speed", value: "< 60 Sec" },
      { label: "Calendar Bookings", value: "+240%" },
      { label: "Lead Slip Rate", value: "< 2%" }
    ],
    overview: "Most businesses lose deals not from a lack of leads, but from slow follow-up. We build automated speed-to-lead systems that trigger immediate SMS/WhatsApp confirmation, qualify budget, and sync clean pipeline stages in your CRM.",
    capabilities: [
      {
        icon: Zap,
        title: "Sub-60s Speed-to-Lead Intake",
        description: "Instant auto-reply via WhatsApp or SMS the second an ad or website form is submitted."
      },
      {
        icon: Users,
        title: "Custom CRM Pipeline Architecture",
        description: "Bespoke deal stages, automated task assignment, and deal-rot warnings configured in HubSpot or Zoho."
      },
      {
        icon: Workflow,
        title: "Multi-Touch Nurture Sequences",
        description: "Automated behavioral email and SMS follow-ups that gently nudge unbooked prospects until they respond."
      },
      {
        icon: BarChart3,
        title: "Executive Revenue Dashboards",
        description: "Real-time visibility into rep conversion rates, average deal velocity, and pipeline forecasting."
      }
    ],
    process: [
      { step: "01", title: "Sales Audit", desc: "Auditing your response time, lead drop-off points, and CRM hygiene." },
      { step: "02", title: "Pipeline Blueprint", desc: "Designing standardized deal stages, required fields, and lead scoring." },
      { step: "03", title: "Speed-to-Lead Build", desc: "Wiring instant SMS/WhatsApp notification triggers and round-robin rep routing." },
      { step: "04", title: "Sales Team Training", desc: "Hands-on walkthroughs ensuring 100% rep compliance and CRM adoption." }
    ],
    techStack: ["HubSpot", "Zoho CRM", "Salesforce", "Twilio", "Meta Cloud API", "Calendly", "n8n"],
    faqs: [
      {
        q: "Which CRMs do you support?",
        a: "We specialize in HubSpot, Zoho CRM, Salesforce, and Pipedrive, including data migration from legacy spreadsheets."
      }
    ]
  },

  "ui-ux-branding": {
    slug: "ui-ux-branding",
    title: "UI/UX & Brand Identity",
    category: "DESIGN SYSTEM",
    headline: "Distinctive Design Systems & User Interfaces That Command Respect",
    subheadline: "Transform complex business concepts into clean, intuitive, and unforgettable digital experiences that elevate your brand above the competition.",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "User Task Time", value: "-50%" },
      { label: "Usability Score", value: "95/100" },
      { label: "Design System Tokens", value: "200+" }
    ],
    overview: "Great design isn't just decoration—it is the difference between a high-ticket enterprise client trusting you or closing the tab. We design design systems, interactive web apps, and cohesive visual identities built around clarity.",
    capabilities: [
      {
        icon: Palette,
        title: "End-to-End Design Systems",
        description: "Reusable component libraries, typography tokens, and spacing grids ready for engineering handoff."
      },
      {
        icon: Layers,
        title: "Complex Web & Mobile UX",
        description: "Simplified multi-step checkout funnels, data tables, and onboarding flows validated with user testing."
      },
      {
        icon: Code2,
        title: "Interactive Figma Prototypes",
        description: "Clickable prototypes with micro-interactions that let stakeholders test the application before a line of code is written."
      },
      {
        icon: ShieldCheck,
        title: "Enterprise Brand Guidelines",
        description: "Comprehensive color palettes, typography scales, iconography guidelines, and brand rulebooks."
      }
    ],
    process: [
      { step: "01", title: "User Research & Flow", desc: "Mapping user intent, personas, and critical conversion journeys." },
      { step: "02", title: "Low-Fidelity Wireframes", desc: "Rapid validation of layouts, content density, and user ergonomics." },
      { step: "03", title: "High-Fidelity Visual Design", desc: "Polished modern interface design with micro-animations and dark/light themes." },
      { step: "04", title: "Developer Handoff", desc: "Pixel-perfect Figma tokens, auto-layout components, and CSS export." }
    ],
    techStack: ["Figma", "Adobe Illustrator", "Storybook", "Tailwind Design Tokens", "Protopie"],
    faqs: [
      {
        q: "Do you deliver Figma files ready for developers?",
        a: "Yes. All our Figma files follow atomic design principles with auto-layout, component variants, and token variables for frictionless developer implementation."
      }
    ]
  },

  "cloud-technology": {
    slug: "cloud-technology",
    title: "Cloud & Technology Architecture",
    category: "CLOUD INFRASTRUCTURE",
    headline: "High-Availability Cloud Hosting, Database Scaling & 24/7 Security",
    subheadline: "Ensure your critical business infrastructure runs with 99.9% uptime, bank-grade encryption, and automated disaster recovery backups.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Infrastructure Uptime", value: "99.95%" },
      { label: "Deployment Latency", value: "< 3 Mins" },
      { label: "Backup RPO", value: "15 Mins" }
    ],
    overview: "Downtime costs customers and damages trust. We architect scalable, secure cloud environments on AWS, Azure, and Google Cloud, with automated container deployments, database read-replicas, and continuous vulnerability scans.",
    capabilities: [
      {
        icon: Cpu,
        title: "AWS & Google Cloud Architecture",
        description: "Serverless lambda functions, load-balanced clusters, and regional edge caching configured for high concurrency."
      },
      {
        icon: ShieldCheck,
        title: "Bank-Grade Security & Zero-Trust",
        description: "TLS 1.3 encryption, Web Application Firewalls (Cloudflare WAF), and automated DDoS mitigation."
      },
      {
        icon: Workflow,
        title: "Automated CI/CD Pipelines",
        description: "GitHub Actions automated build, test, and zero-downtime deployment workflows."
      },
      {
        icon: Terminal,
        title: "Database Backups & Disaster Recovery",
        description: "Point-in-time database restoration and automated cross-region snapshot backups."
      }
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Assessing server vulnerabilities, latency bottlenecks, and cloud costs." },
      { step: "02", title: "Cloud Architecture Design", desc: "Designing secure VPCs, database subnets, and autoscaling policies." },
      { step: "03", title: "Zero-Downtime Migration", desc: "Migrating databases and DNS with continuous operational fallback." },
      { step: "04", title: "24/7 Telemetry & Alerts", desc: "Setting up real-time alerting for CPU spikes, error surges, and certificate renewals." }
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Cloudflare Enterprise", "Terraform", "GitHub Actions", "PostgreSQL"],
    faqs: [
      {
        q: "Can you help optimize existing high cloud bills?",
        a: "Yes. Our cloud audits typically identify 25% to 40% in monthly cost savings by right-sizing instances, deleting unattached volumes, and utilizing reserved pricing."
      }
    ]
  },

  "data-bi-analytics": {
    slug: "data-bi-analytics",
    title: "Data & Business Intelligence",
    category: "DATA & ANALYTICS",
    headline: "Real-Time Executive Dashboards & Unified KPI Reporting",
    subheadline: "Stop wrestling with 15 different spreadsheets. Unify your sales, marketing, and operations data into clean visual dashboards updated in real time.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    metrics: [
      { label: "Manual Report Time", value: "-90%" },
      { label: "Data Accuracy", value: "100%" },
      { label: "Dashboard Refresh", value: "Realtime" }
    ],
    overview: "Leadership needs quick, trusted numbers to make decisive business moves. We construct centralized data warehouses that ingest data from your ads, CRM, payment gateways, and inventory, displaying key metrics in executive dashboards.",
    capabilities: [
      {
        icon: BarChart3,
        title: "Executive KPI Dashboards",
        description: "Single-pane-of-glass dashboards showing revenue, customer acquisition cost, gross margins, and growth rate."
      },
      {
        icon: Workflow,
        title: "Automated ETL Data Pipelines",
        description: "Scheduled extraction and normalization of data from Stripe, Shopify, Google Ads, and CRM into a unified warehouse."
      },
      {
        icon: Zap,
        title: "Automated Executive Email Digests",
        description: "Weekly executive summaries generated automatically and delivered to leadership's inbox every Monday morning."
      },
      {
        icon: ShieldCheck,
        title: "Clean Data Governance",
        description: "De-duplicating customer records, reconciling discrepancies, and ensuring reliable financial reporting."
      }
    ],
    process: [
      { step: "01", title: "Metrics Definition", desc: "Identifying the 5 to 7 true north-star KPIs that dictate business health." },
      { step: "02", title: "Data Pipeline Connection", desc: "Connecting API connectors to ingest sales, ad spend, and inventory data." },
      { step: "03", title: "Dashboard Modeling", desc: "Building intuitive visual charts with date filters, team roll-ups, and drill-downs." },
      { step: "04", title: "Leadership Handover", desc: "Calibrating alerts for target milestones and anomaly detection." }
    ],
    techStack: ["Looker Studio", "Power BI", "PostgreSQL", "Google BigQuery", "Python", "Metabase", "Fivetran"],
    faqs: [
      {
        q: "Do we need our own data warehouse?",
        a: "Not necessarily. For most mid-market businesses, we configure cost-effective Google BigQuery or managed PostgreSQL databases that run for minimal monthly fees."
      }
    ]
  }
};
