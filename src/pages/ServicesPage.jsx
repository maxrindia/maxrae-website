import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Globe2, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Layers, 
  MessageSquare, 
  Users 
} from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const services = [
    {
      id: "ai-automation",
      title: "AI Automation",
      subtitle: "Voice agents, chatbots, CRM & workflows",
      badge: "Core Capability",
      icon: <Zap size={32} color="#00bba7" />,
      tagline: "Replace repetitive manual tasks with 24/7 intelligent automated systems.",
      description: "We design, deploy, and maintain custom conversational AI voice bots and workflow automation pipelines. Never miss an inbound lead call, automate appointment scheduling, and synchronize customer interactions directly with your CRM (HubSpot, Salesforce, Zoho, etc.).",
      capabilities: [
        "AI Voice Agents for 24/7 inbound and outbound call handling",
        "Conversational AI Chatbots & Official WhatsApp Business API automations",
        "Two-way CRM integration (HubSpot, Salesforce, Zoho, Pipedrive)",
        "End-to-end workflow automation (Zapier, Make, custom webhooks & APIs)",
        "Automated calendar booking and appointment follow-up sequences"
      ],
      result: "Go live in under 7 days · Zero missed calls & leads"
    },
    {
      id: "business-consultation",
      title: "Business Consultation",
      subtitle: "Strategy, growth & operational optimization",
      badge: "Leadership Advisory",
      icon: <TrendingUp size={32} color="#00bba7" />,
      tagline: "Actionable strategic roadmaps that help businesses achieve measurable 5X growth.",
      description: "Led by Founder & CEO Shagul Hamithu and CTO Gopi Duraisamy. We analyze your company's existing business operations, identify high-impact growth bottlenecks, and implement structured 3- to 6-month growth roadmaps to optimize revenue and scale operational efficiency.",
      capabilities: [
        "In-depth operational audit and software stack rationalization",
        "Strategic growth roadmap and revenue bottleneck identification",
        "SOP streamlining and automated process mapping",
        "Performance benchmarks and quarterly milestone tracking",
        "Direct executive consulting with MaxR leadership"
      ],
      result: "Proven 5X business growth within 6 months"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & Branding",
      subtitle: "Websites, SEO, social media & paid ads",
      badge: "Customer Acquisition",
      icon: <Globe2 size={32} color="#00bba7" />,
      tagline: "Modern digital infrastructure designed to build authority and drive revenue.",
      description: "A comprehensive digital growth engine for your brand. We build modern, high-converting websites, execute technical search engine optimization (SEO), and manage targeted social media and paid advertising campaigns that generate qualified business opportunities.",
      capabilities: [
        "High-performance website design and conversion rate optimization (CRO)",
        "Comprehensive SEO strategy for organic search visibility",
        "Social media strategy and brand identity design",
        "Performance advertising and lead generation funnels",
        "Analytics, tracking, and customer journey attribution"
      ],
      result: "Higher search visibility · Predictable inbound lead flow"
    }
  ];

  return (
    <div className="services-page" style={{ padding: '4rem 0 6rem', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
            WHAT WE DO
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Our Consulting & Automation Services
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6 }}>
            Everything you need to modernize operations, automate routine processes, and scale your business with confidence.
          </p>
        </div>

        {/* Detailed Services Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {services.map((item) => (
            <div 
              key={item.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              {/* Left Column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '14px', background: 'rgba(0,187,167,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#00bba7' }}>
                      {item.badge}
                    </span>
                    <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0a1428', margin: 0 }}>
                      {item.title}
                    </h2>
                  </div>
                </div>

                <p style={{ fontSize: '1rem', fontWeight: 600, color: '#00bba7', marginBottom: '0.75rem' }}>
                  {item.subtitle}
                </p>

                <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {item.description}
                </p>

                <div style={{ padding: '0.85rem 1.25rem', background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.75rem' }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span style={{ fontSize: '0.9rem', color: '#065f46', fontWeight: 700 }}>
                    {item.result}
                  </span>
                </div>

                <button 
                  onClick={onOpenContact} 
                  className="btn-primary"
                  style={{ background: '#00bba7', color: '#040811', fontWeight: 700 }}
                >
                  Consult on {item.title}
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Right Column */}
              <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0a1428', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Layers size={18} color="#00bba7" /> Key Features & Capabilities:
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {item.capabilities.map((cap, cidx) => (
                    <div key={cidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={18} color="#00bba7" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.925rem', color: '#334155', lineHeight: 1.5 }}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748b' }}>
                  <Clock size={14} color="#00bba7" />
                  <span>Deployment: Rapid onboarding designed to go live in under 7 days.</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop: '5rem', background: '#0a1428', borderRadius: '24px', padding: '3.5rem 2rem', textAlign: 'center', border: '1px solid rgba(0,187,167,0.3)', color: '#ffffff' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            Ready to Accelerate Your Business Operations?
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 1.75rem', fontSize: '1rem' }}>
            Book a discovery session with MaxR Technologies. We'll map your current processes and demonstrate how our automation and growth frameworks create immediate value.
          </p>
          <button 
            onClick={onOpenContact} 
            className="btn-primary" 
            style={{ background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.9rem 2rem', fontSize: '1rem' }}
          >
            Schedule a Consultation
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
