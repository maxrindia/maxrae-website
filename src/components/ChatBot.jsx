import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Mail, 
  Phone, 
  PhoneCall, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Globe, 
  Workflow, 
  TrendingUp, 
  BarChart3, 
  Cpu, 
  Smartphone, 
  HelpCircle,
  RotateCcw
} from 'lucide-react';
import { sendLeadSubmission } from '../lib/leadService';

// Interactive Service options with dedicated Lucide icons
const SERVICE_OPTIONS = [
  { id: "ai", label: "AI Automation", icon: Bot },
  { id: "voice", label: "Voice AI Agents", icon: PhoneCall },
  { id: "web", label: "Web Development", icon: Globe },
  { id: "mobile", label: "Mobile Apps", icon: Smartphone },
  { id: "workflow", label: "Workflow Automation", icon: Workflow },
  { id: "marketing", label: "Digital Marketing", icon: TrendingUp },
  { id: "data", label: "Data & Analytics", icon: BarChart3 },
  { id: "cloud", label: "Cloud & DevOps", icon: Cpu },
  { id: "other", label: "General Inquiry", icon: HelpCircle }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  // steps: 'service' -> 'name' -> 'email' -> 'mobile' -> 'message' -> 'complete'
  const [step, setStep] = useState('service');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    message: ''
  });
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize bot greeting and services showcase on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: 'bot',
          stepContext: 'service',
          icon: Sparkles,
          text: "Hi! 👋 Welcome to MaxR. I'm your AI assistant.\nWhich service can we help you with today?"
        }
      ]);
      setStep('service');
    }
  }, [isOpen, messages.length]);

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, step, isSubmitting]);

  // Focus input when step changes (except when in complete)
  useEffect(() => {
    if (isOpen && step !== 'complete') {
      inputRef.current?.focus();
    }
  }, [isOpen, step]);

  const handleSelectService = (serviceItem) => {
    const updatedForm = { ...formData, service: serviceItem.label };
    setFormData(updatedForm);
    
    // Add user selection message and prompt for name
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: 'user',
        text: serviceItem.label,
        icon: serviceItem.icon
      },
      {
        id: Date.now() + 1,
        sender: 'bot',
        stepContext: 'name',
        icon: User,
        text: `Great choice! Let's connect you with our team.\nWhat is your full name?`
      }
    ]);
    setStep('name');
  };

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    const trimmed = inputVal.trim();
    if (!trimmed || isSubmitting) return;

    if (step === 'service') {
      // User typed a custom service / inquiry instead of clicking a button
      const userTypedService = trimmed;
      setFormData((prev) => ({ ...prev, service: userTypedService }));
      setInputVal('');
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'user',
          text: userTypedService,
          icon: HelpCircle
        },
        {
          id: Date.now() + 1,
          sender: 'bot',
          stepContext: 'name',
          icon: User,
          text: `Got it! Let's connect you with our team.\nWhat is your full name?`
        }
      ]);
      setStep('name');
    } else if (step === 'name') {
      const userName = trimmed;
      setFormData((prev) => ({ ...prev, name: userName }));
      setInputVal('');
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'user',
          text: userName,
          icon: User
        },
        {
          id: Date.now() + 1,
          sender: 'bot',
          stepContext: 'email',
          icon: Mail,
          text: `Nice to meet you, ${userName}! 👋\nWhat is your business email address?`
        }
      ]);
      setStep('email');
    } else if (step === 'email') {
      const userEmail = trimmed;
      setFormData((prev) => ({ ...prev, email: userEmail }));
      setInputVal('');
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'user',
          text: userEmail,
          icon: Mail
        },
        {
          id: Date.now() + 1,
          sender: 'bot',
          stepContext: 'mobile',
          icon: Phone,
          text: "Got it! What is your mobile number?\n(e.g. +971 50 123 4567)"
        }
      ]);
      setStep('mobile');
    } else if (step === 'mobile') {
      const userMobile = trimmed;
      setFormData((prev) => ({ ...prev, mobile: userMobile }));
      setInputVal('');
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'user',
          text: userMobile,
          icon: Phone
        },
        {
          id: Date.now() + 1,
          sender: 'bot',
          stepContext: 'message',
          icon: FileText,
          text: "Perfect. Briefly describe what you're working on or what you need help with:"
        }
      ]);
      setStep('message');
    } else if (step === 'message') {
      const userMsg = trimmed;
      const finalData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        service: formData.service,
        message: userMsg,
        source: 'chatbot',
        timestamp: new Date().toISOString()
      };

      setFormData((prev) => ({ ...prev, message: userMsg }));
      setInputVal('');
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'user',
          text: userMsg,
          icon: FileText
        }
      ]);
      setIsSubmitting(true);

      try {
        await sendLeadSubmission({
          name: finalData.name,
          email: finalData.email,
          phone: finalData.mobile,
          service: finalData.service,
          message: finalData.message,
          source: "Interactive ChatBot"
        });

        // ON SUCCESS
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 2,
            sender: 'bot',
            stepContext: 'complete',
            icon: CheckCircle2,
            text: `Thanks, ${formData.name || 'there'}! 🎉\nOur team will reach out to you shortly.\nYou can also email us directly at contact@maxr.ae`
          }
        ]);
      } catch (err) {
        // ON ERROR
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 2,
            sender: 'bot',
            stepContext: 'complete',
            icon: CheckCircle2,
            text: "Thanks! We'll be in touch at contact@maxr.ae"
          }
        ]);
      } finally {
        setIsSubmitting(false);
        setStep('complete');
      }
    }
  };

  const handleRestart = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      service: '',
      message: ''
    });
    setInputVal('');
    setIsSubmitting(false);
    setStep('service');
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        stepContext: 'service',
        icon: Sparkles,
        text: "Hi! 👋 Welcome to MaxR. I'm your AI assistant.\nWhich service can we help you with today?"
      }
    ]);
  };

  return (
    <>
      {/* ── Chat Panel ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="MaxR Assistant Chat"
          style={{
            position: 'fixed',
            bottom: '92px',
            right: '24px',
            width: '360px',
            maxWidth: 'calc(100vw - 32px)',
            height: '510px',
            maxHeight: 'calc(100vh - 120px)',
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            boxShadow: '0 20px 48px rgba(8, 6, 7, 0.22), 0 0 1px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 10002,
            border: '1px solid #E2E8F0',
            fontFamily: "inherit"
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: '#080607',
              color: '#ffffff',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderBottom: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0, 187, 167, 0.15)',
                  border: '1px solid rgba(0, 187, 167, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00bba7'
                }}
              >
                <Bot size={20} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.92rem', letterSpacing: '-0.01em' }}>
                    MaxR Assistant
                  </span>
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#00bba7',
                      boxShadow: '0 0 8px #00bba7'
                    }}
                  />
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                  AI & Engineering Support
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <button
                type="button"
                onClick={handleRestart}
                aria-label="Restart Chat"
                title="Start over"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                  borderRadius: '6px',
                  transition: 'color 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00bba7')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
              >
                <RotateCcw size={15} />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '6px',
                  borderRadius: '6px',
                  opacity: 0.85,
                  transition: 'opacity 0.2s'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '14px 14px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: '#FAFCFB'
            }}
          >
            {messages.map((m) => {
              const isUser = m.sender === 'user';
              const IconComp = m.icon;

              return (
                <div
                  key={m.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    justifyContent: isUser ? 'flex-end' : 'flex-start'
                  }}
                >
                  {/* Bot Avatar Icon */}
                  {!isUser && (
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: '#080607',
                        color: '#00bba7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <Bot size={15} />
                    </div>
                  )}

                  {/* Message Bubble with contextual icon header */}
                  <div
                    style={{
                      maxWidth: '82%',
                      backgroundColor: isUser ? '#00bba7' : '#FFFFFF',
                      color: isUser ? '#FFFFFF' : '#0F172A',
                      padding: '10px 14px',
                      borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      fontSize: '0.835rem',
                      lineHeight: 1.5,
                      border: isUser ? 'none' : '1px solid #E2E8F0',
                      boxShadow: isUser 
                        ? '0 3px 10px rgba(0, 187, 167, 0.25)' 
                        : '0 2px 6px rgba(0,0,0,0.03)',
                      wordBreak: 'break-word'
                    }}
                  >
                    {/* Context icon tag inside bot bubble */}
                    {!isUser && IconComp && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          fontSize: '0.7rem',
                          fontWeight: 750,
                          color: '#008779',
                          marginBottom: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        <IconComp size={12} />
                        <span>{m.stepContext === 'service' ? 'MaxR Services' : m.stepContext}</span>
                      </div>
                    )}

                    <div style={{ whiteSpace: 'pre-line' }}>
                      {m.text}
                    </div>
                  </div>

                  {/* User Avatar Icon */}
                  {isUser && (
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: '#00bba7',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px'
                      }}
                    >
                      <User size={15} />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Interactive Services Showcase (Visible when in 'service' step) */}
            {step === 'service' && (
              <div
                style={{
                  marginTop: '4px',
                  padding: '10px 12px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
                }}
              >
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 750,
                    color: '#64748B',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <Sparkles size={12} color="#00bba7" />
                  <span>Interactive Service Selector</span>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '6px'
                  }}
                >
                  {SERVICE_OPTIONS.map((srv) => {
                    const SrvIcon = srv.icon;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => handleSelectService(srv)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '7px',
                          padding: '7px 9px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          backgroundColor: '#FAFCFB',
                          color: '#0F172A',
                          fontSize: '0.74rem',
                          fontWeight: 650,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease',
                          fontFamily: 'inherit'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#00bba7';
                          e.currentTarget.style.backgroundColor = 'rgba(0, 187, 167, 0.08)';
                          e.currentTarget.style.color = '#008779';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#CBD5E1';
                          e.currentTarget.style.backgroundColor = '#FAFCFB';
                          e.currentTarget.style.color = '#0F172A';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <span
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '5px',
                            backgroundColor: 'rgba(0, 187, 167, 0.12)',
                            color: '#008779',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <SrvIcon size={12} />
                        </span>
                        <span style={{ lineHeight: 1.25 }}>{srv.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Submitting indicator */}
            {isSubmitting && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.75rem',
                  color: '#008779',
                  fontStyle: 'italic',
                  padding: '4px 6px'
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#00bba7',
                    animation: 'pulse 1s infinite'
                  }}
                />
                <span>Connecting with MaxR team...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div
            style={{
              padding: '10px 14px',
              borderTop: '1px solid #E2E8F0',
              backgroundColor: '#FFFFFF',
              flexShrink: 0
            }}
          >
            {step === 'complete' ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <span style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 600 }}>
                  ✓ Inquiry received
                </span>
                <button
                  type="button"
                  onClick={handleRestart}
                  style={{
                    background: '#00bba7',
                    color: '#080607',
                    border: 'none',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <RotateCcw size={12} />
                  <span>Start New Chat</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSend}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div style={{ position: 'relative', flex: 1 }}>
                  <input
                    ref={inputRef}
                    type={step === 'email' ? 'email' : step === 'mobile' ? 'tel' : 'text'}
                    placeholder={
                      step === 'service'
                        ? 'Select above or type here...'
                        : step === 'name'
                        ? 'Type your full name...'
                        : step === 'email'
                        ? 'Type your email (name@company.com)...'
                        : step === 'mobile'
                        ? 'Type your mobile (+971 50 ...)...'
                        : 'Type your message...'
                    }
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.825rem',
                      outline: 'none',
                      backgroundColor: '#FAFCFB',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#00bba7')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#CBD5E1')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={!inputVal.trim() || isSubmitting}
                  aria-label="Send Message"
                  style={{
                    backgroundColor: inputVal.trim() && !isSubmitting ? '#00bba7' : '#E2E8F0',
                    color: inputVal.trim() && !isSubmitting ? '#080607' : '#94A3B8',
                    border: 'none',
                    borderRadius: '8px',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: inputVal.trim() && !isSubmitting ? 'pointer' : 'default',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}
                >
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ── Floating Launcher Button (Bottom Right) ── */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Close Assistant' : 'Open MaxR Assistant'}
        title="Chat with MaxR AI Assistant"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#00bba7',
          color: '#080607',
          border: 'none',
          boxShadow: '0 8px 24px rgba(0, 187, 167, 0.45)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10001,
          transition: 'all 0.25s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 187, 167, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 187, 167, 0.45)';
        }}
      >
        {isOpen ? <X size={26} strokeWidth={2.4} /> : <MessageCircle size={26} strokeWidth={2.2} />}
      </button>
    </>
  );
}
