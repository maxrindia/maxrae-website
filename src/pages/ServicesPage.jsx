import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Bot,
  Smartphone,
  Code2, 
  Globe2, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Layers, 
  MessageSquare, 
  Workflow,
  Cpu,
  Database,
  Activity,
  Sparkles,
  TrendingUp,
  ShoppingCart,
  Sliders,
  Search,
  Terminal,
  Play,
  Volume2,
  RefreshCw,
  Send,
  User,
  Check,
  Server,
  BarChart3,
  Flame,
  Award
} from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const [activeFilter, setActiveFilter] = useState('all');

  // ── 1. Voice Agent / Chat Simulator State ──
  const [chatMessages, setChatMessages] = useState([
    { sender: 'user', text: 'Hi, I need a luxury 3-bedroom villa in Palm Jumeirah with sea view.' },
    { sender: 'ai', text: 'Hello! We have 2 exclusive penthouses in Palm Jumeirah available for viewing. Would you prefer tomorrow at 3:00 PM or 5:30 PM with our senior broker?', action: 'Synced to HubSpot CRM • Calendar Slot Verified' }
  ]);
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [voiceActive, setVoiceActive] = useState(false);

  const simulateAiChat = (promptText, replyText, actionText) => {
    setChatMessages((prev) => [...prev, { sender: 'user', text: promptText }]);
    setIsAiTyping(true);
    setVoiceActive(true);
    setTimeout(() => {
      setIsAiTyping(false);
      setChatMessages((prev) => [
        ...prev, 
        { sender: 'ai', text: replyText, action: actionText }
      ]);
      setTimeout(() => setVoiceActive(false), 2000);
    }, 900);
  };

  // ── 2. Device Viewport Switcher State ──
  const [deviceMode, setDeviceMode] = useState('mobile'); // 'mobile' | 'web' | 'pwa'

  // ── 3. CRM Lead Routing Pipeline Simulator State ──
  const [pipelineStep, setPipelineStep] = useState(3);
  const [isSimulatingLead, setIsSimulatingLead] = useState(false);

  const runLeadSimulation = () => {
    setIsSimulatingLead(true);
    setPipelineStep(0);
    setTimeout(() => setPipelineStep(1), 500);
    setTimeout(() => setPipelineStep(2), 1100);
    setTimeout(() => {
      setPipelineStep(3);
      setIsSimulatingLead(false);
    }, 1800);
  };

  // ── 4. Cloud Telemetry Live Monitor State ──
  const [cloudPing, setCloudPing] = useState(12.4);
  const [testingCloud, setTestingCloud] = useState(false);

  const triggerCloudTest = () => {
    setTestingCloud(true);
    setTimeout(() => {
      setCloudPing((prev) => Number((10 + Math.random() * 4).toFixed(1)));
      setTestingCloud(false);
    }, 800);
  };

  // ── 5. E-Commerce Speed Checkout Simulator State ──
  const [currency, setCurrency] = useState('AED');
  const [checkoutTime, setCheckoutTime] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const triggerCheckoutDemo = () => {
    setIsCheckingOut(true);
    setCheckoutTime(null);
    const start = performance.now();
    setTimeout(() => {
      const end = performance.now();
      setCheckoutTime(Math.round(end - start + 140)); // Realistic ~280ms
      setIsCheckingOut(false);
    }, 280);
  };

  // Services Master Catalog
  const services = [
    {
      id: "ai-automation",
      category: "ai",
      title: "AI Voice Agents & WhatsApp Automation",
      subtitle: "Autonomous calling bots, WhatsApp lead engines & CRM workflows",
      badge: "CORE AUTOMATION",
      badgeColor: "#00bba7",
      icon: <Bot size={28} color="#00bba7" />,
      heroImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
      tagline: "Replace repetitive manual follow-ups with 24/7 intelligent voice and conversational chat bots.",
      description: "We engineer conversational AI voice bots and workflow automation pipelines tailored to UAE and global enterprise standards. Handle customer inquiries with under 500ms latency, automate appointment bookings, qualify incoming prospects, and synchronize records directly with your CRM.",
      capabilities: [
        "Human-like AI Voice Agents for inbound and outbound calling (< 450ms latency)",
        "Official Meta WhatsApp Business API automations with automated booking",
        "Two-way bi-directional CRM integration (HubSpot, Salesforce, Zoho, Pipedrive)",
        "Intelligent multi-lingual capabilities (English, Arabic, Hindi, Russian)",
        "Automated calendar booking and dynamic SMS/email confirmation loops"
      ],
      result: "Live in under 7 days · 0 missed calls · 24/7 autonomous intake",
      demoType: "chat-simulator"
    },
    {
      id: "web-mobile-apps",
      category: "apps",
      title: "Web & Mobile Application Engineering",
      subtitle: "iOS, Android, React, Next.js & enterprise full-stack portals",
      badge: "CROSS-PLATFORM ENGINEERING",
      badgeColor: "#3b82f6",
      icon: <Smartphone size={28} color="#3b82f6" />,
      heroImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
      tagline: "Engineered for 60fps native performance, intuitive UI/UX, and maximum user retention.",
      description: "From consumer-facing iOS & Android mobile apps to high-throughput enterprise SaaS portals, we build modern applications using React, Next.js, Flutter, and Node.js. Our architectures prioritize lightning-fast load times, offline availability, and intuitive interfaces.",
      capabilities: [
        "Native and cross-platform mobile apps for iOS and Android (Flutter & React Native)",
        "Enterprise Next.js 14/15 web applications with server-side rendering (SSR)",
        "Progressive Web Apps (PWAs) with offline sync and push notifications",
        "Design systems, Figma wireframing and pixel-perfect high-converting UI/UX",
        "Scalable GraphQL & RESTful API backends with robust database indexing"
      ],
      result: "99/100 Lighthouse performance · 60 FPS native smoothness · Sub-second FCP",
      demoType: "device-simulator"
    },
    {
      id: "crm-lead-solutions",
      category: "crm",
      title: "CRM & Automated Lead Routing Engines",
      subtitle: "Real-time lead qualification, instant routing & pipeline automation",
      badge: "SALES VELOCITY",
      badgeColor: "#8b5cf6",
      icon: <Workflow size={28} color="#8b5cf6" />,
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      tagline: "Convert inbound inquiries into booked client consultations within 60 seconds.",
      description: "Stop losing valuable prospects to slow manual responses. We build automated lead intake pipelines that capture inquiries from web forms, WhatsApp, and paid ads, automatically score them by intent and budget, and route them to the right sales executive with instant alerts.",
      capabilities: [
        "Sub-60-second automated response loops for all web and social inquiries",
        "AI-powered lead enrichment and budget/intent qualification scoring",
        "Automated round-robin distribution to specialized account managers",
        "Full pipeline visibility dashboards for C-suite and sales directors",
        "Automated follow-up drip sequences across WhatsApp, Email and SMS"
      ],
      result: "42s average response time · +340% increase in lead-to-meeting conversions",
      demoType: "crm-simulator"
    },
    {
      id: "cloud-saas-architecture",
      category: "cloud",
      title: "Custom SaaS & Enterprise Cloud Architecture",
      subtitle: "Cloud-native infrastructure, microservices & 99.99% high availability",
      badge: "ENTERPRISE CLOUD",
      badgeColor: "#059669",
      icon: <Cpu size={28} color="#059669" />,
      heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      tagline: "Bespoke digital architecture built to solve complex operational bottlenecks without vendor lock-in.",
      description: "When off-the-shelf software falls short, we design custom SaaS platforms and cloud infrastructure. We implement secure multi-tenant architectures, optimize database query engines, and deploy modern CI/CD automation on AWS, GCP, and Azure.",
      capabilities: [
        "End-to-end bespoke SaaS product engineering from MVP to enterprise scale",
        "Microservices architecture, Docker containerization & Kubernetes orchestration",
        "Automated CI/CD deployment pipelines with zero-downtime rolling updates",
        "Database clustering, read-replica scaling, and sub-3ms query optimization",
        "Rigorous SOC2-ready security hardening, end-to-end encryption & RBAC"
      ],
      result: "99.995% uptime SLA · 12ms API latency · Zero vendor lock-in",
      demoType: "cloud-simulator"
    },
    {
      id: "digital-marketing-seo",
      category: "growth",
      title: "Digital Marketing, SEO & Performance Growth",
      subtitle: "Technical SEO, Google & Meta performance ad funnels & brand authority",
      badge: "REVENUE GROWTH",
      badgeColor: "#f59e0b",
      icon: <TrendingUp size={28} color="#f59e0b" />,
      heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
      tagline: "Precision digital infrastructure designed to build market dominance and drive qualified revenue.",
      description: "We combine technical engineering with commercial marketing rigor. Our team optimizes your core web vitals for top search rankings, crafts high-converting landing pages, and runs ROI-focused performance campaigns across Google Search, Meta, and LinkedIn.",
      capabilities: [
        "Technical SEO auditing, structured schema markup, and high-intent keyword dominance",
        "High-conversion Landing Page optimization (CRO) with A/B split testing",
        "Targeted Google Search, Display, and Performance Max ad management",
        "Meta & LinkedIn precision B2B and B2C acquisition funnels",
        "Executive analytics dashboards with full multi-touch attribution modeling"
      ],
      result: "#1 Google rankings in competitive UAE niches · 4.8x average ad ROAS",
      demoType: "seo-simulator"
    },
    {
      id: "headless-ecommerce",
      category: "commerce",
      title: "Headless E-Commerce & Omnichannel Platforms",
      subtitle: "Next-gen Shopify Plus, sub-second checkout & ERP inventory sync",
      badge: "MODERN COMMERCE",
      badgeColor: "#ec4899",
      icon: <ShoppingCart size={28} color="#ec4899" />,
      heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      tagline: "Ultra-fast digital commerce storefronts engineered for high transaction volume and zero cart abandonment.",
      description: "Upgrade legacy, slow e-commerce stores to decoupled headless architectures. We build lightning-fast web storefronts powered by Shopify Plus, Medusa, and custom microservices with automated ERP inventory synchronization across GCC and international fulfillment hubs.",
      capabilities: [
        "Headless e-commerce web storefronts with sub-second page transitions",
        "Multi-currency, localized GCC payment gateways (Apple Pay, Tabby, Tamara, Stripe)",
        "Real-time ERP warehouse inventory sync and automated order dispatching",
        "Custom checkout optimization algorithms designed to cut cart drop-off by 40%",
        "Personalized product recommendation engines powered by lightweight AI"
      ],
      result: "280ms checkout latency · +48% mobile checkout conversion lift",
      demoType: "ecommerce-simulator"
    }
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(s => s.category === activeFilter);

  return (
    <div className="services-page" style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0 5.5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* ── Page Hero ── */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
            <span style={{ width: '22px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.825rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#00bba7' }}>
              WHAT WE DO & LIVE DEMOS
            </span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
              marginTop: 0, 
              marginBottom: '1rem',
              fontFamily: "'Space Grotesk', -apple-system, sans-serif"
            }}
          >
            Engineering & Automation Built for <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Real Business Acceleration.
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 1.25vw, 1.15rem)', color: '#3F5565', lineHeight: 1.65, margin: '0 auto 2.25rem', maxWidth: '680px' }}>
            Explore our core capabilities below. Each service features an <strong>interactive live simulation</strong> so you can experience how MaxR technology works in real-time.
          </p>

          {/* Service Category Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'All Services (6)' },
              { id: 'ai', label: 'AI & Voice Agents' },
              { id: 'apps', label: 'App Development' },
              { id: 'crm', label: 'CRM & Leads' },
              { id: 'cloud', label: 'Cloud Architecture' },
              { id: 'growth', label: 'Digital Marketing & SEO' },
              { id: 'commerce', label: 'Headless E-Commerce' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  background: activeFilter === tab.id ? '#080607' : '#FFFFFF',
                  color: activeFilter === tab.id ? '#54CFB0' : '#475569',
                  border: `1.5px solid ${activeFilter === tab.id ? '#080607' : '#E2E8F0'}`,
                  borderRadius: '999px',
                  padding: '7px 16px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeFilter === tab.id ? '0 4px 12px rgba(8,6,7,0.15)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Services Cards with Interactive Live Demos ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredServices.map((service, index) => (
            <div 
              key={service.id}
              id={service.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid #E1E8E5',
                overflow: 'hidden',
                boxShadow: '0 12px 40px rgba(8, 6, 7, 0.05)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                alignItems: 'stretch',
                transition: 'border-color 0.25s ease'
              }}
            >
              {/* ── Left Column: Service Details & Capabilities ── */}
              <div style={{ padding: 'clamp(2rem, 3.5vw, 3rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {/* Category Badge & Live Pulse */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <span 
                      style={{ 
                        fontSize: '0.75rem', 
                        fontWeight: 800, 
                        textTransform: 'uppercase', 
                        color: service.badgeColor, 
                        background: `${service.badgeColor}15`,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        letterSpacing: '0.08em' 
                      }}
                    >
                      {service.badge}
                    </span>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#059669' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 8px #10b981' }} />
                      <span>LIVE DEMO READY</span>
                    </div>
                  </div>

                  {/* Service Title */}
                  <h2 
                    style={{ 
                      fontSize: 'clamp(1.6rem, 2.4vw, 2.1rem)', 
                      fontWeight: 800, 
                      color: '#080607', 
                      margin: '0 0 0.5rem 0',
                      letterSpacing: '-0.025em',
                      fontFamily: "'Space Grotesk', sans-serif",
                      lineHeight: 1.2
                    }}
                  >
                    {service.title}
                  </h2>

                  <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f766e', marginBottom: '1rem', lineHeight: 1.4 }}>
                    {service.subtitle}
                  </p>

                  <p style={{ color: '#3F5565', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div style={{ background: '#FAFBFB', borderRadius: '12px', padding: '1.25rem 1.4rem', border: '1px solid #E2E8F0', marginBottom: '1.75rem' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#080607', display: 'block', marginBottom: '0.75rem' }}>
                      Key Capabilities Delivered:
                    </span>
                    <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {service.capabilities.map((cap, cidx) => (
                        <li key={cidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: '#334155', lineHeight: 1.45 }}>
                          <CheckCircle2 size={15} color="#00bba7" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Result Pill & Action Button */}
                <div>
                  <div 
                    style={{ 
                      padding: '0.75rem 1rem', 
                      background: '#ECFDF5', 
                      border: '1px solid #A7F3D0', 
                      borderRadius: '8px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      marginBottom: '1.5rem' 
                    }}
                  >
                    <Award size={16} color="#059669" />
                    <span style={{ fontSize: '0.85rem', color: '#065f46', fontWeight: 700 }}>
                      {service.result}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <button 
                      onClick={onOpenContact} 
                      style={{ 
                        background: '#00bba7', 
                        color: '#080607', 
                        fontWeight: 800,
                        fontSize: '0.925rem',
                        padding: '0.85rem 1.75rem',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 14px rgba(0, 187, 167, 0.3)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 187, 167, 0.45)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 187, 167, 0.3)';
                      }}
                    >
                      <span>Consult on {service.badge}</span>
                      <ArrowRight size={16} />
                    </button>

                    <Link
                      to="/contact"
                      style={{
                        color: '#080607',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>Get Scope & Pricing</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* ── Right Column: Interactive Live Demo & Image Showcase ── */}
              <div 
                style={{ 
                  background: '#080607', 
                  borderLeft: '1px solid #E1E8E5',
                  padding: 'clamp(1.75rem, 3vw, 2.5rem)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  position: 'relative'
                }}
              >
                {/* ── LIVE DEMO 1: AI Voice & Chat Simulator ── */}
                {service.demoType === 'chat-simulator' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#00bba7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#080607' }}>
                          <Bot size={18} />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#FFFFFF', display: 'block' }}>MaxR Autonomous Voice Bot</span>
                          <span style={{ fontSize: '0.725rem', color: '#54CFB0' }}>● Sub-450ms Natural Voice Engine</span>
                        </div>
                      </div>
                      {voiceActive && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                          <span style={{ width: '3px', height: '14px', background: '#54CFB0', borderRadius: '2px', animation: 'pulse 0.5s infinite' }} />
                          <span style={{ width: '3px', height: '22px', background: '#54CFB0', borderRadius: '2px', animation: 'pulse 0.7s infinite' }} />
                          <span style={{ width: '3px', height: '10px', background: '#54CFB0', borderRadius: '2px', animation: 'pulse 0.4s infinite' }} />
                        </div>
                      )}
                    </div>

                    {/* Chat Bubble Window */}
                    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1rem', minHeight: '230px', maxHeight: '270px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {chatMessages.map((msg, mIdx) => (
                        <div key={mIdx} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '88%' }}>
                          <div 
                            style={{ 
                              padding: '8px 12px', 
                              borderRadius: msg.sender === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                              background: msg.sender === 'user' ? '#00bba7' : 'rgba(255,255,255,0.12)',
                              color: msg.sender === 'user' ? '#080607' : '#FFFFFF',
                              fontSize: '0.85rem',
                              lineHeight: 1.45,
                              fontWeight: msg.sender === 'user' ? 650 : 400
                            }}
                          >
                            {msg.text}
                          </div>
                          {msg.action && (
                            <div style={{ fontSize: '0.675rem', color: '#54CFB0', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Check size={12} />
                              <span>{msg.action}</span>
                            </div>
                          )}
                        </div>
                      ))}
                      {isAiTyping && (
                        <div style={{ alignSelf: 'flex-start', padding: '6px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: '#54CFB0', fontSize: '0.75rem' }}>
                          MaxR AI is typing & validating calendar...
                        </div>
                      )}
                    </div>

                    {/* Interactive Prompt Taps */}
                    <div>
                      <span style={{ fontSize: '0.725rem', color: 'rgba(255,255,255,0.5)', display: 'block', marginBottom: '6px' }}>
                        Click a prompt to test live automated bot response:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        <button
                          onClick={() => simulateAiChat(
                            "What are your WhatsApp AI bot setup timelines?",
                            "Our WhatsApp & Voice AI engines go live in 5-7 business days, with fully trained bilingual models and live CRM synchronization.",
                            "Timeline Verified: 5-7 Days • SLA Guaranteed"
                          )}
                          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(84,207,176,0.3)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer' }}
                        >
                          ⚡ "Setup Timelines?"
                        </button>

                        <button
                          onClick={() => simulateAiChat(
                            "Book an executive discovery session for Thursday 2 PM",
                            "Perfect! I have reserved Thursday at 2:00 PM GST for you with our senior solutions engineer. An invite has been dispatched to your calendar.",
                            "Slot Locked: Thursday 2:00 PM • Calendar Dispatched"
                          )}
                          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(84,207,176,0.3)', color: '#FFFFFF', padding: '4px 10px', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer' }}
                        >
                          📅 "Book Thursday 2 PM"
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── LIVE DEMO 2: Web & Mobile App Viewport Simulator ── */}
                {service.demoType === 'device-simulator' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '0.85rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#FFFFFF' }}>Interactive Multi-Device Preview</span>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {['mobile', 'web', 'pwa'].map(mode => (
                          <button
                            key={mode}
                            onClick={() => setDeviceMode(mode)}
                            style={{
                              background: deviceMode === mode ? '#00bba7' : 'rgba(255,255,255,0.08)',
                              color: deviceMode === mode ? '#080607' : '#FFFFFF',
                              border: 'none',
                              borderRadius: '6px',
                              padding: '4px 8px',
                              fontSize: '0.725rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              textTransform: 'uppercase'
                            }}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic Viewport Container */}
                    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                      <img 
                        src={service.heroImage} 
                        alt="App Architecture Demo" 
                        style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} 
                      />

                      {/* Scorecards */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '8px 4px' }}>
                          <span style={{ fontSize: '0.675rem', color: '#94a3b8', display: 'block' }}>Lighthouse</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#54CFB0' }}>99/100</span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '8px 4px' }}>
                          <span style={{ fontSize: '0.675rem', color: '#94a3b8', display: 'block' }}>Frame Rate</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#54CFB0' }}>60 FPS</span>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '8px 4px' }}>
                          <span style={{ fontSize: '0.675rem', color: '#94a3b8', display: 'block' }}>FCP Speed</span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 900, color: '#54CFB0' }}>0.4s</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={14} color="#00bba7" />
                      <span>Currently previewing: {deviceMode === 'mobile' ? 'iOS & Android Native Bundle' : deviceMode === 'web' ? 'Next.js 14 SSR Portal' : 'Progressive Web App'}</span>
                    </div>
                  </div>
                )}

                {/* ── LIVE DEMO 3: CRM Lead Routing Velocity Simulator ── */}
                {service.demoType === 'crm-simulator' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '0.85rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#FFFFFF' }}>Live Lead Velocity Pipeline</span>
                      <button
                        onClick={runLeadSimulation}
                        disabled={isSimulatingLead}
                        style={{
                          background: isSimulatingLead ? '#334155' : '#00bba7',
                          color: '#080607',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '5px 10px',
                          fontSize: '0.725rem',
                          fontWeight: 800,
                          cursor: isSimulatingLead ? 'not-allowed' : 'pointer'
                        }}
                      >
                        {isSimulatingLead ? 'Simulating...' : '⚡ Test Inbound Lead'}
                      </button>
                    </div>

                    {/* 4 Pipeline Stages */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { title: '1. Inbound Capture (WhatsApp / Web)', detail: 'Lead: Sarah M. (Commercial Villa inquiry)', time: '0.0s' },
                        { title: '2. AI Scoring & Intent Qualification', detail: 'Budget: AED 8.5M+ • High Intent (Score: 98/100)', time: '+0.2s' },
                        { title: '3. CRM Routing & Auto Assignment', detail: 'Dispatched to Senior Advisor: Ahmed R.', time: '+0.4s' },
                        { title: '4. Instant Confirmation & Calendar Link', detail: 'Automated WhatsApp welcome + Calendar slot sent', time: '+0.8s' }
                      ].map((stage, sIdx) => {
                        const isDone = pipelineStep >= sIdx;
                        return (
                          <div 
                            key={sIdx}
                            style={{
                              padding: '8px 12px',
                              borderRadius: '8px',
                              background: isDone ? 'rgba(84, 207, 176, 0.12)' : 'rgba(255,255,255,0.04)',
                              border: `1px solid ${isDone ? '#54CFB0' : 'rgba(255,255,255,0.08)'}`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <CheckCircle2 size={14} color={isDone ? '#54CFB0' : '#475569'} />
                              <div>
                                <span style={{ fontSize: '0.775rem', fontWeight: 700, color: isDone ? '#FFFFFF' : '#94a3b8', display: 'block' }}>
                                  {stage.title}
                                </span>
                                <span style={{ fontSize: '0.7rem', color: isDone ? 'rgba(255,255,255,0.7)' : '#64748b' }}>
                                  {stage.detail}
                                </span>
                              </div>
                            </div>
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#54CFB0' }}>{stage.time}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ── LIVE DEMO 4: Cloud Telemetry Console ── */}
                {service.demoType === 'cloud-simulator' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Terminal size={16} color="#00bba7" />
                        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FFFFFF' }}>Telemetry Console (AWS / UAE)</span>
                      </div>
                      <button
                        onClick={triggerCloudTest}
                        disabled={testingCloud}
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          border: '1px solid rgba(84,207,176,0.3)',
                          color: '#54CFB0',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '0.725rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {testingCloud ? 'Pinging...' : '⚡ Ping Nodes'}
                      </button>
                    </div>

                    <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '10px', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'monospace' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
                        <span>Cluster: dxb-primary-mesh</span>
                        <span style={{ color: '#54CFB0' }}>● Healthy</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
                        <span>API Gateway Latency:</span>
                        <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>{cloudPing} ms</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
                        <span>PostgreSQL Read Replica:</span>
                        <span style={{ color: '#FFFFFF', fontWeight: 'bold' }}>2.1 ms query time</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8' }}>
                        <span>Uptime Guarantee:</span>
                        <span style={{ color: '#54CFB0', fontWeight: 'bold' }}>99.995% SLA</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block' }}>Zero Lock-In</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#FFFFFF' }}>Open Architecture</span>
                      </div>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
                        <span style={{ fontSize: '0.65rem', color: '#94a3b8', display: 'block' }}>Autoscaling</span>
                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#54CFB0' }}>100k+ Concurrent</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── LIVE DEMO 5: Digital Marketing & SEO SERP Simulator ── */}
                {service.demoType === 'seo-simulator' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '0.85rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#FFFFFF' }}>Google UAE Search Preview</span>
                      <span style={{ fontSize: '0.725rem', color: '#54CFB0', fontWeight: 700 }}>Rank #1 Organic</span>
                    </div>

                    {/* Mock Google Result Card */}
                    <div style={{ background: '#FFFFFF', borderRadius: '10px', padding: '1rem', color: '#080607', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                        <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#00bba7' }} />
                        <span style={{ fontSize: '0.725rem', color: '#475569' }}>maxr.ae › technology › dubai</span>
                      </div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 750, color: '#1a0dab', margin: '0 0 4px 0', lineHeight: 1.25 }}>
                        Enterprise AI Automation & Software Engineering in Dubai | MaxR
                      </h4>
                      <p style={{ fontSize: '0.775rem', color: '#4b5563', margin: 0, lineHeight: 1.4 }}>
                        Accelerate business growth with autonomous AI voice bots, custom web development, and cloud CRM pipelines. Serving UAE & GCC enterprises.
                      </p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px', fontSize: '0.7rem', color: '#059669', fontWeight: 700 }}>
                        <span>★★★★★ Rating: 5.0 · 40+ Enterprise Reviews</span>
                      </div>
                    </div>

                    {/* Stats Metric Bar */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '8px 10px' }}>
                        <span style={{ fontSize: '0.675rem', color: '#94a3b8', display: 'block' }}>Search Volume</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#54CFB0' }}>+240% Inbound Lift</span>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '8px 10px' }}>
                        <span style={{ fontSize: '0.675rem', color: '#94a3b8', display: 'block' }}>Average ROAS</span>
                        <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#FFFFFF' }}>4.8x Meta & Google</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── LIVE DEMO 6: E-Commerce Sub-Second Speed Simulator ── */}
                {service.demoType === 'ecommerce-simulator' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '0.85rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 800, color: '#FFFFFF' }}>Instant Checkout Simulator</span>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        {['AED', 'USD', 'SAR'].map(cur => (
                          <button
                            key={cur}
                            onClick={() => setCurrency(cur)}
                            style={{
                              background: currency === cur ? '#00bba7' : 'rgba(255,255,255,0.08)',
                              color: currency === cur ? '#080607' : '#FFFFFF',
                              border: 'none',
                              borderRadius: '4px',
                              padding: '2px 6px',
                              fontSize: '0.7rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            {cur}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Product Checkout Tile */}
                    <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '0.825rem', color: '#FFFFFF', fontWeight: 700 }}>Enterprise Commerce SKU-99</span>
                        <span style={{ fontSize: '0.85rem', color: '#54CFB0', fontWeight: 800 }}>{currency} 1,450.00</span>
                      </div>

                      <button
                        onClick={triggerCheckoutDemo}
                        disabled={isCheckingOut}
                        style={{
                          width: '100%',
                          background: isCheckingOut ? '#475569' : '#00bba7',
                          color: '#080607',
                          border: 'none',
                          borderRadius: '6px',
                          padding: '8px',
                          fontSize: '0.825rem',
                          fontWeight: 800,
                          cursor: isCheckingOut ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <Zap size={14} />
                        <span>{isCheckingOut ? 'Executing Sub-Second Auth...' : 'Test 1-Click Checkout Speed'}</span>
                      </button>

                      {checkoutTime && (
                        <div style={{ marginTop: '10px', padding: '6px 10px', background: 'rgba(84,207,176,0.15)', border: '1px solid #54CFB0', borderRadius: '6px', textAlign: 'center' }}>
                          <span style={{ fontSize: '0.75rem', color: '#54CFB0', fontWeight: 800 }}>
                            ✓ Transaction Settled & Inventory Synced in {checkoutTime}ms ⚡
                          </span>
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.725rem', color: '#94a3b8' }}>
                      <span>Apple Pay & Tabby Ready</span>
                      <span style={{ color: '#54CFB0' }}>Sub-300ms Global P95</span>
                    </div>
                  </div>
                )}

              </div>

            </div>
          ))}
        </div>

        {/* ── Bottom Executive CTA Banner (Horizontal MNC Style) ── */}
        <div 
          style={{ 
            marginTop: '5rem', 
            background: 'linear-gradient(135deg, #080607 0%, #111827 100%)', 
            borderRadius: '20px', 
            padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.75rem, 4vw, 3.5rem)', 
            border: '1.5px solid rgba(84, 207, 176, 0.35)', 
            boxShadow: '0 20px 50px rgba(8, 6, 7, 0.25)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          <div style={{ flex: '1 1 480px', maxWidth: '650px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <span style={{ width: '18px', height: '2px', background: '#54CFB0' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#54CFB0' }}>
                READY TO SCALE?
              </span>
            </div>

            <h2 
              style={{ 
                fontSize: 'clamp(1.9rem, 3.2vw, 2.7rem)', 
                fontWeight: 900, 
                marginBottom: '0.75rem',
                color: '#FFFFFF',
                letterSpacing: '-0.035em',
                lineHeight: 1.15,
                fontFamily: "'Space Grotesk', -apple-system, sans-serif"
              }}
            >
              Let’s Engineer Your Next <br />
              <span style={{ 
                background: 'linear-gradient(135deg, #54CFB0 0%, #00bba7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Commercial Competitive Advantage.
              </span>
            </h2>

            <p style={{ color: 'rgba(255,255,255,0.78)', margin: 0, fontSize: '0.98rem', lineHeight: 1.6 }}>
              Book an exploratory technical session with MaxR. We analyze your operational workflows, pinpoint automation opportunities, and provide a detailed deployment roadmap within 24 hours.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                onClick={onOpenContact} 
                style={{ 
                  background: '#54CFB0', 
                  color: '#080607', 
                  fontWeight: 800, 
                  padding: '0.95rem 2rem', 
                  fontSize: '0.95rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 18px rgba(84, 207, 176, 0.4)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.boxShadow = '0 8px 26px rgba(84, 207, 176, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#54CFB0';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(84, 207, 176, 0.4)';
                }}
              >
                <span>Schedule a Consultation</span>
                <ArrowRight size={16} />
              </button>

              <Link
                to="/voice-agents"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  fontWeight: 700,
                  padding: '0.95rem 1.75rem',
                  fontSize: '0.95rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#54CFB0';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
              >
                <span>Listen to Voice AI Demos</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#54CFB0', display: 'inline-block' }} />
              <span>Dedicated NDA • UAE & GCC Onboarding Support • 24hr Turnaround</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
