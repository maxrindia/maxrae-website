import React, { useState } from 'react';
import { 
  PhoneCall, 
  Volume2, 
  Play, 
  Pause, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Mic, 
  Headphones, 
  Zap, 
  Globe2, 
  Sparkles, 
  Calculator 
} from 'lucide-react';

export default function VoiceAgentsPage({ onOpenContact }) {
  const [activeAudioSample, setActiveAudioSample] = useState(null);
  const [callsPerDay, setCallsPerDay] = useState(50);
  const [minutesPerCall, setMinutesPerCall] = useState(5);

  const audioDemos = [
    {
      id: "realestate",
      title: "Dubai Luxury Real Estate Inbound",
      role: "Property Consultant (Palm Jumeirah & Downtown)",
      accent: "English (Neutral / Professional)",
      duration: "1:24",
      dialogue: "Agent identifies caller's budget ($2.5M+), qualifies cash vs mortgage buyer, and locks a VIP penthouse viewing slot on Friday at 5:00 PM."
    },
    {
      id: "clinic",
      title: "Dental & Aesthetic Clinic Intake",
      role: "Clinic Reception & Care Coordinator",
      accent: "English / Arabic Dialect",
      duration: "1:10",
      dialogue: "Patient inquiries about Invisalign pricing and dental whitening. Bot checks Dr. Sarah's availability and books a slot with automated SMS confirmation."
    },
    {
      id: "support",
      title: "24/7 E-Commerce Order Resolution",
      role: "Tier-1 Customer Support Bot",
      accent: "English (Friendly / Clear)",
      duration: "0:58",
      dialogue: "Customer asks about an urgent delayed shipment. Bot accesses Shopify order tracking, issues status, and offers free express delivery credit."
    }
  ];

  // ROI Calculator Calculations
  const monthlyCalls = callsPerDay * 30;
  const hoursSpentMonthly = Math.round((monthlyCalls * minutesPerCall) / 60);
  const estimatedSavingsUSD = Math.round(hoursSpentMonthly * 25 * 0.8); // 80% automated, $25/hr loaded agent cost

  return (
    <div className="voice-agents-page" style={{ padding: '2rem 0 5rem', background: '#F5F8F7', color: '#080607' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
            <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>
              MaxR Pulse Voice Engine
            </span>
          </div>

          <h1 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)', fontWeight: 900, color: '#080607', letterSpacing: '-0.035em', lineHeight: 1.1, marginBottom: '1rem' }}>
            Next-Generation AI Voice Agents with <br />
            <span style={{ color: '#00bba7' }}>
              Sub-500ms Natural Latency
            </span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#556575', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto' }}>
            Never let a ringing phone go to voicemail. MaxR Voice Agents sound remarkably human, handle natural interruptions, understand complex nuances, and book appointments 24 hours a day.
          </p>
        </div>

        {/* Audio Samples Showcase */}
        <div style={{ maxWidth: '960px', margin: '0 auto 5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <Headphones size={18} color="#00bba7" />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>
                Interactive Preview
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#080607', letterSpacing: '-0.02em', margin: 0 }}>
              Listen to Live AI Agent Demonstrations
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {audioDemos.map((sample) => (
              <div 
                key={sample.id}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: activeAudioSample === sample.id ? '2px solid #00bba7' : '1px solid #E1E8E5',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 30px rgba(8,6,7,0.03)',
                  transition: 'all 0.2s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', background: '#ECFDF5', color: '#047857', padding: '3px 10px', borderRadius: '999px', fontWeight: 700, border: '1px solid #A7F3D0' }}>
                    {sample.accent}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#556575', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {sample.duration}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: '1.2rem', fontWeight: 800, color: '#080607', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>
                  {sample.title}
                </h3>
                
                <p style={{ fontSize: '0.825rem', color: '#0d9488', fontWeight: 700, marginBottom: '0.75rem' }}>
                  Role: {sample.role}
                </p>

                <p style={{ fontSize: '0.9rem', color: '#556575', lineHeight: 1.55, flex: 1, marginBottom: '1.5rem' }}>
                  {sample.dialogue}
                </p>

                <button
                  onClick={() => setActiveAudioSample(activeAudioSample === sample.id ? null : sample.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    background: activeAudioSample === sample.id ? 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)' : '#F5F8F7',
                    color: activeAudioSample === sample.id ? '#ffffff' : '#080607',
                    border: activeAudioSample === sample.id ? 'none' : '1px solid #E1E8E5',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: activeAudioSample === sample.id ? '0 4px 14px rgba(0,187,167,0.25)' : 'none'
                  }}
                >
                  {activeAudioSample === sample.id ? <Pause size={16} /> : <Play size={16} />}
                  <span>{activeAudioSample === sample.id ? "Playing Voice Preview" : "Play Voice Sample"}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture Specs */}
        <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: 'clamp(2.5rem, 4vw, 3.5rem)', border: '1px solid #E1E8E5', boxShadow: '0 8px 30px rgba(8,6,7,0.03)', marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '0.75rem' }}>
              <span style={{ width: '18px', height: '2px', background: '#00bba7' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00bba7', fontFamily: "'Space Grotesk', sans-serif" }}>
                Under The Hood
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: '#080607', letterSpacing: '-0.03em', margin: 0 }}>
              Why MaxR Voice Outperforms Standard Bots
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div>
              <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(0,187,167,0.2)' }}>
                <Zap size={22} color="#00bba7" />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#080607', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                Sub-500ms Natural Latency
              </h3>
              <p style={{ color: '#556575', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Using optimized streaming websockets and local edge inference, voice packets travel and respond faster than a human blink, removing awkward pauses.
              </p>
            </div>

            <div>
              <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(0,187,167,0.2)' }}>
                <Mic size={22} color="#00bba7" />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#080607', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                Full Interruption Handling
              </h3>
              <p style={{ color: '#556575', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                If a caller interrupts mid-sentence, the agent instantly stops talking and listens to the caller's correction, exactly like a professional receptionist.
              </p>
            </div>

            <div>
              <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(0,187,167,0.2)' }}>
                <Globe2 size={22} color="#00bba7" />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#080607', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                Regional Telephony & Dialects
              </h3>
              <p style={{ color: '#556575', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                Connects directly to your local Dubai (+971) or India (+91) phone lines. Custom-trained on Arabic dialects and English regional accents.
              </p>
            </div>

            <div>
              <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', border: '1px solid rgba(0,187,167,0.2)' }}>
                <ShieldCheck size={22} color="#00bba7" />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#080607', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                Deterministic Knowledge Guardrails
              </h3>
              <p style={{ color: '#556575', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                The agent only speaks truth from your approved FAQs and inventory sheets. Zero hallucinations, with automated graceful handoff to human managers.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive ROI Calculator */}
        <div style={{ maxWidth: '840px', margin: '0 auto', background: '#FFFFFF', borderRadius: '16px', padding: 'clamp(2.5rem, 4vw, 3.5rem)', border: '1px solid #E1E8E5', boxShadow: '0 8px 30px rgba(8,6,7,0.04)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '2rem' }}>
            <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(0,187,167,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,187,167,0.2)' }}>
              <Calculator size={26} color="#00bba7" />
            </div>
            <div>
              <h2 style={{ fontFamily: "'Space Grotesk', -apple-system, sans-serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: 800, color: '#080607', margin: 0, letterSpacing: '-0.02em' }}>
                Calculate Your Monthly Automation ROI
              </h2>
              <p style={{ color: '#556575', fontSize: '0.9rem', margin: '4px 0 0' }}>
                See how much time and operational budget MaxR Voice Agents save your company.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {/* Slider 1 */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: '#080607', fontWeight: 700, marginBottom: '0.5rem' }}>
                Inbound Calls Per Day: <span style={{ color: '#00bba7' }}>{callsPerDay} calls</span>
              </label>
              <input 
                type="range" 
                min="10" 
                max="500" 
                step="10"
                value={callsPerDay}
                onChange={(e) => setCallsPerDay(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00bba7' }}
              />
            </div>

            {/* Slider 2 */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', color: '#080607', fontWeight: 700, marginBottom: '0.5rem' }}>
                Average Call Duration: <span style={{ color: '#00bba7' }}>{minutesPerCall} minutes</span>
              </label>
              <input 
                type="range" 
                min="2" 
                max="15" 
                step="1"
                value={minutesPerCall}
                onChange={(e) => setMinutesPerCall(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#00bba7' }}
              />
            </div>
          </div>

          {/* Results Box */}
          <div style={{ background: '#F5F8F7', borderRadius: '12px', padding: '1.75rem', border: '1px solid #E1E8E5', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 900, color: '#080607', letterSpacing: '-0.02em' }}>
                {monthlyCalls.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#556575', fontWeight: 600, marginTop: '2px' }}>Calls Handled / Month</div>
            </div>

            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 900, color: '#00bba7', letterSpacing: '-0.02em' }}>
                {hoursSpentMonthly} hrs
              </div>
              <div style={{ fontSize: '0.8rem', color: '#556575', fontWeight: 600, marginTop: '2px' }}>Human Hours Saved / Month</div>
            </div>

            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2rem', fontWeight: 900, color: '#0d9488', letterSpacing: '-0.02em' }}>
                ~${estimatedSavingsUSD.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#556575', fontWeight: 600, marginTop: '2px' }}>Estimated Monthly Operational ROI</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button 
              onClick={onOpenContact} 
              className="btn-primary" 
              style={{ 
                background: 'linear-gradient(135deg, #00bba7 0%, #0d9488 100%)', 
                color: '#ffffff', 
                fontWeight: 700, 
                padding: '0.9rem 2.2rem',
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 4px 16px rgba(0,187,167,0.25)',
                cursor: 'pointer',
                fontSize: '0.95rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Get Custom Voice Agent Demo For Your Business
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
