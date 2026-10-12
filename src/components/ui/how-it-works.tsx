"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

export interface Step {
  number: string;
  title: string;
  description: string;
  tag?: string;
  items?: string[];
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
  defaultActiveIndex?: number;
}

export const DEFAULT_HOW_IT_WORKS_STEPS: Step[] = [
  {
    number: "01",
    tag: "DISCOVER & AUDIT",
    title: "Understand",
    description: "We audit your manual workflows, bottlenecks, and pinpoint high-impact automation opportunities.",
    items: ["Workflow Audit", "Bottleneck Map", "ROI Targets"],
  },
  {
    number: "02",
    tag: "AGILE BUILD",
    title: "Build",
    description: "Custom software, voice AI agents, and integrations deployed in focused, transparent 2-week sprints.",
    items: ["2-Week Sprints", "Direct Dev Slack", "Production Setup"],
  },
  {
    number: "03",
    tag: "SCALE & SUPPORT",
    title: "Grow",
    description: "Continuous telemetry, live monitoring, and ongoing optimization with guaranteed enterprise SLA.",
    items: ["Live Telemetry", "Continuous Tuning", "24/7 SLA Support"],
  },
];

export default function HowItWorks({
  features,
  className = "",
  defaultActiveIndex = 0,
}: HowItWorksProps) {
  const steps = features && features.length > 0 ? features : DEFAULT_HOW_IT_WORKS_STEPS;
  const [activeStep, setActiveStep] = useState<number>(defaultActiveIndex);

  // Auto-progress connection animation every 4 seconds if not interacted
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className={`w-full ${className}`} style={{ maxWidth: "1180px", margin: "0 auto" }}>
      {/* Dynamic CSS for flowing pulse connection animation */}
      <style>{`
        @keyframes flowBeamH {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        @keyframes flowBeamV {
          0% { top: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 1; }
        }
        .step-rect-card {
          position: relative;
          background: #FFFFFF;
          border-radius: 14px;
          border: 1.5px solid #E2E8F0;
          padding: 1.65rem 1.45rem;
          display: flex;
          flex-direction: column;
          justifyContent: space-between;
          box-shadow: 0 4px 18px rgba(8, 6, 7, 0.03);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }
        .step-rect-card.active {
          border-color: #00bba7;
          box-shadow: 0 12px 32px rgba(0, 187, 167, 0.15), 0 2px 6px rgba(8, 6, 7, 0.04);
          transform: translateY(-4px);
        }
        .step-rect-card:hover {
          border-color: #00bba7;
          transform: translateY(-3px);
          box-shadow: 0 10px 26px rgba(0, 187, 167, 0.12);
        }
        @media (min-width: 900px) {
          .process-connection-wrap {
            display: flex;
            align-items: stretch;
            justifyContent: space-between;
            gap: 1.25rem;
          }
          .connector-node-h {
            display: flex !important;
          }
          .connector-node-v {
            display: none !important;
          }
        }
        @media (max-width: 899px) {
          .process-connection-wrap {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
          .connector-node-h {
            display: none !important;
          }
          .connector-node-v {
            display: flex !important;
          }
        }
      `}</style>

      {/* 3 Process Connected Horizontal Flow */}
      <div className="process-connection-wrap">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <React.Fragment key={step.number || step.title}>
              {/* Step Card: Concise Rectangular Shape */}
              <div
                className={`step-rect-card ${isActive ? "active" : ""}`}
                style={{ flex: 1, minWidth: 0 }}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
              >
                {/* Active Top Glow Edge */}
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "20px",
                      right: "20px",
                      height: "3px",
                      background: "#00bba7",
                      borderRadius: "0 0 3px 3px",
                    }}
                  />
                )}

                <div>
                  {/* Top Header Row: Step Number & Tag */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
                        fontSize: "0.95rem",
                        fontWeight: 900,
                        backgroundColor: isActive ? "#00bba7" : isPassed ? "#E6F8F5" : "#F1F5F9",
                        color: isActive ? "#080607" : isPassed ? "#008779" : "#475569",
                        border: isActive ? "none" : "1px solid #E2E8F0",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {step.number}
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
                        fontSize: "0.72rem",
                        fontWeight: 750,
                        letterSpacing: "0.06em",
                        color: isActive ? "#008779" : "#94A3B8",
                        background: isActive ? "rgba(0, 187, 167, 0.1)" : "transparent",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        transition: "all 0.25s ease",
                      }}
                    >
                      {step.tag || (idx === 0 ? "PHASE 1" : idx === 1 ? "PHASE 2" : "PHASE 3")}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', -apple-system, sans-serif",
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      color: "#080607",
                      lineHeight: 1.25,
                      margin: "0 0 0.55rem 0",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Concise Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-body, 'Inter', sans-serif)",
                      fontSize: "0.875rem",
                      color: "#475569",
                      lineHeight: 1.55,
                      margin: "0 0 1.25rem 0",
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Items Pill Chips */}
                {step.items && step.items.length > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "6px",
                      paddingTop: "0.85rem",
                      borderTop: "1px solid #F1F5F9",
                    }}
                  >
                    {step.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.74rem",
                          fontWeight: 650,
                          padding: "3px 8px",
                          borderRadius: "6px",
                          backgroundColor: isActive ? "#E6F8F5" : "#F8FAFC",
                          color: isActive ? "#008779" : "#64748B",
                          border: isActive ? "1px solid rgba(0,187,167,0.2)" : "1px solid #E2E8F0",
                          fontFamily: "var(--font-body, 'Inter', sans-serif)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <Check size={11} color={isActive ? "#008779" : "#94A3B8"} strokeWidth={3} />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Horizontal Connector between cards (Desktop/Tablet) */}
              {idx < steps.length - 1 && (
                <div
                  className="connector-node-h"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  {/* Connecting track line */}
                  <div
                    style={{
                      width: "100%",
                      height: "2.5px",
                      background: isActive || isPassed ? "rgba(0, 187, 167, 0.4)" : "#E2E8F0",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "2px",
                    }}
                  >
                    {/* Animated moving pulse beam */}
                    {(isActive || isPassed) && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "22px",
                          height: "100%",
                          background: "linear-gradient(90deg, transparent, #00bba7, #54CFB0)",
                          animation: "flowBeamH 1.8s infinite linear",
                        }}
                      />
                    )}
                  </div>

                  {/* Centered Arrow Flow Badge */}
                  <div
                    style={{
                      position: "absolute",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: isActive || isPassed ? "#00bba7" : "#FFFFFF",
                      border: isActive || isPassed ? "none" : "1.5px solid #CBD5E1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isActive || isPassed ? "#080607" : "#94A3B8",
                      boxShadow: isActive ? "0 2px 8px rgba(0, 187, 167, 0.4)" : "none",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <ArrowRight size={12} strokeWidth={2.8} />
                  </div>
                </div>
              )}

              {/* Vertical Connector between cards (Mobile) */}
              {idx < steps.length - 1 && (
                <div
                  className="connector-node-v"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "36px",
                    position: "relative",
                    margin: "0 auto",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "2px",
                      background: isActive || isPassed ? "rgba(0, 187, 167, 0.4)" : "#E2E8F0",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {(isActive || isPassed) && (
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "16px",
                          background: "linear-gradient(180deg, transparent, #00bba7)",
                          animation: "flowBeamV 1.6s infinite linear",
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
