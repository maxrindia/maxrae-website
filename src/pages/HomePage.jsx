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
  ChevronRight,
  Sparkles
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

// Logo-Style Brand Emblem Component (Replaces generic plain line icons)
function LogoMark({ gradient, icon: IconComponent, size = 48 }) {
  return (
    <div 
      style={{
        width: size,
        height: size,
        borderRadius: '13px',
        background: gradient,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.14)',
        flexShrink: 0
      }}
    >
      <IconComponent size={Math.round(size * 0.48)} strokeWidth={2.2} />
    </div>
  );
}

export default function HomePage({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSector, setActiveSector] = useState('realestate');

  const whatsappUrl = "https://wa.me/971501234567?text=Hello%20MaxR%20Technology%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services";

  // 1. All 10 Capabilities & their exact working items with tailored Logo Emblems
  const capabilities = [
    {
      num: "01",
      id: "web-dev",
      category: "development",
      title: "Web Development",
      gradient: "linear-gradient(135deg, #0ea5e9 0%, #00bba7 100%)",
      icon: Globe2,
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
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      icon: Smartphone,
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
      gradient: "linear-gradient(135deg, #0f766e 0%, #06b6d4 100%)",
      icon: Cpu,
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
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      icon: TrendingUp,
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
      gradient: "linear-gradient(135deg, #ec4899 0%, #d946ef 100%)",
      icon: Share2,
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
      gradient: "linear-gradient(135deg, #10b981 0%, #00bba7 100%)",
      icon: Bot,
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
      gradient: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
      icon: Target,
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
      gradient: "linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)",
      icon: Palette,
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
      gradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
      icon: Cloud,
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
      gradient: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
      icon: BarChart3,
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
    { id: 'all', label: 'All 10 Capabilities' },
    { id: 'development', label: 'Development & Apps' },
    { id: 'marketing', label: 'Marketing & Social' },
    { id: 'ai', label: 'AI, Automation & CRM' },
    { id: 'design', label: 'UI/UX & Branding' },
    { id: 'cloud', label: 'Cloud & Data BI' }
  ];

  const filteredCapabilities = selectedCategory === 'all' 
    ? capabilities 
    : capabilities.filter(c => c.category === selectedCategory);

  // 2. Sectors with Light Frosted Theme, Animated Circular Nodes, and Right Products
  const sectors = [
    {
      id: "realestate",
      name: "Real Estate & Property",
      icon: Building2,
      gradient: "linear-gradient(135deg, #0284c7 0%, #00bba7 100%)",
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
      icon: ShoppingBag,
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
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
      icon: Truck,
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
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
      icon: Landmark,
      gradient: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
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
      icon: Hotel,
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)",
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
      icon: HeartPulse,
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
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
    <div className="home-page" style={{ minHeight: '100%', background: '#ffffff', color: '#0a1428' }}>

      {/* ═════════════════════════════════════════════════════════════════════
          1. HERO SECTION (Unsplash Tech-Abstract BG + High-Contrast Dark Overlay)
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
            background: 'linear-gradient(180deg, rgba(5, 12, 26, 0.90) 0%, rgba(10, 20, 40, 0.96) 100%)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            
            {/* Minimal High-Contrast Eyebrow Tag */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '999px', background: 'rgba(0, 187, 167, 0.15)', border: '1.5px solid rgba(0, 187, 167, 0.4)', marginBottom: '1.75rem' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00bba7', boxShadow: '0 0 10px #00bba7' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2dd4bf', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Enterprise AI & Software Engineering
              </span>
            </div>

            {/* Bold, Confident, Minimal 2-3 Word Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.85rem, 6.5vw, 4.85rem)',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                lineHeight: 1.08,
                color: '#ffffff',
                marginBottom: '1.35rem',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)'
              }}
            >
              Build. Automate. <span style={{ color: '#00bba7' }}>Scale.</span>
            </h1>

            {/* High-Contrast Subtext */}
            <p 
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                color: '#f1f5f9',
                lineHeight: 1.6,
                maxWidth: '640px',
                margin: '0 auto 2.5rem',
                fontWeight: 400
              }}
            >
              Autonomous AI systems, full-stack software, and automated workflows engineered for high-performance enterprises.
            </p>

            {/* High-Contrast CTA Buttons */}
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
                  color: '#020617',
                  fontWeight: 800,
                  fontSize: '0.975rem',
                  padding: '0.85rem 1.95rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0, 187, 167, 0.4)',
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
                <ArrowRight size={17} />
              </Link>

              {/* WhatsApp Button (High-Contrast Green) */}
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
                  fontWeight: 800,
                  fontSize: '0.975rem',
                  padding: '0.85rem 1.95rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
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
                <WhatsAppIcon size={19} color="#ffffff" />
                <span>Chat on WhatsApp</span>
              </a>

              {/* Book a Call Option */}
              <button
                onClick={onOpenContact}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  border: '1.5px solid rgba(255, 255, 255, 0.35)',
                  fontWeight: 700,
                  fontSize: '0.975rem',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#00bba7';
                  e.currentTarget.style.background = 'rgba(0, 187, 167, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
              >
                <Calendar size={17} />
                <span>Book a Call</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════════
          2. CAPABILITIES SECTION (Logo-Style Badges, High Contrast, 10 Domains with Working Items)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '4.5rem 0 3.5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: '#ffffff',
              border: '1.5px solid #cbd5e1',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.05)'
            }}
          >
            {/* Section Header */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 800 }}>
                  Comprehensive Capabilities
                </span>
                <span style={{ background: '#0a1428', color: '#ffffff', fontSize: '0.75rem', fontWeight: 800, padding: '3px 10px', borderRadius: '6px' }}>
                  10 Engineering Domains
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a1428', margin: 0 }}>
                Engineered for Modern Enterprise Scale
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.6, margin: 0, maxWidth: '720px', fontWeight: 500 }}>
                Explore our full spectrum of web, mobile, custom software, digital marketing, AI automation, and cloud intelligence disciplines.
              </p>
            </div>

            {/* Interactive Category Filter Pills */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
                borderBottom: '1.5px solid #e2e8f0',
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
                      background: isActive ? '#0a1428' : '#ffffff',
                      color: isActive ? '#ffffff' : '#1e293b',
                      border: isActive ? '1.5px solid #0a1428' : '1.5px solid #cbd5e1',
                      padding: '0.55rem 1.15rem',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 4px 12px rgba(10,20,40,0.15)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = '#00bba7';
                        e.currentTarget.style.color = '#00bba7';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.borderColor = '#cbd5e1';
                        e.currentTarget.style.color = '#1e293b';
                      }
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* 10 Capabilities Grid with Logo Marks & High Contrast */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.65rem'
              }}
            >
              {filteredCapabilities.map((cap) => (
                <div
                  key={cap.id}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '18px',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#00bba7';
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 16px 36px rgba(0, 187, 167, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.03)';
                  }}
                >
                  {/* Top Bar: Logo Mark + Domain Number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <LogoMark gradient={cap.gradient} icon={cap.icon} size={48} />
                    <span 
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: 900,
                        color: '#64748b',
                        fontFamily: 'monospace'
                      }}
                    >
                      {cap.num}
                    </span>
                  </div>

                  {/* Capability Title (High Contrast Black) */}
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0a1428', marginBottom: '1.25rem' }}>
                    {cap.title}
                  </h3>

                  {/* Sub-Services Working Items Tags (High Contrast Chips) */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '1.75rem', flex: 1 }}>
                    {cap.items.map((subItem, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: '0.8rem',
                          fontWeight: 700,
                          color: '#0f172a',
                          background: '#f8fafc',
                          border: '1px solid #cbd5e1',
                          padding: '5px 11px',
                          borderRadius: '6px',
                          transition: 'all 0.15s ease',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#00bba7';
                          e.currentTarget.style.color = '#00bba7';
                          e.currentTarget.style.background = 'rgba(0, 187, 167, 0.08)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#cbd5e1';
                          e.currentTarget.style.color = '#0f172a';
                          e.currentTarget.style.background = '#f8fafc';
                        }}
                      >
                        <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#00bba7' }} />
                        <span>{subItem}</span>
                      </span>
                    ))}
                  </div>

                  {/* Direct Link */}
                  <div style={{ borderTop: '1.5px solid #f1f5f9', paddingTop: '1.15rem', marginTop: 'auto' }}>
                    <Link
                      to="/services"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        color: '#00bba7',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Explore {cap.title}</span>
                      <ArrowRight size={15} />
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
          ═════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 3.5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: '#f8fafc',
              border: '1.5px solid #cbd5e1',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 4rem' }}>
              <span style={{ fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 800 }}>
                Process
              </span>
              <h2 style={{ fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0a1428', marginTop: '0.4rem' }}>
                How It Works
              </h2>
            </div>

            {/* Horizontal Layout with Continuous Connecting Line */}
            <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
              <div 
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '25px',
                  left: '12%',
                  right: '12%',
                  height: '2px',
                  background: '#cbd5e1',
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
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        border: '2.5px solid #00bba7',
                        background: '#ffffff',
                        color: '#00bba7',
                        fontWeight: 900,
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1.25rem',
                        boxShadow: '0 6px 16px rgba(0, 187, 167, 0.2)'
                      }}
                    >
                      {st.num}
                    </div>

                    {/* Short Title (High Contrast) */}
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.65rem' }}>
                      {st.title}
                    </h3>

                    {/* 1 Sentence Description */}
                    <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.6, maxWidth: '280px', margin: 0, fontWeight: 500 }}>
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
          4. SECTORS SECTION (User Requirement: Light & Transparent Theme, Left Circular Animated Nodes, Right Products Panel)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 3.5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              position: 'relative',
              borderRadius: '26px',
              overflow: 'hidden',
              boxShadow: '0 16px 45px rgba(0, 0, 0, 0.08)',
              minHeight: '640px',
              border: '1.5px solid #cbd5e1'
            }}
          >
            {/* Dynamic Whole Section Background Real Image */}
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

            {/* LIGHT WITH TRANSPARENCY Frosted Glass Overlay (NOT dark!) */}
            <div 
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.88) 45%, rgba(241, 245, 249, 0.82) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                zIndex: 1
              }}
            />

            {/* Split Content: Left Side Circular Selector Nodes | Right Side Products We Build */}
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
              {/* Left Side: Circular Animated Sector Nodes */}
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(0, 187, 167, 0.12)', border: '1.5px solid rgba(0, 187, 167, 0.35)', marginBottom: '1.25rem' }}>
                  <Sparkles size={15} color="#00bba7" />
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#0f766e', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Sector Specializations
                  </span>
                </div>

                <h2 style={{ fontSize: 'clamp(2.1rem, 3.5vw, 2.85rem)', fontWeight: 900, color: '#0a1428', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1rem' }}>
                  Tailored For Industry Leaders
                </h2>

                <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.6, marginBottom: '2.25rem', fontWeight: 500 }}>
                  Click a circular sector node below to switch the environment and explore the exact software, voice bots, and automation systems we build for that domain.
                </p>

                {/* Animated Circular Sector Nodes List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
                          padding: '0.75rem 1rem 0.75rem 0.75rem',
                          borderRadius: '16px',
                          cursor: 'pointer',
                          transition: 'all 0.25s ease',
                          textAlign: 'left',
                          background: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                          border: isActive ? '2px solid #00bba7' : '1.5px solid #cbd5e1',
                          boxShadow: isActive ? '0 8px 24px rgba(0, 187, 167, 0.2)' : '0 2px 6px rgba(0,0,0,0.02)'
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.borderColor = '#00bba7';
                            e.currentTarget.style.background = '#ffffff';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.borderColor = '#cbd5e1';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.65)';
                          }
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          {/* Circle Logo Node with Pulse Glow Animation */}
                          <div 
                            style={{
                              width: '46px',
                              height: '46px',
                              borderRadius: '50%',
                              background: sec.gradient,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffffff',
                              boxShadow: isActive 
                                ? '0 0 0 4px rgba(0, 187, 167, 0.25), 0 6px 16px rgba(0, 0, 0, 0.2)' 
                                : '0 4px 10px rgba(0,0,0,0.1)',
                              transform: isActive ? 'scale(1.06)' : 'scale(1)',
                              transition: 'all 0.25s ease',
                              flexShrink: 0
                            }}
                          >
                            <sec.icon size={22} strokeWidth={2.2} />
                          </div>

                          {/* Sector Name (High Contrast) */}
                          <span style={{ fontSize: '1rem', fontWeight: isActive ? 800 : 700, color: isActive ? '#00bba7' : '#0a1428' }}>
                            {sec.name}
                          </span>
                        </div>

                        <ChevronRight size={18} color={isActive ? '#00bba7' : '#94a3b8'} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: What Products We Build for Selected Sector (Frosted Glass Panel) */}
              <div 
                style={{
                  background: 'rgba(255, 255, 255, 0.96)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '2px solid #00bba7',
                  borderRadius: '22px',
                  padding: 'clamp(2rem, 3.5vw, 2.75rem)',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem' }}>
                    <div 
                      style={{ 
                        width: 28, 
                        height: 28, 
                        borderRadius: '50%', 
                        background: currentSectorData.gradient, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: '#fff' 
                      }}
                    >
                      <currentSectorData.icon size={15} />
                    </div>
                    <span style={{ fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0f766e', fontWeight: 800 }}>
                      Products We Build for {currentSectorData.name}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.55rem', fontWeight: 900, color: '#0a1428', margin: 0 }}>
                    {currentSectorData.tagline}
                  </h3>
                </div>

                {/* Product Offerings List for this Sector (High Contrast Cards) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {currentSectorData.products.map((prod, pIdx) => (
                    <div 
                      key={pIdx}
                      style={{
                        background: '#f8fafc',
                        border: '1.5px solid #e2e8f0',
                        borderRadius: '14px',
                        padding: '1.25rem',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#00bba7';
                        e.currentTarget.style.background = '#ffffff';
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 187, 167, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#e2e8f0';
                        e.currentTarget.style.background = '#f8fafc';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                        <CheckCircle2 size={18} color="#00bba7" flexShrink={0} />
                        <h4 style={{ fontSize: '1.025rem', fontWeight: 800, color: '#0a1428', margin: 0 }}>
                          {prod.title}
                        </h4>
                      </div>
                      <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.55, margin: 0, paddingLeft: '26px', fontWeight: 500 }}>
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
                      fontWeight: 800,
                      fontSize: '0.925rem',
                      textDecoration: 'none'
                    }}
                  >
                    <span>View all sector case studies</span>
                    <ArrowRight size={16} />
                  </Link>

                  <button
                    onClick={onOpenContact}
                    style={{
                      background: '#0a1428',
                      color: '#ffffff',
                      border: 'none',
                      fontWeight: 800,
                      padding: '0.75rem 1.45rem',
                      borderRadius: '10px',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 4px 12px rgba(10,20,40,0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#00bba7';
                      e.currentTarget.style.color = '#020617';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#0a1428';
                      e.currentTarget.style.color = '#ffffff';
                    }}
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
          5. CTA STRIP (Box Framed High-Contrast Dark Section)
          ═════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '2rem 0 5rem' }}>
        <div className="container">
          <ScrollBox
            style={{
              background: 'linear-gradient(135deg, #050c1a 0%, #0a1428 100%)',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '26px',
              padding: 'clamp(3rem, 5vw, 4.5rem) 2rem',
              color: '#ffffff',
              textAlign: 'center',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
            }}
          >
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <h2 
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
                  fontWeight: 900,
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
                  fontSize: '1.15rem',
                  color: '#f1f5f9',
                  lineHeight: 1.6,
                  maxWidth: '560px',
                  margin: '0 auto 2.5rem',
                  fontWeight: 400
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
                {/* WhatsApp Button (High Contrast Green) */}
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
                    fontWeight: 800,
                    fontSize: '0.975rem',
                    padding: '0.85rem 1.95rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
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
                  <WhatsAppIcon size={19} color="#ffffff" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Book a Call Button (Vivid Electric Teal) */}
                <button
                  onClick={onOpenContact}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#00bba7',
                    color: '#020617',
                    fontWeight: 800,
                    fontSize: '0.975rem',
                    padding: '0.85rem 1.95rem',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(0, 187, 167, 0.35)',
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
                  <Calendar size={17} />
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
