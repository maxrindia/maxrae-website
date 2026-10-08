import React from 'react';
import { 
  Building2, 
  Stethoscope, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

export default function CaseStudiesPage({ onOpenContact }) {
  const cases = [
    {
      id: "realestate",
      client: "Prime Luxury Properties (Dubai, UAE)",
      category: "Real Estate & High-Net-Worth Sales",
      badge: "Dubai Case Study",
      headline: "How a Dubai Brokerage Generated 3.4x More Qualified Viewings with Zero Missed Calls",
      metrics: [
        { label: "Lead Response Time", value: "< 2 Seconds", sub: "Down from 3.5 hours" },
        { label: "Booked Viewings", value: "+240%", sub: "Automated calendar slots" },
        { label: "Deployment Speed", value: "5 Days", sub: "From audit to live launch" }
      ],
      challenge: "The agency receives high-intent buyer inquiries for Palm Jumeirah and Downtown luxury penthouses from investors across Europe, Asia, and North America. Over 38% of inbound calls arrived during Dubai off-hours or while senior agents were in physical viewings, causing hot leads to slip away to competing agencies.",
      solution: "MaxR deployed an ultra-fast AI Voice Agent connected to a local UAE number. The agent greets callers in natural British English or Arabic, verifies buyer budget, pre-qualifies mortgage vs cash buyers, and immediately books viewing appointments on the senior broker's calendar while sending a detailed WhatsApp brochure.",
      testimonial: "“We used to lose high-net-worth investors simply because we couldn't pick up the phone at 11 PM Dubai time. MaxR solved this in 5 days. The AI sounds remarkably human and books viewings flawlessly.”",
      author: "Managing Partner, Prime Luxury Properties Dubai"
    },
    {
      id: "healthcare",
      client: "Metropolitan Dental & Aesthetics Group",
      category: "Healthcare & Patient Intake",
      badge: "Clinic Automation",
      headline: "Cutting Clinic No-Shows by 68% with 24/7 Voice & WhatsApp Appointment Booking",
      metrics: [
        { label: "No-Show Reduction", value: "68%", sub: "Through automated WhatsApp reminders" },
        { label: "Annual Savings", value: "$74,000", sub: "Reduced front-desk overtime" },
        { label: "Patient Satisfaction", value: "98.5%", sub: "Instant zero-hold booking" }
      ],
      challenge: "With three busy clinic locations, the front desk received over 320 daily phone calls for routine bookings, reschedulings, and procedure cost inquiries. Patients were frequently kept on hold for 5+ minutes, leading to abandoned calls and a costly 22% no-show rate.",
      solution: "MaxR implemented an AI receptionist integrated with the clinic's Practice Management System. The bot answers patient calls 24/7, answers treatment pricing questions, checks doctor schedules, and sends two-way WhatsApp confirmation pings with Google Map directions.",
      testimonial: "“Our receptionists are no longer glued to ringing phones and can actually focus on welcoming patients with warmth. It completely transformed our clinic's operations.”",
      author: "Clinical Director, Metropolitan Healthcare"
    },
    {
      id: "ecommerce",
      client: "Velocity D2C Consumer Brands",
      category: "Omnichannel E-Commerce & Retail",
      badge: "E-Commerce AI",
      headline: "Resolving 85% of Support Tickets Instantly & Recovering $140,000 in Abandoned Carts",
      metrics: [
        { label: "First-Response Time", value: "< 8 Sec", sub: "Via Official WhatsApp AI" },
        { label: "Support Deflection", value: "85%", sub: "Autonomous resolution" },
        { label: "Recovered Revenue", value: "$140,000+", sub: "In abandoned checkouts" }
      ],
      challenge: "Handling 12,000 monthly orders created an influx of 'Where is my order?' inquiries and return requests. Support ticket response times stretched to 24 hours, hurting customer retention.",
      solution: "MaxR connected an autonomous WhatsApp AI assistant directly to Shopify and fulfillment 3PL APIs. Customers receive instant tracking links, automated replacement requests, and personalized discount codes.",
      testimonial: "“MaxR automated our entire post-purchase customer journey. Our customer retention scores hit an all-time high within the first month of deployment.”",
      author: "VP of Operations, Velocity Brands"
    }
  ];

  return (
    <div className="case-studies-page" style={{ padding: '2rem 0 5rem', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
            Proven Track Record
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Real Measurable ROI for Real Businesses
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6 }}>
            Explore how MaxR's voice agents and workflow automations eliminate operational friction and scale revenue across Dubai and India.
          </p>
        </div>

        {/* Case Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {cases.map((c) => (
            <div 
              key={c.id}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00bba7', textTransform: 'uppercase' }}>
                  {c.category} · {c.client}
                </span>
                <span style={{ background: '#ecfdf5', color: '#065f46', fontSize: '0.78rem', fontWeight: 700, padding: '4px 12px', borderRadius: '999px', border: '1px solid #a7f3d0' }}>
                  {c.badge}
                </span>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0a1428', lineHeight: 1.3, marginBottom: '2rem' }}>
                {c.headline}
              </h2>

              {/* Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {c.metrics.map((m, midx) => (
                  <div key={midx} style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00bba7' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0a1428', marginTop: '4px' }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>
                      {m.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#dc2626', marginBottom: '0.5rem' }}>
                    The Problem
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65 }}>
                    {c.challenge}
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#059669', marginBottom: '0.5rem' }}>
                    The MaxR Automation
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.925rem', lineHeight: 1.65 }}>
                    {c.solution}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div style={{ background: '#0a1428', color: '#ffffff', borderRadius: '16px', padding: '1.75rem', marginTop: '1.5rem' }}>
                <p style={{ fontStyle: 'italic', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '0.75rem', color: '#f1f5f9' }}>
                  {c.testimonial}
                </p>
                <span style={{ fontSize: '0.8rem', color: '#2dd4bf', fontWeight: 700 }}>
                  — {c.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0a1428', marginBottom: '0.75rem' }}>
            Want Similar Results For Your Business?
          </h2>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            We'll analyze your current call volumes and workflow setup, and show you exactly where MaxR can save hours and increase conversions.
          </p>
          <button 
            onClick={onOpenContact} 
            className="btn-primary" 
            style={{ background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.9rem 2rem' }}
          >
            Schedule Free Strategy Call
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
}
