import React from 'react';
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
  Workflow
} from 'lucide-react';

export default function ServicesPage({ onOpenContact }) {
  const services = [
    {
      id: "ai-automation",
      title: "AI Automation & Voice Agents",
      subtitle: "Voice agents, chatbots, CRM & workflows",
      badge: "Core Automation",
      icon: <Bot size={32} color="#00bba7" />,
      tagline: "Replace repetitive manual tasks with 24/7 intelligent automated voice & chat systems.",
      description: "We engineer custom conversational AI voice bots and workflow automation pipelines. Never miss an inbound inquiry, automate appointment scheduling, and synchronize customer interactions directly with your CRM (HubSpot, Salesforce, Zoho).",
      capabilities: [
        "AI Voice Agents for 24/7 inbound and outbound call handling with < 1s latency",
        "Conversational AI Chatbots & Official WhatsApp Business API automations",
        "Two-way CRM integration (HubSpot, Salesforce, Zoho, Pipedrive)",
        "Automated calendar booking and appointment follow-up sequences",
        "Custom natural language processing tuned for your brand tone"
      ],
      result: "Go live in under 7 days · Zero missed calls & leads"
    },
    {
      id: "web-mobile-apps",
      title: "Web & Mobile Applications",
      subtitle: "iOS, Android, React, Next.js & Full-Stack Apps",
      badge: "App Development",
      icon: <Smartphone size={32} color="#00bba7" />,
      tagline: "Engineered for lightning speed, intuitive UI/UX, and high conversion rates.",
      description: "We build modern, responsive web applications and cross-platform iOS & Android mobile applications. Built with modern architectures like React, Next.js, Flutter, and Node.js to provide seamless user experiences that retain customers.",
      capabilities: [
        "Native and cross-platform mobile apps for iOS and Android",
        "Custom web applications and responsive customer portals",
        "Progressive Web Apps (PWAs) with offline capability",
        "High-converting UX/UI wireframing and design systems",
        "Secure RESTful API and GraphQL backend integrations"
      ],
      result: "High-performance apps · Engaging mobile & web experiences"
    },
    {
      id: "software-development",
      title: "Custom Software Development",
      subtitle: "Enterprise systems, SaaS platforms & cloud architectures",
      badge: "Engineering",
      icon: <Code2 size={32} color="#00bba7" />,
      tagline: "Tailor-made software solutions built to solve your unique operational bottlenecks.",
      description: "From custom internal dashboards and SaaS products to cloud-native database architectures, we build secure, maintainable software engineered to scale with your organization as transaction volumes grow.",
      capabilities: [
        "End-to-end bespoke enterprise software development",
        "Scalable SaaS MVP build & architecture design",
        "Microservices, database optimization & cloud infrastructure (AWS/GCP)",
        "Enterprise API development, webhooks & third-party connectors",
        "Rigorous automated testing, security audits & continuous deployment"
      ],
      result: "Enterprise scalability · Zero vendor lock-in"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing & SEO",
      subtitle: "Websites, technical SEO, performance ads & social media",
      badge: "Growth Engine",
      icon: <Globe2 size={32} color="#00bba7" />,
      tagline: "Modern digital infrastructure designed to build authority and drive revenue.",
      description: "A comprehensive digital growth engine for your brand. We build modern, high-converting websites, execute technical search engine optimization (SEO), and manage targeted social media and paid advertising campaigns that generate qualified business opportunities.",
      capabilities: [
        "High-performance website design and conversion rate optimization (CRO)",
        "Comprehensive SEO strategy for organic search visibility",
        "Social media strategy and brand identity design",
        "Performance advertising and lead generation funnels (Google & Meta Ads)",
        "Analytics, tracking, and customer journey attribution"
      ],
      result: "Higher search visibility · Predictable inbound lead flow"
    }
  ];

  return (
    <div className="services-page" style={{ padding: 'clamp(3rem, 5vw, 4.5rem) 0 5rem', background: '#F5F8F7' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto clamp(3rem, 5vw, 4.5rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7' }}>
              WHAT WE DO
            </span>
          </div>
          <h1 
            style={{ 
              fontSize: 'clamp(2.3rem, 4.2vw, 3.4rem)', 
              fontWeight: 900, 
              color: '#080607', 
              letterSpacing: '-0.035em',
              lineHeight: 1.15,
              marginTop: 0, 
              marginBottom: '1rem',
              fontFamily: "'Space Grotesk', -apple-system, sans-serif"
            }}
          >
            End-to-End Technology for<br />
            <span style={{ 
              background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Modern Businesses.
            </span>
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 1.25vw, 1.15rem)', color: '#3F5565', lineHeight: 1.6, margin: 0 }}>
            Everything you need to modernize operations, automate routine processes, and scale your business with confidence.
          </p>
        </div>

        {/* Detailed Services Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {services.map((item) => (
            <div 
              key={item.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E1E8E5',
                padding: 'clamp(2rem, 4vw, 3rem)',
                boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              {/* Left Column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1rem' }}>
                  <div style={{ width: 52, height: 52, borderRadius: '12px', background: 'rgba(0, 187, 167, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#00bba7', letterSpacing: '0.06em' }}>
                      {item.badge}
                    </span>
                    <h2 
                      style={{ 
                        fontSize: '1.65rem', 
                        fontWeight: 800, 
                        color: '#080607', 
                        margin: 0,
                        letterSpacing: '-0.02em',
                        fontFamily: "'Space Grotesk', sans-serif"
                      }}
                    >
                      {item.title}
                    </h2>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f766e', marginBottom: '0.75rem' }}>
                  {item.subtitle}
                </p>

                <p style={{ color: '#3F5565', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {item.description}
                </p>

                <div 
                  style={{ 
                    padding: '0.85rem 1.25rem', 
                    background: '#F5F8F7', 
                    border: '1px solid #E1E8E5', 
                    borderRadius: '8px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '10px', 
                    marginBottom: '1.75rem' 
                  }}
                >
                  <CheckCircle2 size={17} color="#00bba7" />
                  <span style={{ fontSize: '0.875rem', color: '#080607', fontWeight: 700 }}>
                    {item.result}
                  </span>
                </div>

                <button 
                  onClick={onOpenContact} 
                  style={{ 
                    background: '#00bba7', 
                    color: '#080607', 
                    fontWeight: 800,
                    fontSize: '0.925rem',
                    padding: '0.8rem 1.65rem',
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
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 187, 167, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 187, 167, 0.3)';
                  }}
                >
                  <span>Consult on {item.title}</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Right Column */}
              <div style={{ background: '#FAFBFB', borderRadius: '14px', padding: '2rem', border: '1px solid #E1E8E5' }}>
                <h3 
                  style={{ 
                    fontSize: '1rem', 
                    fontWeight: 800, 
                    color: '#080607', 
                    marginBottom: '1.25rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  <Layers size={17} color="#00bba7" /> Key Features & Capabilities:
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {item.capabilities.map((cap, cidx) => (
                    <div key={cidx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#3F5565', lineHeight: 1.55 }}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #E1E8E5', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#64748b' }}>
                  <Clock size={14} color="#00bba7" />
                  <span>Deployment: Rapid onboarding designed to go live in under 7 days.</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Executive CTA Card */}
        <div 
          style={{ 
            marginTop: '4.5rem', 
            background: '#FFFFFF', 
            borderRadius: '16px', 
            padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)', 
            textAlign: 'center', 
            border: '1px solid #E1E8E5', 
            boxShadow: '0 8px 30px rgba(8, 6, 7, 0.04)' 
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.85rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7' }}>
              LET'S BUILD TOGETHER
            </span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2rem, 3.6vw, 2.85rem)', 
              fontWeight: 900, 
              marginBottom: '0.85rem',
              color: '#080607',
              letterSpacing: '-0.035em',
              fontFamily: "'Space Grotesk', -apple-system, sans-serif"
            }}
          >
            Ready to Accelerate Your <br />
            <span style={{ 
              background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Business Operations?
            </span>
          </h2>
          <p style={{ color: '#3F5565', maxWidth: '620px', margin: '0 auto 2rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Book a discovery session with MaxR Technologies. We'll map your current processes and demonstrate how our automation and growth frameworks create immediate value.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenContact} 
              style={{ 
                background: '#00bba7', 
                color: '#080607', 
                fontWeight: 800, 
                padding: '0.85rem 2rem', 
                fontSize: '0.95rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 14px rgba(0, 187, 167, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 187, 167, 0.45)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 187, 167, 0.35)';
              }}
            >
              <span>Schedule a Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
