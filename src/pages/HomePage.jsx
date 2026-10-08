import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Bot, 
  Code2, 
  TrendingUp, 
  PhoneCall, 
  Building2, 
  ShoppingBag, 
  Truck, 
  Landmark, 
  Hotel, 
  HeartPulse,
  CheckCircle2, 
  Calendar,
  Globe2,
  Smartphone,
  Cpu,
  Share2,
  Target,
  Palette,
  Cloud,
  BarChart3,
  Sparkles,
  Zap,
  ChevronRight
} from 'lucide-react';

// Official WhatsApp Vector Icon
const WhatsAppIcon = ({ size = 18, color = "#ffffff" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

// Scroll-revealed Box Container Component
function ScrollBox({ children, style = {}, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={boxRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1), transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSector, setActiveSector] = useState('realestate');

  const whatsappUrl = "https://wa.me/971501234567?text=Hello%20MaxR%20Technology%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services";

  // 1. All 10 Capabilities & their exact working items
  const capabilities = [
    {
      num: "01",
      id: "web-dev",
      category: "development",
      title: "Web Development",
      icon: <Globe2 size={24} color="#00bba7" />,
      items: [
        "Business Websites",
        "Corporate Websites",
        "E-commerce Websites",
        "Landing Pages",
        "Custom Web Applications",
        "Website Maintenance"
      ]
    },
    {
      num: "02",
      id: "app-dev",
      category: "development",
      title: "App Development",
      icon: <Smartphone size={24} color="#00bba7" />,
      items: [
        "Android Apps",
        "iOS Apps",
        "Cross-Platform Apps",
        "Custom Mobile Applications",
        "App UI/UX Design",
        "App Maintenance"
      ]
    },
    {
      num: "03",
      id: "software-product",
      category: "development",
      title: "Software & Product Development",
      icon: <Cpu size={24} color="#00bba7" />,
      items: [
        "Custom Software",
        "SaaS Development",
        "Business Applications",
        "CRM Development",
        "ERP Solutions",
        "API Development & Integration"
      ]
    },
    {
      num: "04",
      id: "digital-marketing",
      category: "marketing",
      title: "Digital Marketing",
      icon: <TrendingUp size={24} color="#00bba7" />,
      items: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "Google Ads",
        "Social Media Advertising",
        "Content Marketing",
        "Performance Marketing"
      ]
    },
    {
      num: "05",
      id: "social-media",
      category: "marketing",
      title: "Social Media Management",
      icon: <Share2 size={24} color="#00bba7" />,
      items: [
        "Instagram Management",
        "Facebook Management",
        "LinkedIn Management",
        "Content Creation",
        "Social Media Posting",
        "Community Management"
      ]
    },
    {
      num: "06",
      id: "ai-automation",
      category: "ai",
      title: "AI & Automation",
      icon: <Bot size={24} color="#00bba7" />,
      items: [
        "Business Process Automation",
        "AI Chatbots",
        "AI Agents",
        "Lead Automation",
        "Customer Support Automation",
        "Workflow Automation"
      ]
    },
    {
      num: "07",
      id: "crm-leads",
      category: "ai",
      title: "CRM & Lead Solutions",
      icon: <Target size={24} color="#00bba7" />,
      items: [
        "CRM Setup",
        "Lead Generation",
        "Lead Management",
        "Lead Qualification",
        "Sales Pipeline Automation",
        "Customer Follow-up"
      ]
    },
    {
      num: "08",
      id: "ui-ux-branding",
      category: "design",
      title: "UI/UX & Branding",
      icon: <Palette size={24} color="#00bba7" />,
      items: [
        "UI/UX Design",
        "Website Design",
        "App Design",
        "Brand Identity",
        "Logo Design",
        "Creative Design"
      ]
    },
    {
      num: "09",
      id: "cloud-tech",
      category: "cloud",
      title: "Cloud & Technology",
      icon: <Cloud size={24} color="#00bba7" />,
      items: [
        "Cloud Solutions",
        "API Integration",
        "Third-Party Integrations",
        "Database Solutions",
        "Hosting & Deployment",
        "Technical Support"
      ]
    },
    {
      num: "10",
      id: "data-bi",
      category: "cloud",
      title: "Data & Business Intelligence",
      icon: <BarChart3 size={24} color="#00bba7" />,
      items: [
        "Data Analytics",
        "Business Dashboards",
        "Sales Analytics",
        "Marketing Analytics",
        "Reporting",
        "Business Insights"
      ]
    }
  ];

  const categoryFilters = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'development', label: 'Development & Apps' },
    { id: 'marketing', label: 'Marketing & Social' },
    { id: 'ai', label: 'AI, Automation & CRM' },
    { id: 'design', label: 'UI/UX & Branding' },
    { id: 'cloud', label: 'Cloud & Data BI' }
  ];

  const filteredCapabilities = selectedCategory === 'all' 
    ? capabilities 
    : capabilities.filter(c => c.category === selectedCategory);

  // 2. Sectors with Full Background Image & Right-side Products/Solutions We Build
  const sectors = [
    {
      id: "realestate",
      name: "Real Estate & Property",
      icon: <Building2 size={20} />,
      bgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80",
      tagline: "High-Value Property Inbound & Broker Automation",
      products: [
        {
          title: "AI Voice Broker & Viewing Booking Bot",
          desc: "24/7 autonomous voice receptionist pre-qualifying buyer budgets and scheduling VIP property viewings directly on broker calendars."
        },
        {
          title: "Interactive 3D Luxury Property Web Portal",
          desc: "Ultra-fast headless real estate platform featuring virtual floorplan walkthroughs, dynamic MLS synchronization, and mortgage calculators."
        },
        {
          title: "Automated WhatsApp Lead Qualification Engine",
          desc: "Instant lead ingestion from property portals, automated bilingual brochure distribution, and two-way CRM status synchronization."
        }
      ]
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      icon: <ShoppingBag size={20} />,
      bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=80",
      tagline: "Autonomous Support Deflection & Conversion Acceleration",
      products: [
        {
          title: "Autonomous WhatsApp Order & Return AI",
          desc: "Resolves 'Where is my order?' inquiries in seconds, automates instant exchange approvals, and syncs order status with ERP systems."
        },
        {
          title: "Headless E-Commerce Storefront (React/Next.js)",
          desc: "Sub-second page speeds, seamless multi-currency checkout, and integrated cart recovery triggers that boost store conversions."
        },
        {
          title: "Dynamic Customer Retargeting & Loyalty Engine",
          desc: "Automated personalized discount triggers based on purchase history and browse intent, synchronized across SMS and WhatsApp."
        }
      ]
    },
    {
      id: "logistics",
      name: "Logistics & Supply Chain",
      icon: <Truck size={20} />,
      bgImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80",
      tagline: "Autonomous Consignment Tracking & Fleet Orchestration",
      products: [
        {
          title: "Real-Time Consignment & Fleet Tracking Platform",
          desc: "Unified customer tracking portal with live milestone telemetry, ETA forecasting, and automated consignee delivery confirmation."
        },
        {
          title: "Autonomous Dispatch Voice Assistant",
          desc: "Hands-free voice agent alerting drivers of load reassignments, handling delay exceptions, and reducing manual dispatcher calls by 70%."
        },
        {
          title: "Warehouse & TMS Cloud Integration API",
          desc: "Automated bi-directional data pipelines connecting warehouse scanning, 3PL inventory counts, and enterprise freight manifests."
        }
      ]
    },
    {
      id: "finance",
      name: "Finance & Banking",
      icon: <Landmark size={20} />,
      bgImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1800&q=80",
      tagline: "Bank-Grade Onboarding & Intelligent Client Portals",
      products: [
        {
          title: "Encrypted Digital Onboarding & KYC Portal",
          desc: "Automated document collection, identity verification workflows, and secure client screening with bank-grade 256-bit encryption."
        },
        {
          title: "Wealth Management & Investor Dashboard",
          desc: "Custom client web & mobile applications displaying real-time portfolio performance, automated statements, and secure advisor chat."
        },
        {
          title: "Algorithmic Alert & Notification Engine",
          desc: "Autonomous transaction anomaly detection, compliance audit logging, and proactive push notifications for financial events."
        }
      ]
    },
    {
      id: "hospitality",
      name: "Hospitality & Travel",
      icon: <Hotel size={20} />,
      bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80",
      tagline: "24/7 Guest Concierge & Zero-Hold Reservation Desks",
      products: [
        {
          title: "24/7 Multilingual Reservation Voice Agent",
          desc: "Handles surges in table and suite bookings without busy signals, confirms guest dietary requests, and sends WhatsApp confirmation cards."
        },
        {
          title: "Guest Digital Concierge Web & Mobile App",
          desc: "Contactless digital room key, in-stay amenity ordering, customized itinerary generation, and automated checkout billing."
        },
        {
          title: "VIP Loyalty & Event Capacity Manager",
          desc: "Dynamic table seating algorithms, private party booking pipelines, and automated high-roller tier reward management."
        }
      ]
    },
    {
      id: "healthcare",
      name: "Healthcare & Clinics",
      icon: <HeartPulse size={20} />,
      bgImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1800&q=80",
      tagline: "Zero-Hold Patient Scheduling & Clinical Triage",
      products: [
        {
          title: "Zero-Hold Patient Appointment Voice Bot",
          desc: "Answers routine clinic inquiries 24/7, checks practitioner availability, and books calendar appointments with zero telephone hold time."
        },
        {
          title: "Automated Two-Way WhatsApp Reminder Engine",
          desc: "Dispatches pre-visit preparation instructions and automated confirmation pings that reduce costly clinic no-show rates by 68%."
        },
        {
          title: "Practice Management & Tele-Consult Portal",
          desc: "HIPAA-compliant web portal for clinical records, automated prescription refill requests, and secure video doctor consultations."
        }
      ]
    }
  ];

  const currentSectorData = sectors.find(s => s.id === activeSector) || sectors[0];

  // 3. How It Works (3 Steps)
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "We audit your existing operational workflows to identify high-impact automation levers."
    },
    {
      num: "02",
      title: "Build",
      desc: "Our engineering squad develops, tests, and integrates custom AI models and cloud systems."
    },
    {
      num: "03",
      title: "Grow",
      desc: "We deploy with continuous SLA monitoring to scale output while lowering operational overhead."
    }
  ];

  return (
    <div className="home-page" style={{ minHeight: '100%', background: '#ffffff', color: '#0f172a' }}>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION (Unsplash Tech-Abstract BG + Dark Semi-Transparent Overlay)
          ═════════════════════════════════════════════════════════════════════ */}
      <section 
        className="hero-section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '82vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          padding: '5.5rem 0'
        }}
      >
        {/* Dark semi-transparent layer overlay on top of image */}
        <div 
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(7, 13, 26, 0.88) 0%, rgba(10, 20, 40, 0.94) 100%)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            
            {/* Minimal Eyebrow Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '999px', background: 'rgba(0, 187, 167, 0.1)', border: '1px solid rgba(0, 187, 167, 0.25)', marginBottom: '1.75rem' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00bba7' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Enterprise AI & Software Engineering
              </span>
            </div>

            {/* Bold, Confident, Minimal 2-3 Word Headline (Linear/Vercel style) */}
            <h1 
              style={{
                fontSize: 'clamp(2.75rem, 6.5vw, 4.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
                color: '#ffffff',
                marginBottom: '1.25rem'
              }}
            >
              Build. Automate. <span style={{ color: '#00bba7' }}>Scale.</span>
            </h1>

            {/* Short Subtext (1-2 sentences) */}
            <p 
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.6,
                maxWidth: '620px',
                margin: '0 auto 2.5rem'
              }}
            >
              Autonomous AI systems, full-stack software, and automated workflows engineered for high-performance enterprises.
            </p>

            {/* CTA Buttons */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
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
                  boxShadow: '0 4px 14px rgba(0, 187, 167, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0d9488';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#00bba7';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>Explore Services</span>
                <ArrowRight size={16} />
              </Link>

              {/* WhatsApp Button (Prominent Green) */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Chat with MaxR on WhatsApp"
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
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <WhatsAppIcon size={18} color="#ffffff" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Book a Call Option */}
              <button
                onClick={onOpenContact}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '0.85rem 1.65rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.background = 'rgba(0, 187, 167, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <Calendar size={16} />
                <span>Book a Call</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. CAPABILITIES SECTION (Exact 10 Capabilities & Sub-Services with Animations)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
            }}
          >
            {/* Section Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
                  Comprehensive Capabilities
                </span>
                <span style={{ background: 'rgba(0, 187, 167, 0.1)', color: '#00bba7', fontSize: '0.75rem', fontWeight: 800, padding: '2px 8px', borderRadius: '4px' }}>
                  10 Domains
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0a1428', margin: 0 }}>
                Engineered for Modern Enterprise Scale
              </h2>
              <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6, margin: 0, maxWidth: '720px' }}>
                Explore our full spectrum of web, mobile, custom software, digital marketing, AI automation, and cloud intelligence disciplines.
              </p>
            </div>

            {/* Interactive Category Filter Pills */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
                borderBottom: '1px solid #f1f5f9',
                paddingBottom: '1.25rem'
              }}
            >
              {categoryFilters.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      background: isActive ? '#0a1428' : '#f8fafc',
                      color: isActive ? '#ffffff' : '#475569',
                      border: isActive ? '1px solid #0a1428' : '1px solid #e2e8f0',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
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
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* 10 Capabilities Grid with Animated Working Items */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {filteredCapabilities.map((cap) => (
                <div
                  key={cap.id}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00bba7';
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 187, 167, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                  }}
                >
                  {/* Top Bar: Icon + Number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <div 
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: '12px',
                        background: 'rgba(0, 187, 167, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {cap.icon}
                    </div>
                    <span 
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 900,
                        color: '#94a3b8',
                        fontFamily: 'monospace'
                      }}
                    >
                      {cap.num}
                    </span>
                  </div>

                  {/* Capability Title */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0a1428', marginBottom: '1.15rem' }}>
                    {cap.title}
                  </h3>

                  {/* Sub-Services Working Items Tags (Interactive chips) */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem', flex: 1 }}>
                    {cap.items.map((subItem, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.78rem',
                          fontWeight: 600,
                          color: '#334155',
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          transition: 'all 0.15s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#00bba7';
                          e.currentTarget.style.color = '#00bba7';
                          e.currentTarget.style.background = 'rgba(0, 187, 167, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.color = '#334155';
                          e.currentTarget.style.background = '#ffffff';
                        }}
                      >
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#00bba7' }} />
                        <span>{subItem}</span>
                      </span>
                    ))}
                  </div>

                  {/* Direct Link */}
                  <div style={{ borderTop: '1px solid #eef2f6', paddingTop: '1rem', marginTop: 'auto' }}>
                    <Link
                      to="/services"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#00bba7',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Explore {cap.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ScrollBox>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          3. HOW IT WORKS (Horizontal 3-Step Flow)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 3.5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.02)'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 4rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
                Process
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', color: '#0a1428', marginTop: '0.4rem' }}>
                How It Works
              </h2>
            </div>

            {/* Horizontal Layout with Continuous Connecting Line */}
            <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
              <div 
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '12%',
                  right: '12%',
                  height: '2px',
                  background: '#e2e8f0',
                  zIndex: 0
                }}
              />

              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '2.5rem',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {steps.map((st, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      textAlign: 'center', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center' 
                    }}
                  >
                    {/* Step Number Styled as an Outlined Circle */}
                    <div 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        border: '2px solid #00bba7',
                        background: '#ffffff',
                        color: '#00bba7',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        boxShadow: '0 4px 12px rgba(0, 187, 167, 0.15)'
                      }}
                    >
                      {st.num}
                    </div>

                    {/* Short Title */}
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.65rem' }}>
                      {st.title}
                    </h3>

                    {/* 1 Sentence Description */}
                    <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6, maxWidth: '280px', margin: 0 }}>
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollBox>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          4. SECTORS SECTION (User Requirement 2: Left Side Sectors, Whole Section BG = Real Sector Image, Right Side = What Products We Build)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 3.5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 16px 45px rgba(0, 0, 0, 0.18)',
              minHeight: '620px'
            }}
          >
            {/* Dynamic Whole Section Background Real Image with Crossfade */}
            <div 
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${currentSectorData.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.5s ease-in-out',
                zIndex: 0
              }}
            />

            {/* Dark Gradient Overlay for Maximum Readability */}
            <div 
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(105deg, rgba(7, 13, 26, 0.95) 0%, rgba(7, 13, 26, 0.88) 45%, rgba(7, 13, 26, 0.78) 100%)',
                zIndex: 1
              }}
            />

            {/* Split Content: Left Side Sector List | Right Side What Products We Build */}
            <div 
              style={{
                position: 'relative',
                zIndex: 2,
                padding: 'clamp(2.5rem, 5vw, 4rem)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}
            >
              {/* Left Side: Sector Selector List */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 12px', borderRadius: '999px', background: 'rgba(0,187,167,0.15)', border: '1px solid rgba(0,187,167,0.3)', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Sector Specializations
                  </span>
                </div>

                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
                  Tailored For Industry Leaders
                </h2>

                <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Select an industry to explore the specific software, automation bots, and platforms we build for that domain.
                </p>

                {/* Vertical Sector Buttons List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {sectors.map((sec) => {
                    const isActive = sec.id === activeSector;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => setActiveSector(sec.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.85rem 1.25rem',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          textAlign: 'left',
                          background: isActive ? 'rgba(0, 187, 167, 0.18)' : 'rgba(255, 255, 255, 0.05)',
                          border: isActive ? '1.5px solid #00bba7' : '1px solid rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(8px)',
                          color: '#ffffff'
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.borderColor = 'rgba(0, 187, 167, 0.6)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                          }
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span style={{ color: isActive ? '#00bba7' : '#94a3b8' }}>
                            {sec.icon}
                          </span>
                          <span style={{ fontSize: '0.95rem', fontWeight: 700, color: isActive ? '#ffffff' : 'rgba(255,255,255,0.85)' }}>
                            {sec.name}
                          </span>
                        </div>
                        <ChevronRight size={16} color={isActive ? '#00bba7' : '#64748b'} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: What Kind of Products We Build for Selected Sector */}
              <div 
                style={{
                  background: 'rgba(10, 20, 40, 0.78)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(0, 187, 167, 0.3)',
                  borderRadius: '20px',
                  padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
                    <span style={{ color: '#00bba7' }}>{currentSectorData.icon}</span>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#00bba7', fontWeight: 700 }}>
                      Products We Build for {currentSectorData.name}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                    {currentSectorData.tagline}
                  </h3>
                </div>

                {/* Product Offerings List for this Sector */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {currentSectorData.products.map((prod, pIdx) => (
                    <div 
                      key={pIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '12px',
                        padding: '1.15rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#00bba7';
                        e.currentTarget.style.background = 'rgba(0, 187, 167, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <CheckCircle2 size={16} color="#00bba7" flexShrink={0} />
                        <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                          {prod.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.5, margin: 0, paddingLeft: '24px' }}>
                        {prod.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Action */}
                <div style={{ paddingTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <Link
                    to="/industries"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#00bba7',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>View all sector case studies</span>
                    <ArrowRight size={15} />
                  </Link>

                  <button
                    onClick={onOpenContact}
                    style={{
                      background: '#00bba7',
                      color: '#040811',
                      border: 'none',
                      fontWeight: 700,
                      padding: '0.65rem 1.35rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#0d9488'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#00bba7'}
                  >
                    Build for {currentSectorData.name}
                  </button>
                </div>
              </div>

            </div>
          </ScrollBox>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          5. CTA STRIP (Box Framed Dark Section with WhatsApp & Call CTAs)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: 'linear-gradient(135deg, #070d1a 0%, #0a1428 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: 'clamp(3rem, 5vw, 4.5rem) 2rem',
              color: '#ffffff',
              textAlign: 'center',
              boxShadow: '0 16px 45px rgba(0, 0, 0, 0.25)'
            }}
          >
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <h2 
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.15,
                  color: '#ffffff',
                  marginBottom: '1rem'
                }}
              >
                Ready to Accelerate Your Operations?
              </h2>

              <p 
                style={{
                  fontSize: '1.1rem',
                  color: 'rgba(255, 255, 255, 0.75)',
                  lineHeight: 1.6,
                  maxWidth: '560px',
                  margin: '0 auto 2.5rem'
                }}
              >
                Deploy production-grade AI agents and custom software systems in days.
              </p>

              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}
              >
                {/* WhatsApp Button (Green) */}
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
                    fontSize: '0.95rem',
                    padding: '0.85rem 1.85rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1ebd59';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#25D366';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <WhatsAppIcon size={18} color="#ffffff" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Book a Call Button */}
                <button
                  onClick={onOpenContact}
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
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(0, 187, 167, 0.3)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#0d9488';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#00bba7';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <Calendar size={16} />
                  <span>Book a Call</span>
                </button>
              </div>
            </div>
          </ScrollBox>
        </div>
      </section>

    </div>
  );
}
