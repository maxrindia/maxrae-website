import React, { useState } from 'react';
import { 
  Stethoscope, 
  Briefcase, 
  ShoppingBag, 
  Truck, 
  CreditCard,
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  PhoneCall, 
  MessageSquare 
} from 'lucide-react';

export default function IndustriesPage({ onOpenContact }) {
  const industries = [
    {
      id: "healthcare",
      title: "Healthcare, Dental & Wellness Clinics",
      badge: "Patient Experience",
      icon: <Stethoscope size={32} color="#00bba7" />,
      tagline: "Seamless 24/7 patient appointments with zero receptionist hold times.",
      challenge: "Clinic reception desks juggle ringing phones while greeting walk-in patients. Peak morning call volumes lead to abandoned calls, patient frustration, and costly appointment no-shows.",
      solution: "Our HIPAA-compliant AI voice and WhatsApp booking assistants handle patient inquiries, check doctor availability, book appointments, reschedule seamlessly, and send automated WhatsApp reminders 24 hours prior to consultations.",
      results: [
        "70% reduction in clinic appointment no-shows",
        "Receptionists freed to provide attentive in-person care",
        "24/7 patient booking without adding night shift staff"
      ]
    },
    {
      id: "professional-services",
      title: "Legal, Tax & Corporate Advisory",
      badge: "High-Value Intake",
      icon: <Briefcase size={32} color="#00bba7" />,
      tagline: "Automate client intake, preliminary qualification, and consultation booking.",
      challenge: "Senior partners and consultants lose valuable billable hours fielding unqualified inquiries and explaining fee structures to clients who don't fit the firm's ideal client profile.",
      solution: "MaxR automates the discovery intake workflow. The AI bot asks targeted preliminary qualifying questions, verifies case eligibility, collects preliminary documents, and only books paid consultations for verified prospects.",
      results: [
        "Partners save 12+ billable hours every week",
        "Only pre-qualified high-ticket clients reach partner calendars",
        "Automated NDA generation and digital agreement dispatch"
      ]
    },
    {
      id: "ecommerce",
      title: "E-Commerce & High-Volume Retail Brands",
      badge: "Customer Retention",
      icon: <ShoppingBag size={32} color="#00bba7" />,
      tagline: "Turn WhatsApp into your highest-converting sales and support channel.",
      challenge: "Over 60% of customer support inquiries are repetitive ('Where is my order?', 'How do I return?'), while cart abandonment drains ad spend across competitive markets.",
      solution: "Omnichannel WhatsApp AI synced directly to Shopify and custom ERPs. Customers receive live order tracking updates, automated return processing, and targeted WhatsApp discount sequences for abandoned checkouts.",
      results: [
        "85% of tier-1 support tickets resolved with zero human agents",
        "28% increase in abandoned cart recovery via WhatsApp",
        "Sub-10 second resolution time for order tracking questions"
      ]
    },
    {
      id: "logistics",
      title: "Logistics, Moving & Field Services",
      badge: "Operations Scaling",
      icon: <Truck size={32} color="#00bba7" />,
      tagline: "Automated address verification, dispatch confirmations, and quoting.",
      challenge: "Drivers waste hours calling customers for location pins and delivery confirmations, while dispatchers manually coordinate schedules across messy WhatsApp groups.",
      solution: "Automated outbound calls verify delivery time slots, collect Google Maps location pins via WhatsApp, and trigger automated driver dispatch notifications through custom webhook pipelines.",
      results: [
        "40% reduction in failed delivery attempts",
        "Automated instant price estimations based on distance & weight",
        "Real-time dispatch synchronization into operations dashboards"
      ]
    },
    {
      id: "fintech",
      title: "FinTech & Financial Services",
      badge: "Compliance & Security",
      icon: <CreditCard size={32} color="#00bba7" />,
      tagline: "Secure client onboarding, automated verification, and proactive notifications.",
      challenge: "Financial service firms struggle with cumbersome client KYC follow-ups, manual document collection, and high call volumes regarding transaction and account statuses.",
      solution: "MaxR deploys encrypted AI voice and messaging assistants that guide clients through compliant verification steps, answer account inquiries, and deliver critical notifications.",
      results: [
        "65% faster client onboarding cycle",
        "Bank-grade encrypted data handling and audit logging",
        "24/7 automated support for routine account inquiries"
      ]
    }
  ];

  return (
    <div className="industries-page" style={{ padding: '4rem 0 6rem', background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
            Industry Playbooks
          </span>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#0a1428', marginTop: '0.5rem', marginBottom: '1rem' }}>
            Tailored AI for Your Specific Market
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.6 }}>
            Every industry has unique bottlenecks. Discover how MaxR Technologies builds custom automation architectures engineered for your specific business model.
          </p>
        </div>

        {/* Industry Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {industries.map((item) => (
            <div 
              key={item.id}
              style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '14px', background: 'rgba(0,187,167,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#00bba7' }}>
                      {item.badge}
                    </span>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0a1428', margin: 0 }}>
                      {item.title}
                    </h2>
                  </div>
                </div>

                <button 
                  onClick={onOpenContact} 
                  className="btn-primary"
                  style={{ background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                >
                  Request Industry Demo
                  <ArrowRight size={14} />
                </button>
              </div>

              <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#0f766e', marginBottom: '1.5rem' }}>
                {item.tagline}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px', padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#b91c1c' }}>
                    The Bottleneck
                  </span>
                  <p style={{ color: '#7f1d1d', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '6px' }}>
                    {item.challenge}
                  </p>
                </div>

                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#15803d' }}>
                    The MaxR AI Solution
                  </span>
                  <p style={{ color: '#14532d', fontSize: '0.9rem', lineHeight: 1.6, marginTop: '6px' }}>
                    {item.solution}
                  </p>
                </div>
              </div>

              {/* Quantified Results */}
              <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e2e8f0' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0a1428', marginBottom: '0.75rem' }}>
                  Proven Benchmarks Achieved:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  {item.results.map((res, ridx) => (
                    <div key={ridx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={16} color="#00bba7" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.875rem', color: '#334155', fontWeight: 500 }}>
                        {res}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Enterprise Callout */}
        <div style={{ marginTop: '5rem', background: '#0a1428', borderRadius: '24px', padding: '3rem 2rem', color: '#fff', textAlign: 'center', border: '1px solid rgba(0,187,167,0.3)' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>
            Ready to Modernize Your Industry Operations?
          </h2>
          <p style={{ color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 1.5rem', fontSize: '0.95rem' }}>
            We provide custom voice agents, automated CRM pipelines, and multi-channel intake tuned specifically for your industry's workflows.
          </p>
          <button 
            onClick={onOpenContact} 
            className="btn-primary" 
            style={{ background: '#00bba7', color: '#040811', fontWeight: 700 }}
          >
            Schedule Consultation
          </button>
        </div>

      </div>
    </div>
  );
}
