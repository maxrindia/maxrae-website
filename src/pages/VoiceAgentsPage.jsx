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
    <div className="voice-agents-page" style={{ padding: '4rem 0 6rem', background: '#070d1a', color: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '999px', background: 'rgba(0,187,167,0.15)', border: '1px solid rgba(0,187,167,0.3)', marginBottom: '1rem' }}>
            <Sparkles size={16} color="#00bba7" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2dd4bf', textTransform: 'uppercase' }}>
              MaxR Pulse Voice Engine
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', fontWeight: 800, marginTop: '0.25rem', marginBottom: '1rem', lineHeight: 1.2 }}>
            Next-Generation AI Voice Agents <br />
            <span style={{ background: 'linear-gradient(135deg, #00bba7, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Sub-500ms Human Latency
            </span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Never let a ringing phone go to voicemail. MaxR Voice Agents sound completely human, handle natural interruptions, understand complex nuances, and book meetings 24 hours a day.
          </p>
        </div>

        {/* Audio Samples Showcase */}
        <div style={{ maxWidth: '960px', margin: '0 auto 5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
            🎧 Listen to Real AI Agent Demonstrations
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {audioDemos.map((sample) => (
              <div 
                key={sample.id}
                style={{
                  background: '#0f1d38',
                  borderRadius: '16px',
                  border: activeAudioSample === sample.id ? '2px solid #00bba7' : '1px solid rgba(255,255,255,0.08)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(0,187,167,0.2)', color: '#2dd4bf', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>
                    {sample.accent}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <Clock size={12} /> {sample.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.25rem' }}>
                  {sample.title}
                </h3>
                
                <p style={{ fontSize: '0.8rem', color: '#00bba7', fontWeight: 600, marginBottom: '0.75rem' }}>
                  Role: {sample.role}
                </p>

                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5, flex: 1, marginBottom: '1.5rem' }}>
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
                    background: activeAudioSample === sample.id ? '#00bba7' : 'rgba(255,255,255,0.1)',
                    color: activeAudioSample === sample.id ? '#040811' : '#ffffff',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
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
        <div style={{ background: '#0c172e', borderRadius: '20px', padding: '3rem', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00bba7', fontWeight: 700 }}>
              Under The Hood
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '0.25rem' }}>
              Why MaxR Voice Outperforms Standard Chatbots
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            <div>
              <Zap size={24} color="#00bba7" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Sub-500ms Natural Latency
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Using optimized streaming websockets and local edge inference, voice packets travel and respond faster than the human blink, removing awkward pauses.
              </p>
            </div>

            <div>
              <Mic size={24} color="#00bba7" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Full Interruption Handling
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                If a caller interrupts mid-sentence, the agent instantly stops talking and listens to the caller's correction, just like a professional receptionist.
              </p>
            </div>

            <div>
              <Globe2 size={24} color="#00bba7" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Regional Telephony & Dialects
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                Connects directly to your local Dubai (+971) or India (+91) phone lines. Custom-trained on Arabic dialects and English regional accents.
              </p>
            </div>

            <div>
              <ShieldCheck size={24} color="#00bba7" style={{ marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                Deterministic Knowledge Guardrails
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                The agent only speaks truth from your approved FAQs and inventory sheets. Zero hallucinations, with automated graceful handoff to human managers.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive ROI Calculator */}
        <div style={{ maxWidth: '840px', margin: '0 auto', background: '#0e1c38', borderRadius: '20px', padding: '3rem 2rem', border: '1px solid rgba(0, 187, 167, 0.3)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
            <Calculator size={28} color="#00bba7" />
            <div>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
                Calculate Your Monthly Automation ROI
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>
                See how much time and operational budget MaxR Voice Agents save your company.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            {/* Slider 1 */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                Inbound Calls Per Day: <strong>{callsPerDay} calls</strong>
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
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
                Average Call Duration: <strong>{minutesPerCall} minutes</strong>
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
          <div style={{ background: '#070e1c', borderRadius: '12px', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#38bdf8' }}>
                {monthlyCalls.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Calls Handled / Month</div>
            </div>

            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#2dd4bf' }}>
                {hoursSpentMonthly} hrs
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Human Hours Saved / Month</div>
            </div>

            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#00bba7' }}>
                ~${estimatedSavingsUSD.toLocaleString()}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Estimated Monthly Operational ROI</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button 
              onClick={onOpenContact} 
              className="btn-primary" 
              style={{ background: '#00bba7', color: '#040811', fontWeight: 700, padding: '0.85rem 2rem' }}
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
