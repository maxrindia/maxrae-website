import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Workflow, 
  Database, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  BarChart3, 
  Globe, 
  Stethoscope, 
  ShoppingBag, 
  Truck, 
  CreditCard, 
  Building2, 
  UtensilsCrossed, 
  CheckCircle2, 
  ChevronRight, 
  PhoneCall, 
  Layers, 
  Code2, 
  LineChart, 
  ShieldCheck, 
  Calendar, 
  Clock, 
  Activity,
  Cpu,
  Compass,
  Hammer,
  Rocket
} from 'lucide-react';

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ size = 20, color = "#ffffff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export default function HomePage({ onOpenContact }) {
  const [selectedIndustry, setSelectedIndustry] = useState('realestate');

  // WhatsApp link with pre-filled Dubai inquiry
  const whatsappUrl = "https://wa.me/971501234567?text=Hello%20MaxR%20Technologies%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20enterprise%20services";

  // 1. Core Services (Strictly the 4 requested)
  const services = [
    {
      id: "ai-automation",
      title: "AI Automation",
      badge: "Core Automation",
      desc: "Autonomous conversational voice receptionists, WhatsApp AI assistants, CRM synchronization, and multi-step workflow automations engineered to eradicate manual drag.",
      features: [
        "Inbound & Outbound AI Voice Agents (< 1s latency)",
        "Official WhatsApp Business API automations",
        "Bi-directional CRM Sync (HubSpot, Salesforce, Zoho)",
        "Automated 24/7 calendar booking & lead qualification"
      ],
      icon: <Bot size={28} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "web-app-dev",
      title: "Web & App Dev",
      badge: "Software Engineering",
      desc: "Bespoke high-performance web platforms, cross-platform iOS & Android mobile applications, and enterprise cloud SaaS systems engineered for lightning speed and conversion.",
      features: [
        "Custom web applications with React & Next.js",
        "Native & cross-platform mobile apps (iOS & Android)",
        "Enterprise SaaS architecture & API gateways",
        "High-converting UX/UI wireframing & modern design"
      ],
      icon: <Code2 size={28} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      badge: "Growth Engine",
      desc: "Data-driven SEO infrastructures, high-converting digital funnels, and targeted performance marketing built to capture market share and acquire high-intent enterprise clients in the UAE.",
      features: [
        "Technical & Local UAE Search Engine Optimization (SEO)",
        "Performance Paid Campaigns (Google & Meta Ads)",
        "Conversion Rate Optimization (CRO) & Funnels",
        "Full-funnel lead tracking & attribution analytics"
      ],
      icon: <TrendingUp size={28} color="#00bba7" />,
      link: "/services"
    },
    {
      id: "data-analytics",
      title: "Data & Analytics",
      badge: "Intelligence",
      desc: "Real-time predictive dashboards, unified operational pipelines, and intelligence engines turning fragmented business data into actionable competitive advantages.",
      features: [
        "Real-time executive KPI & revenue dashboards",
        "Predictive operational & sales forecasting",
        "Automated cross-platform data pipeline integration",
        "Customer lifetime value & retention modeling"
      ],
      icon: <LineChart size={28} color="#00bba7" />,
      link: "/services"
    }
  ];

  // 2. How It Works (Understand → Build → Grow)
  const methodologySteps = [
    {
      step: "01",
      title: "Understand",
      subtitle: "Operational Audit & Strategy",
      desc: "We perform a comprehensive audit of your operational workflows, software stack, and customer friction points. We identify high-leverage bottlenecks and architect a tailored technical blueprint with clear ROI modeling.",
      deliverables: [
        "Workflow Bottleneck Audit",
        "Technical Feasibility Blueprint",
        "Custom ROI & Milestone Roadmap"
      ],
      icon: <Compass size={24} color="#00bba7" />
    },
    {
      step: "02",
      title: "Build",
      subtitle: "Sprint-Based Engineering",
      desc: "Our engineering squad develops and deploys your custom AI voice models, bespoke web portals, and bi-directional API workflows. We follow agile 7-day sprint cycles with bank-grade security and rigorous QA testing.",
      deliverables: [
        "Trained AI Agents & Software",
        "Seamless API & CRM Integration",
        "End-to-End Stress Testing"
      ],
      icon: <Hammer size={24} color="#00bba7" />
    },
    {
      step: "03",
      title: "Grow",
      subtitle: "Autonomous Scale & Tuning",
      desc: "We take your systems live and continuously monitor performance 24/7. Through continuous reinforcement tuning and dedicated SLA support, we scale your operational capacity by 2X–5X without increasing headcount.",
      deliverables: [
        "24/7 Production SLA Monitoring",
        "Continuous Model Optimization",
        "Multi-Location Scalability"
      ],
      icon: <Rocket size={24} color="#00bba7" />
    }
  ];

  // 3. Industries We Serve (Pills: Real Estate, Retail, Logistics, Finance, Hospitality, Healthcare)
  const industries = [
    {
      id: "realestate",
      label: "Real Estate",
      fullName: "Real Estate & Property Development",
      icon: <Building2 size={20} />,
      headline: "Capture high-intent international property buyers around the clock with zero missed opportunities.",
      desc: "Automate inbound lead qualification from property portals, handle off-hours VIP viewing bookings with natural Arabic and British English voice bots, and automatically dispatch customized WhatsApp brochures to qualified investors.",
      metrics: ["< 2s Lead Response Time", "+240% Viewing Bookings", "Zero Missed Leads"]
    },
    {
      id: "retail",
      label: "Retail",
      fullName: "Retail & E-Commerce",
      icon: <ShoppingBag size={20} />,
      headline: "Autonomous post-purchase engagement and instant customer support resolution.",
      desc: "Connect autonomous AI assistants directly to Shopify, Magento, and ERP systems to instantly deflect order tracking inquiries, process returns, recover abandoned checkouts, and deliver hyper-personalized WhatsApp offers.",
      metrics: ["85% Instant Deflection", "< 8s WhatsApp Response", "$140k+ Cart Recovery"]
    },
    {
      id: "logistics",
      label: "Logistics",
      fullName: "Logistics & Supply Chain",
      icon: <Truck size={20} />,
      headline: "Real-time consignment tracking, driver coordination, and automated dispatch alerts.",
      desc: "Empower fleet coordinators with automated voice and SMS dispatch updates. Reduce telephone hold times, automate consignee delivery confirmation, and synchronize shipping exceptions directly into your TMS in real time.",
      metrics: ["100% Milestone Visibility", "-70% Dispatch Call Load", "Zero Delivery Drift"]
    },
    {
      id: "finance",
      label: "Finance",
      fullName: "Finance & FinTech",
      icon: <CreditCard size={20} />,
      headline: "Bank-grade client onboarding, KYC screening, and automated financial transaction alerts.",
      desc: "Streamline client intake, preliminary document verification, and appointment booking with wealth advisors. Built with rigorous 256-bit encryption and full adherence to UAE data governance standards.",
      metrics: ["Bank-Grade Encryption", "3x Faster Onboarding", "Full UAE PDPL Compliance"]
    },
    {
      id: "hospitality",
      label: "Hospitality",
      fullName: "Hospitality & Travel",
      icon: <UtensilsCrossed size={20} />,
      headline: "Multilingual reservation desks and seamless 24/7 guest concierge automation.",
      desc: "Eliminate busy signals during peak reservation hours. Our voice agents answer table and suite booking inquiries, verify dietary preferences, send instant WhatsApp confirmations, and upsell premium packages flawlessly.",
      metrics: ["Zero Busy Signals", "Multilingual Voice", "Instant Confirmation"]
    },
    {
      id: "healthcare",
      label: "Healthcare",
      fullName: "Healthcare & Clinics",
      icon: <Stethoscope size={20} />,
      headline: "Cut clinic appointment no-shows and deliver 24/7 zero-wait patient scheduling.",
      desc: "Automate patient bookings, doctor schedule synchronizations, treatment inquiry answers, and two-way WhatsApp appointment reminders. Liberate front-desk nurses from phones so they can focus on patient care.",
      metrics: ["-68% No-Show Rate", "24/7 Patient Intake", "98.5% Satisfaction"]
    }
  ];

  const activeIndustryData = industries.find(ind => ind.id === selectedIndustry) || industries[0];

  return (
    <div className="home-page" style={{ minHeight: '100%', background: '#ffffff', color: '#0f172a', position: 'relative', overflow: 'hidden' }}>
      
      {/* ── Background Geometric Grid Pattern (Subtle Architectural Lines) ── */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1100px',
          backgroundImage: `
            linear-gradient(to right, rgba(226, 232, 240, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* ── Ambient Radial Teal Glow (Dubai Tech Accent) ── */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '760px',
          height: '460px',
          background: 'radial-gradient(ellipse at center, rgba(0, 187, 167, 0.12), transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        className="hero-section"
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          paddingTop: '2.5rem', 
          paddingBottom: '4.5rem' 
        }}
      >
        <div className="container">
          
          {/* Eyebrow Pill with Live Glowing Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(0, 187, 167, 0.08)',
                border: '1px solid rgba(0, 187, 167, 0.3)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#00bba7',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              <span 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#00bba7',
                  boxShadow: '0 0 10px #00bba7',
                  display: 'inline-block'
                }} 
              />
              <span>Dubai, UAE · Enterprise AI & Digital Engineering</span>
            </div>
          </div>

          {/* Main Headline */}
          <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto' }}>
            <h1 
              style={{
                fontSize: 'clamp(2.35rem, 5.2vw, 3.85rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                color: '#0a1428',
                letterSpacing: '-0.03em',
                marginBottom: '1.25rem'
              }}
            >
              AI Automation That Builds.{' '}
              <span 
                style={{
                  background: 'linear-gradient(135deg, #00bba7 0%, #0f766e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}
              >
                You Grow.
              </span>
            </h1>

            {/* Subtext */}
            <p 
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
                color: '#475569',
                lineHeight: 1.6,
                maxWidth: '680px',
                margin: '0 auto 2.25rem'
              }}
            >
              We engineer autonomous AI voice agents, bespoke web & mobile applications, and high-performance digital engines built specifically to scale modern enterprises across Dubai and the UAE.
            </p>

            {/* 2 Main CTAs (WhatsApp Button + Explore Services / Call) */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '3.5rem'
              }}
            >
              {/* Primary CTA Button */}
              <Link
                to="/services"
                className="btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#00bba7',
                  color: '#040811',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(0, 187, 167, 0.25)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0d9488';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(0, 187, 167, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 187, 167, 0.25)';
                }}
              >
                <span>Explore Services</span>
                <ArrowRight size={17} />
              </Link>

              {/* Prominent WhatsApp CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with MaxR Engineers on WhatsApp"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1ebd59';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 22px rgba(37, 211, 102, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(37, 211, 102, 0.3)';
                }}
              >
                <WhatsAppIcon size={20} color="#ffffff" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Secondary Outline: Book a Strategy Call */}
              <button
                onClick={onOpenContact}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ffffff',
                  color: '#0a1428',
                  border: '1.5px solid #e2e8f0',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.65rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.color = '#00bba7';
                  e.currentTarget.style.background = '#f8fafc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#0a1428';
                  e.currentTarget.style.background = '#ffffff';
                }}
              >
                <Calendar size={17} color="#00bba7" />
                <span>Book a Call</span>
              </button>
            </div>
          </div>

          {/* UAE Proof Points & Trust Strip */}
          <div 
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.5rem 2rem',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '1.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Geometric Top Accent Strip */}
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #00bba7, #2dd4bf, #0f766e)'
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Activity size={22} color="#00bba7" />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', lineHeight: 1.1 }}>99.4%</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>Operational Accuracy</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Clock size={22} color="#00bba7" />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', lineHeight: 1.1 }}>&lt; 1 Second</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>Voice Agent Latency</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Cpu size={22} color="#00bba7" />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', lineHeight: 1.1 }}>24/7/365</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>Autonomous Workflows</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 42, height: 42, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={22} color="#00bba7" />
              </div>
              <div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', lineHeight: 1.1 }}>UAE Licensed</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 500 }}>DET Dubai Registered</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. SERVICES SECTION (Strictly 4 Cards: AI Automation, Web & App Dev, Digital Marketing, Data & Analytics)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="services-overview"
        style={{ 
          padding: '5rem 0', 
          background: '#f8fafc', 
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative'
        }}
      >
        <div className="container">
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              What We Build
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Enterprise Solutions Engineered for Scale
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6 }}>
              From intelligent conversational AI voice bots to mission-critical web applications, explore our four core engineering capabilities.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.75rem'
            }}
          >
            {services.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 4px 18px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 187, 167, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.03)';
                }}
              >
                {/* Top Badge & Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ width: 54, height: 54, borderRadius: '12px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#00bba7', background: 'rgba(0,187,167,0.08)', padding: '4px 10px', borderRadius: '6px' }}>
                    {item.badge}
                  </span>
                </div>

                {/* Card Title & Desc */}
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.55, marginBottom: '1.5rem', flex: 1 }}>
                  {item.desc}
                </p>

                {/* Feature Bullet List */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', marginBottom: '1.75rem' }}>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: 0, margin: 0 }}>
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.825rem', color: '#334155', lineHeight: 1.4 }}>
                        <CheckCircle2 size={15} color="#00bba7" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* React Router Link (No Hash) */}
                <Link
                  to={item.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00bba7',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                    marginTop: 'auto',
                    transition: 'gap 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.gap = '10px'}
                  onMouseLeave={(e) => e.currentTarget.style.gap = '6px'}
                >
                  <span>Explore {item.title}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom Action Note */}
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#0a1428',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                padding: '0.75rem 1.75rem',
                borderRadius: '10px',
                background: '#ffffff',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#00bba7';
                e.currentTarget.style.color = '#00bba7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.color = '#0a1428';
              }}
            >
              <span>View Comprehensive Service Breakdown</span>
              <ChevronRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. HOW IT WORKS (3 Steps: Understand → Build → Grow)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="how-it-works"
        style={{ 
          padding: '5.5rem 0', 
          background: '#ffffff', 
          position: 'relative' 
        }}
      >
        <div className="container">
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 4rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              Our Proven Methodology
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              From Operational Audit to Autonomous Scale
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6 }}>
              A disciplined, three-stage engineering framework designed to deliver production-ready automation without operational disruption.
            </p>
          </div>

          {/* 3 Step Connected Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              position: 'relative'
            }}
          >
            {methodologySteps.map((stepItem, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 187, 167, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.03)';
                }}
              >
                {/* Big Step Number in Corner */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.75rem',
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'rgba(0, 187, 167, 0.15)',
                    fontFamily: 'monospace',
                    lineHeight: 1
                  }}
                >
                  {stepItem.step}
                </div>

                {/* Step Icon */}
                <div 
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '12px',
                    background: 'rgba(0,187,167,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  {stepItem.icon}
                </div>

                {/* Step Header */}
                <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#00bba7', fontWeight: 700 }}>
                  {stepItem.subtitle}
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0a1428', marginTop: '4px', marginBottom: '0.85rem' }}>
                  {stepItem.title}
                </h3>

                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.75rem', flex: 1 }}>
                  {stepItem.desc}
                </p>

                {/* Deliverables Box */}
                <div 
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #f1f5f9',
                    borderRadius: '12px',
                    padding: '1rem 1.25rem'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#0a1428', marginBottom: '8px' }}>
                    Key Deliverables:
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: 0, padding: 0 }}>
                    {stepItem.deliverables.map((del, dIdx) => (
                      <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.825rem', color: '#475569' }}>
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#00bba7' }} />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. INDUSTRIES WE SERVE (Tag Pills: Real Estate, Retail, Logistics, Finance, Hospitality, Healthcare)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        id="industries-we-serve"
        style={{ 
          padding: '5.5rem 0', 
          background: '#f8fafc', 
          borderTop: '1px solid #f1f5f9',
          borderBottom: '1px solid #f1f5f9',
          position: 'relative' 
        }}
      >
        <div className="container">
          
          {/* Section Header */}
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              Specialized Domain Expertise
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              Industries We Serve
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6 }}>
              Tailored automation blueprints calibrated for the specific commercial and regulatory demands of UAE industry leaders.
            </p>
          </div>

          {/* Interactive Tag Pills Strip */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.65rem',
              flexWrap: 'wrap',
              marginBottom: '2.5rem'
            }}
          >
            {industries.map((ind) => {
              const isActive = ind.id === selectedIndustry;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: isActive ? '#0a1428' : '#ffffff',
                    color: isActive ? '#ffffff' : '#475569',
                    border: isActive ? '1.5px solid #0a1428' : '1.5px solid #e2e8f0',
                    boxShadow: isActive ? '0 4px 14px rgba(10, 20, 40, 0.15)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#00bba7';
                      e.currentTarget.style.color = '#00bba7';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.color = '#475569';
                    }
                  }}
                >
                  <span style={{ color: isActive ? '#00bba7' : '#64748b' }}>
                    {ind.icon}
                  </span>
                  <span>{ind.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Showcase Card */}
          <div 
            style={{
              maxWidth: '960px',
              margin: '0 auto',
              background: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 3rem)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.05)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0,187,167,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00bba7' }}>
                  {activeIndustryData.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#00bba7', fontWeight: 700 }}>
                    Industry Focus
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a1428', margin: 0 }}>
                    {activeIndustryData.fullName}
                  </h3>
                </div>
              </div>

              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.4, margin: 0 }}>
                {activeIndustryData.headline}
              </h4>

              <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                {activeIndustryData.desc}
              </p>

              {/* Metrics Highlights */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #f1f5f9'
                }}
              >
                {activeIndustryData.metrics.map((m, mIdx) => (
                  <div key={mIdx} style={{ background: '#f8fafc', borderRadius: '10px', padding: '1rem', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#00bba7" flexShrink={0} />
                    <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0a1428' }}>{m}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem' }}>
                <Link
                  to="/industries"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00bba7',
                    fontWeight: 700,
                    fontSize: '0.925rem',
                    textDecoration: 'none'
                  }}
                >
                  <span>Explore all industry case studies</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. CTA STRIP (WhatsApp Button + Book a Call Button + UAE License Note)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        className="cta-strip"
        style={{ 
          padding: '5.5rem 0', 
          background: 'linear-gradient(135deg, #070d1a 0%, #0a1428 50%, #0c1c38 100%)', 
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Geometric Accent Circles */}
        <div 
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 187, 167, 0.18), transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Subtle Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(0,187,167,0.15)', border: '1px solid rgba(0,187,167,0.3)', marginBottom: '1.25rem' }}>
              <Sparkles size={16} color="#00bba7" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Start Your Autonomous Transformation
              </span>
            </div>

            <h2 
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.18,
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem'
              }}
            >
              Ready to Scale Your Operations in Dubai & Beyond?
            </h2>

            <p 
              style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: 1.6,
                maxWidth: '640px',
                margin: '0 auto 2.5rem'
              }}
            >
              Deploy production-ready conversational AI voice agents, modern web platforms, and automated data pipelines in as little as 7 days. Speak directly with our technical leadership today.
            </p>

            {/* 2 Prominent CTA Buttons (WhatsApp + Book a Call) */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem'
              }}
            >
              {/* WhatsApp Button (Prominent) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Instant WhatsApp Consultation"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.95rem 2rem',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#1ebd59';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(37, 211, 102, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                }}
              >
                <WhatsAppIcon size={22} color="#ffffff" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Book a Strategy Call Button */}
              <button
                onClick={onOpenContact}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#00bba7',
                  color: '#040811',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.95rem 2rem',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(0, 187, 167, 0.35)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0d9488';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 28px rgba(0, 187, 167, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 187, 167, 0.35)';
                }}
              >
                <Calendar size={18} />
                <span>Book a Strategy Call</span>
              </button>
            </div>

            {/* UAE Trade License & Trust Badges Strip */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
                padding: '0.75rem 1.5rem',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '0.8rem',
                color: '#94a3b8'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={15} color="#00bba7" />
                <span>UAE Trade License: CN-4829102 (DET Dubai)</span>
              </div>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#64748b' }} />
              <div>Enterprise SLA Guarantee</div>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#64748b' }} />
              <div>Dubai Headquarters: Downtown / Business Bay</div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
