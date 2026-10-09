import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart,
  Building2, 
  ShoppingCart, 
  TrendingUp, 
  GraduationCap, 
  Luggage, 
  Users, 
  Rocket,
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Sparkles,
  ShieldCheck, 
  Layers,
  Zap,
  BarChart3,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export default function IndustriesPage({ onOpenContact }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // ── Client Logos from Public Folder ──
  const clientLogos = [
    { name: "ARDHRA", src: "/assets/clients/ardhra.png", industry: "Skincare & Wellness" },
    { name: "Corrumatik", src: "/assets/clients/corrumatik.png", industry: "Engineering Advisory" },
    { name: "Glomi", src: "/assets/clients/glomi.png", industry: "Global E-Commerce" },
    { name: "Deeplance", src: "/assets/clients/deeplance.png", industry: "PropTech & Operations" },
    { name: "Le Spa", src: "/assets/clients/lespa.png", industry: "Luxury Hospitality" },
    { name: "Parvathi Computers", src: "/assets/clients/parvathi.png", industry: "IT & Systems" },
    { name: "SCOINS", src: "/assets/clients/scoins.png", industry: "FinTech & Web3" }
  ];

  // ── The 8 Core Industries (Matching Home Page Data & Themes) ──
  const industries = [
    {
      id: "healthcare",
      categoryKey: "healthcare",
      name: "Healthcare",
      displayTitle: "HEALTHCARE & HEALTH-TECH",
      icon: Heart,
      tagline: "HIPAA-compliant 24/7 patient voice concierges, automated intake, and clinical operations.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      metricBadge: "70% Less No-Shows",
      clientMatch: "Trusted by ARDHRA & Le Spa Wellness",
      challenge: "Clinic reception desks juggle ringing phones while greeting in-clinic patients. Peak morning call volumes lead to 30%+ abandoned calls, patient frustration, and costly missed appointments.",
      solution: "MaxR deploys HIPAA-compliant autonomous voice and WhatsApp booking assistants that handle inquiries in under 450ms, verify doctor schedules, book consultations directly into your EHR/CRM, and trigger automated WhatsApp confirmations with Google Maps directions.",
      capabilities: [
        "24/7 Voice Booking Assistant",
        "EHR / CRM Synchronization",
        "WhatsApp Automated Reminders",
        "HIPAA / Zero-Retention Privacy",
        "Multi-Dialect Arabic & English"
      ],
      results: [
        "70% reduction in appointment no-shows via automated multi-touch reminders",
        "Zero abandoned patient phone calls during peak clinic hours",
        "Reception staff freed up to deliver premium face-to-face patient experiences"
      ]
    },
    {
      id: "real-estate",
      categoryKey: "real-estate",
      name: "Real Estate",
      displayTitle: "REAL ESTATE & PROPTECH",
      icon: Building2,
      tagline: "High-converting property portals, instant AI lead qualification, and automated CRM pipelines.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      metricBadge: "3× Lead Conversion",
      clientMatch: "Trusted by GCC Developers & Brokerages",
      challenge: "In competitive property markets like Dubai, high ad spend generates hundreds of leads every week, but 60% decay because brokers take over 15 minutes to initiate first contact.",
      solution: "MaxR connects your Meta/Google ads directly to an AI voice and WhatsApp speed-to-lead engine. Inquiries receive an immediate AI qualification call within 60 seconds, collecting budget, preferred unit size, and timeline before booking directly into top brokers' calendars.",
      capabilities: [
        "Sub-60s Speed-to-Lead Voice Bot",
        "Property Portal & Web Development",
        "HubSpot / Salesforce / Zoho Routing",
        "Brochure & Floor Plan WhatsApp Delivery",
        "Executive Sales Telemetry Dashboard"
      ],
      results: [
        "Under 60 seconds average response time to new portal inquiries",
        "3× increase in qualified site visits booked per marketing dollar spent",
        "Complete automated synchronization across developer CRM pipelines"
      ]
    },
    {
      id: "ecommerce",
      categoryKey: "ecommerce",
      name: "E-Commerce",
      displayTitle: "E-COMMERCE & RETAIL",
      icon: ShoppingCart,
      tagline: "High-speed headless storefronts, automated WhatsApp checkout recovery, and 24/7 support bots.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      metricBadge: "85% Auto Support",
      clientMatch: "Trusted by ARDHRA D2C & Glomi Retail",
      challenge: "Over 65% of customer inquiries are repetitive ('Where is my tracking number?', 'How do I return?'), while cart abandonment drains paid acquisition margins across saturated retail spaces.",
      solution: "Omnichannel WhatsApp AI engine synced natively with Shopify, WooCommerce, and custom inventory ERPs. Customers receive live order tracking updates, frictionless automated return processing, and targeted WhatsApp discount sequences for abandoned checkouts.",
      capabilities: [
        "Headless E-Commerce Development",
        "WhatsApp Cart Recovery Funnels",
        "Automated Order Tracking AI",
        "Multi-Currency Payment Gateways",
        "Real-Time Inventory Synchronization"
      ],
      results: [
        "85% of tier-1 support tickets resolved without human intervention",
        "28% increase in abandoned cart recovery via interactive WhatsApp flows",
        "Sub-10 second resolution time for order tracking and exchange requests"
      ]
    },
    {
      id: "finance",
      categoryKey: "finance",
      name: "Finance",
      displayTitle: "FINANCE & FINTECH",
      icon: TrendingUp,
      tagline: "Bank-grade client onboarding, automated KYC intake, and executive BI intelligence dashboards.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      metricBadge: "65% Faster KYC",
      clientMatch: "Trusted by SCOINS & Wealth Advisory Firms",
      challenge: "Financial services and advisory firms struggle with cumbersome client KYC follow-ups, manual document collection, and high call volumes regarding transaction and account statuses.",
      solution: "MaxR deploys encrypted AI voice and messaging assistants that guide clients through compliant verification steps, answer account inquiries, and deliver critical notifications with TLS 1.3 encryption and strict audit logging.",
      capabilities: [
        "Automated KYC Document Verification",
        "Bank-Grade TLS 1.3 Cloud Architecture",
        "Executive Telemetry & BI Reporting",
        "Proactive Transaction Notifications",
        "Custom Client Portal Development"
      ],
      results: [
        "65% faster client onboarding cycle with zero compliance bottlenecks",
        "Bank-grade encrypted data handling and strict audit trails",
        "24/7 automated support for routine account status and statements"
      ]
    },
    {
      id: "education",
      categoryKey: "education",
      name: "Education",
      displayTitle: "EDUCATION & EDTECH",
      icon: GraduationCap,
      tagline: "Digital learning platforms, automated admission intake funnels, and student advisory bots.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      metricBadge: "5× Campus Intake",
      clientMatch: "Trusted by Parvathi Computers & Training Institutes",
      challenge: "Admissions teams are overwhelmed during enrollment seasons answering repetitive course syllabus questions, eligibility criteria, and fee structure inquiries across disjointed channels.",
      solution: "MaxR implements 24/7 student counseling voice and web chat bots that answer syllabus questions, evaluate student eligibility, collect applicant documentation, and schedule campus tours directly into academic counselors' calendars.",
      capabilities: [
        "Student Admission Intake Portals",
        "Course Counselor Voice AI Bot",
        "Automated Document Verification",
        "LMS & Classroom Systems Integration",
        "Multi-Language Parent Concierge"
      ],
      results: [
        "5× faster response time to prospective student inquiries",
        "40% increase in verified enrollments during peak application windows",
        "Seamless integration with enterprise student information systems"
      ]
    },
    {
      id: "hospitality",
      categoryKey: "hospitality",
      name: "Hospitality",
      displayTitle: "HOSPITALITY & TOURISM",
      icon: Luggage,
      tagline: "Direct booking web engines, 24/7 multilingual guest concierge bots, and automated loyalty systems.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      metricBadge: "90% Direct Bookings",
      clientMatch: "Trusted by Luxury Resorts & Le Spa Facilities",
      challenge: "High OTA commission fees (15–25%) cut deeply into margins, while front desk staff spend hours answering repetitive inquiries about amenities, check-in policies, and local recommendations.",
      solution: "MaxR engineers direct-booking web platforms coupled with multilingual AI guest concierges that assist guests before arrival, process room upgrades, coordinate spa and dining reservations, and automate checkout reminders.",
      capabilities: [
        "Commission-Free Direct Booking Engines",
        "24/7 Multilingual Guest Concierge AI",
        "Dining & Spa Upsell Automation",
        "Automated WhatsApp Check-In Prompts",
        "Integrated Loyalty Points Management"
      ],
      results: [
        "Up to 35% increase in high-margin direct website reservations",
        "Multilingual Arabic, English, and European guest support without extra staff",
        "Higher ancillary revenue through automated pre-arrival spa and dining offers"
      ]
    },
    {
      id: "professional-services",
      categoryKey: "professional-services",
      name: "Professional Services",
      displayTitle: "PROFESSIONAL SERVICES & LEGAL",
      icon: Users,
      tagline: "Automated preliminary qualification, NDA dispatch, and senior partner consultation booking.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      metricBadge: "12+ Billable Hrs Saved",
      clientMatch: "Trusted by Corrumatik & Corporate Advisory Firms",
      challenge: "Senior partners and consultants lose 10+ billable hours every week fielding unqualified inquiries and explaining fee structures to prospects who don't fit the firm's ideal client profile.",
      solution: "MaxR automates the discovery intake workflow. The AI bot asks targeted preliminary qualifying questions, verifies case eligibility, collects preliminary documents, and only books paid consultations for verified prospects.",
      capabilities: [
        "Automated Client Discovery Intake",
        "Digital Agreement & NDA Dispatch",
        "Pre-Qualified Calendar Routing",
        "Practice Management CRM Integration",
        "High-Authority Corporate Web Presence"
      ],
      results: [
        "Partners save 12+ billable hours weekly previously lost to triage calls",
        "Only pre-qualified high-ticket clients reach partner calendars",
        "Zero delays in dispatching initial proposals and digital engagement letters"
      ]
    },
    {
      id: "technology",
      categoryKey: "technology",
      name: "Technology & Startups",
      displayTitle: "TECHNOLOGY & STARTUPS",
      icon: Rocket,
      tagline: "Rapid full-stack engineering, multi-tenant cloud architectures, and autonomous AI pipelines.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      metricBadge: "< 7 Day MVP Sprints",
      clientMatch: "Trusted by Deeplance, Corrumatik & High-Growth Startups",
      challenge: "Early-stage and scaling tech founders face immense hiring friction and long development cycles, wasting months trying to assemble senior engineering capacity before launching.",
      solution: "MaxR operates as your dedicated engineering and AI delivery force. We take product specs from whiteboard to production in rapid bi-weekly sprints, built with strict typing, modular microservices, and high-availability cloud infrastructure.",
      capabilities: [
        "Full-Stack Web & Mobile App Development",
        "SaaS Multi-Tenant Cloud Architecture",
        "Custom AI & Autonomous Agent Pipelines",
        "CI/CD DevOps & Microservices Scaling",
        "Round-the-Clock Engineering SLA"
      ],
      results: [
        "Sprint 1 production-ready prototype deployed in under 7 days",
        "Zero technical debt with modular, self-documenting codebases",
        "Bank-grade 99.9% uptime SLA with automated serverless scaling"
      ]
    }
  ];

  const filteredIndustries = selectedFilter === 'all' 
    ? industries 
    : industries.filter(ind => ind.categoryKey === selectedFilter);

  const filterTabs = [
    { key: 'all', label: 'All Industries (8)' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'real-estate', label: 'Real Estate' },
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'finance', label: 'Finance & FinTech' },
    { key: 'education', label: 'Education' },
    { key: 'hospitality', label: 'Hospitality' },
    { key: 'professional-services', label: 'Professional Services' },
    { key: 'technology', label: 'Tech & Startups' }
  ];

  return (
    <div className="industries-page" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 5.5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* ── 1. HERO HEADER ── */}
        <div style={{ textAlign: 'center', maxWidth: '860px', margin: '0 auto clamp(2.5rem, 5vw, 4rem)' }}>
          <div className="about-hero-badge">
            <span className="about-pulse-dot" />
            <span>Vertical AI & Engineering • 8 Core Domains</span>
          </div>

          <h1 
            style={{ 
              fontFamily: "'Space Grotesk', -apple-system, sans-serif", 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em', 
              lineHeight: 1.12, 
              marginTop: 0,
              marginBottom: '1.25rem' 
            }}
          >
            Domain-Specific Technology.<br />
            <span style={{ 
              background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Engineered for Measurable Impact.
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1.05rem, 1.3vw, 1.18rem)', color: '#3F5565', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto' }}>
            Every market has unique operational bottlenecks. MaxR designs, builds, and deploys high-performance automation architectures tailored directly to the business dynamics of your specific industry.
          </p>
        </div>

        {/* ── 2. TRUSTED CLIENT LOGOS RIBBON ── */}
        <div 
          style={{ 
            background: '#FFFFFF', 
            borderRadius: '16px', 
            border: '1px solid #E2E8F0', 
            padding: '1.75rem 2rem', 
            boxShadow: '0 4px 18px rgba(8, 6, 7, 0.03)',
            marginBottom: '3.5rem'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b' }}>
              PROVEN RESULTS WITH INDUSTRY LEADERS ACROSS UAE & INDIA
            </span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 'clamp(1.5rem, 4vw, 3rem)' }}>
            {clientLogos.map((client) => (
              <div 
                key={client.name} 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '6px',
                  opacity: 0.85,
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.85';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                title={`${client.name} — ${client.industry}`}
              >
                <img 
                  src={client.src} 
                  alt={client.name} 
                  style={{ 
                    height: '38px', 
                    width: 'auto', 
                    maxWidth: '120px', 
                    objectFit: 'contain',
                    filter: 'grayscale(25%)'
                  }} 
                />
                <span style={{ fontSize: '0.68rem', fontWeight: 650, color: '#94a3b8' }}>
                  {client.industry}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. INTERACTIVE CATEGORY TABS ── */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '8px', 
            overflowX: 'auto', 
            paddingBottom: '1rem', 
            marginBottom: '2.5rem',
            scrollbarWidth: 'none',
            justifyContent: 'flex-start',
            flexWrap: 'nowrap'
          }}
        >
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setSelectedFilter(tab.key)}
                style={{
                  padding: '9px 18px',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? 800 : 600,
                  border: isActive ? '1.5px solid #00bba7' : '1px solid #E2E8F0',
                  background: isActive ? '#080607' : '#FFFFFF',
                  color: isActive ? '#54CFB0' : '#475569',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(0, 187, 167, 0.2)' : '0 1px 4px rgba(8,6,7,0.03)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#00bba7';
                    e.currentTarget.style.color = '#008779';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#E2E8F0';
                    e.currentTarget.style.color = '#475569';
                  }
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* ── 4. THE INDUSTRY SHOWCASE CARDS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredIndustries.map((ind) => {
            const IconComponent = ind.icon;
            return (
              <div 
                key={ind.id}
                id={ind.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1.5px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0, 187, 167, 0.45)';
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(0, 187, 167, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(8, 6, 7, 0.04)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Visual Header Banner with Full Bleed Unsplash Photography */}
                <div 
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: 'clamp(200px, 26vw, 280px)', 
                    overflow: 'hidden',
                    background: '#080607'
                  }}
                >
                  <img 
                    src={ind.image} 
                    alt={ind.name}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'linear-gradient(180deg, rgba(8,6,7,0.2) 0%, rgba(8,6,7,0.7) 65%, rgba(8,6,7,0.95) 100%)',
                      zIndex: 1
                    }} 
                  />

                  {/* Badges on Banner */}
                  <div 
                    style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      zIndex: 2, 
                      padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div 
                          style={{ 
                            width: '48px', 
                            height: '48px', 
                            borderRadius: '12px', 
                            background: '#080607', 
                            border: '1.5px solid #54CFB0',
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
                          }}
                        >
                          <IconComponent size={24} color="#54CFB0" />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', color: '#54CFB0', textTransform: 'uppercase', display: 'block' }}>
                            {ind.displayTitle}
                          </span>
                          <h2 
                            style={{ 
                              fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', 
                              fontWeight: 900, 
                              color: '#FFFFFF', 
                              margin: 0,
                              letterSpacing: '-0.025em',
                              fontFamily: "'Space Grotesk', sans-serif"
                            }}
                          >
                            {ind.name}
                          </h2>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ background: '#54CFB0', color: '#080607', fontSize: '0.75rem', fontWeight: 800, padding: '5px 12px', borderRadius: '999px', boxShadow: '0 2px 8px rgba(84,207,176,0.4)' }}>
                          {ind.metricBadge}
                        </span>
                        <span style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', color: '#FFFFFF', fontSize: '0.75rem', fontWeight: 700, padding: '5px 12px', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.25)' }}>
                          {ind.clientMatch}
                        </span>
                      </div>
                    </div>

                    <p style={{ color: 'rgba(255, 255, 255, 0.92)', fontSize: '1rem', fontWeight: 500, margin: 0, maxWidth: '640px', lineHeight: 1.5 }}>
                      {ind.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Main Body */}
                <div style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
                  
                  {/* Challenge & Solution Grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    
                    {/* The Operational Challenge */}
                    <div style={{ background: '#FAFBFB', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                        <span style={{ width: '12px', height: '2px', background: '#DC2626' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#DC2626' }}>
                          The Operational Bottleneck
                        </span>
                      </div>
                      <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                        {ind.challenge}
                      </p>
                    </div>

                    {/* The MaxR Solution */}
                    <div style={{ background: 'rgba(0, 187, 167, 0.04)', padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(0, 187, 167, 0.25)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.65rem' }}>
                        <span style={{ width: '12px', height: '2px', background: '#00bba7' }} />
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#008779' }}>
                          The MaxR Engineered Architecture
                        </span>
                      </div>
                      <p style={{ color: '#1E293B', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                        {ind.solution}
                      </p>
                    </div>

                  </div>

                  {/* Capabilities Tags (Matching Home Page) */}
                  <div style={{ marginBottom: '2rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 750, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: '0.75rem' }}>
                      Core Deployed Capabilities:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {ind.capabilities.map((cap, cIdx) => (
                        <span 
                          key={cIdx} 
                          style={{ 
                            fontSize: '0.8rem', 
                            fontWeight: 700, 
                            color: '#080607', 
                            background: '#F1F5F9', 
                            padding: '6px 12px', 
                            borderRadius: '8px', 
                            border: '1px solid #E2E8F0',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00bba7' }} />
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results & CTA Action Row */}
                  <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
                    
                    {/* 3 Results Bullets */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', flex: 1, minWidth: '280px' }}>
                      {ind.results.map((res, rIdx) => (
                        <div key={rIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#334155' }}>
                          <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0 }} />
                          <span>{res}</span>
                        </div>
                      ))}
                    </div>

                    {/* Dual Action Buttons */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <Link 
                        to="/contact"
                        className="btn-primary"
                        style={{ 
                          background: '#080607', 
                          color: '#FFFFFF', 
                          fontWeight: 750, 
                          padding: '0.75rem 1.6rem', 
                          fontSize: '0.875rem',
                          borderRadius: '8px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 14px rgba(8, 6, 7, 0.15)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#00bba7';
                          e.currentTarget.style.color = '#080607';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#080607';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                      >
                        <span>Deploy for {ind.name}</span>
                        <ArrowRight size={15} />
                      </Link>

                      <a 
                        href="https://wa.me/97145648887"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ 
                          background: '#FFFFFF', 
                          border: '1.5px solid #25D366', 
                          color: '#080607', 
                          fontWeight: 700, 
                          padding: '0.75rem 1.25rem', 
                          fontSize: '0.875rem',
                          borderRadius: '8px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          textDecoration: 'none',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#25D366';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#FFFFFF';
                          e.currentTarget.style.color = '#080607';
                        }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.237-6.164-3.488-8.414z"/>
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* ── 5. CLOSING EXECUTIVE BANNER ── */}
        <div 
          style={{ 
            background: 'linear-gradient(145deg, #080607 0%, #0d1a16 100%)', 
            borderRadius: '24px', 
            padding: 'clamp(2.75rem, 5.5vw, 4.25rem) clamp(1.5rem, 4vw, 3.5rem)', 
            border: '1.5px solid rgba(84, 207, 176, 0.4)', 
            boxShadow: '0 20px 50px rgba(8, 6, 7, 0.35)', 
            textAlign: 'center',
            color: '#FFFFFF',
            marginTop: '4.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#54CFB0', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block', marginBottom: '0.85rem' }}>
              CUSTOM ARCHITECTURE FOR ANY DOMAIN
            </span>
            
            <h2 
              style={{ 
                fontSize: 'clamp(2rem, 3.8vw, 3rem)', 
                fontWeight: 900, 
                color: '#FFFFFF', 
                margin: '0 0 1rem', 
                letterSpacing: '-0.03em',
                lineHeight: 1.18,
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Don't See Your Specific <br />
              <span style={{ color: '#54CFB0' }}>Industry Listed Above?</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: '#CBD5E1', lineHeight: 1.65, marginBottom: '2.25rem' }}>
              Our core autonomous voice engines, deterministic event-driven workflows, and high-performance digital platforms are adaptable to any operation where customer friction or manual processing costs time and revenue.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                to="/contact"
                className="btn-primary"
                style={{ 
                  background: '#54CFB0', 
                  color: '#080607', 
                  fontWeight: 800, 
                  padding: '0.85rem 2.25rem', 
                  fontSize: '0.95rem',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(84, 207, 176, 0.35)'
                }}
              >
                <span>Request Custom Industry Audit</span>
                <ArrowRight size={16} />
              </Link>

              <a 
                href="https://wa.me/97145648887"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.08)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)', 
                  color: '#FFFFFF', 
                  fontWeight: 700, 
                  padding: '0.85rem 1.75rem', 
                  fontSize: '0.95rem',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#25D366';
                  e.currentTarget.style.borderColor = '#25D366';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.89 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.894 0-3.177-1.237-6.164-3.488-8.414z"/>
                </svg>
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
