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
    description: "Audit workflows, isolate bottlenecks & target high ROI.",
    items: ["Workflow Audit", "ROI Targets"],
  },
  {
    number: "02",
    tag: "AGILE BUILD",
    title: "Build",
    description: "Deploy autonomous AI agents & software in 2-week sprints.",
    items: ["2-Week Sprints", "Direct Slack"],
  },
  {
    number: "03",
    tag: "SCALE & SUPPORT",
    title: "Grow",
    description: "Continuous telemetry, live tuning & 24/7 enterprise SLA.",
    items: ["Live Telemetry", "24/7 SLA Support"],
  },
];

const STEP_THEMES = [
  {
    name: "teal",
    accent: "#00bba7",
    accentDark: "#008779",
    accentLight: "#E6F8F5",
    gradientBg: "radial-gradient(circle at 50% 50%, #F0FDF9 0%, #ECFDF5 40%, #FFFFFF 80%)",
    borderColor: "rgba(0, 187, 167, 0.4)",
    borderActive: "#00bba7",
    glowColor: "rgba(0, 187, 167, 0.25)",
    pillBg: "rgba(0, 187, 167, 0.12)",
    pillText: "#008779",
    numberBg: "#00bba7",
    numberText: "#080607",
    orbitColor: "rgba(0, 187, 167, 0.35)",
  },
  {
    name: "indigo",
    accent: "#6366F1",
    accentDark: "#4338CA",
    accentLight: "#EEF2FF",
    gradientBg: "radial-gradient(circle at 50% 50%, #F5F3FF 0%, #EEF2FF 40%, #FFFFFF 80%)",
    borderColor: "rgba(99, 102, 241, 0.4)",
    borderActive: "#6366F1",
    glowColor: "rgba(99, 102, 241, 0.25)",
    pillBg: "rgba(99, 102, 241, 0.12)",
    pillText: "#4338CA",
    numberBg: "#6366F1",
    numberText: "#FFFFFF",
    orbitColor: "rgba(99, 102, 241, 0.35)",
  },
  {
    name: "amber",
    accent: "#F59E0B",
    accentDark: "#B45309",
    accentLight: "#FFFBEB",
    gradientBg: "radial-gradient(circle at 50% 50%, #FFFBEB 0%, #FEF3C7 40%, #FFFFFF 80%)",
    borderColor: "rgba(245, 158, 11, 0.45)",
    borderActive: "#F59E0B",
    glowColor: "rgba(245, 158, 11, 0.25)",
    pillBg: "rgba(245, 158, 11, 0.14)",
    pillText: "#B45309",
    numberBg: "#F59E0B",
    numberText: "#FFFFFF",
    orbitColor: "rgba(245, 158, 11, 0.35)",
  },
];

export default function HowItWorks({
  features,
  className = "",
  defaultActiveIndex = 0,
}: HowItWorksProps) {
  const steps = features && features.length > 0 ? features : DEFAULT_HOW_IT_WORKS_STEPS;
  const [activeStep, setActiveStep] = useState<number>(defaultActiveIndex);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-progress animation flow every 4.5 seconds if user is not hovering/interacting
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [steps.length, isPaused]);

  return (
    <div
      className={`w-full ${className}`}
      style={{ maxWidth: "1140px", margin: "0 auto", position: "relative" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Keyframes for Flow and Orbital Aura */}
      <style>{`
        @keyframes flowBeamH {
          0% { transform: translateX(-100%); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes flowBeamV {
          0% { transform: translateY(-100%); opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes rippleAura {
          0% { transform: scale(0.98); opacity: 0.7; }
          50% { transform: scale(1.04); opacity: 0.2; }
          100% { transform: scale(0.98); opacity: 0.7; }
        }
        @keyframes floatPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .how-it-works-circle-container {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
        }

        .step-circle-wrapper {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-circle-node {
          position: relative;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          text-align: center;
          box-sizing: border-box;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          user-select: none;
          cursor: pointer;
          z-index: 2;
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border-style: dashed;
          pointer-events: none;
          animation: orbitSpin 32s linear infinite;
          transition: all 0.4s ease;
          z-index: 1;
        }

        .flow-connector-track-h {
          display: flex;
          align-items: center;
          justifyContent: center;
          position: relative;
          flex: 1;
          min-width: 32px;
          max-width: 90px;
          height: 3px;
          z-index: 1;
        }

        @media (min-width: 900px) {
          .how-it-works-circle-container {
            flex-direction: row;
          }
          .connector-node-h {
            display: flex !important;
          }
          .connector-node-v {
            display: none !important;
          }
        }

        @media (max-width: 899px) {
          .how-it-works-circle-container {
            flex-direction: column;
            gap: 0;
          }
          .connector-node-h {
            display: none !important;
          }
          .connector-node-v {
            display: flex !important;
          }
        }
      `}</style>

      {/* Circle Cards Flow Layout */}
      <div className="how-it-works-circle-container">
        {steps.map((step, idx) => {
          const theme = STEP_THEMES[idx % STEP_THEMES.length];
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <React.Fragment key={step.number || step.title}>
              {/* Individual Medium Circle Card with Perfect Center Alignment */}
              <div className="step-circle-wrapper">
                {/* Ambient Outer Aura / Halo */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-12px",
                    borderRadius: "50%",
                    background: isActive ? theme.glowColor : "transparent",
                    filter: "blur(18px)",
                    opacity: isActive ? 0.9 : 0,
                    transition: "all 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Rotating Dashed Orbit Ring */}
                <div
                  className="orbit-ring"
                  style={{
                    inset: "-8px",
                    borderWidth: "1.5px",
                    borderColor: isActive ? theme.orbitColor : "rgba(226, 232, 240, 0.7)",
                    opacity: isActive ? 1 : 0.4,
                  }}
                />

                {/* Inner Pulsing Ring when Active */}
                {isActive && (
                  <div
                    style={{
                      position: "absolute",
                      inset: "-4px",
                      borderRadius: "50%",
                      border: `1.5px solid ${theme.accent}`,
                      animation: "rippleAura 2.8s ease-in-out infinite",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Main Circle Node - Equal Diameter & Dead-Center Alignment */}
                <div
                  className={`step-circle-node ${isActive ? "active" : ""}`}
                  style={{
                    width: "clamp(260px, 25vw, 295px)",
                    height: "clamp(260px, 25vw, 295px)",
                    background: theme.gradientBg,
                    border: `2px solid ${isActive ? theme.borderActive : theme.borderColor}`,
                    boxShadow: isActive
                      ? `0 16px 38px ${theme.glowColor}, 0 2px 8px rgba(8, 6, 7, 0.04)`
                      : "0 8px 24px rgba(8, 6, 7, 0.04)",
                  }}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  {/* Internal Centering Box */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      width: "100%",
                      height: "100%",
                      padding: "clamp(1.25rem, 2vw, 1.75rem)",
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Top Step Number Badge & Tag */}
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        background: theme.pillBg,
                        border: `1px solid ${isActive ? theme.borderActive : "transparent"}`,
                        padding: "4px 10px",
                        borderRadius: "9999px",
                        marginBottom: "0.55rem",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
                          fontSize: "0.74rem",
                          fontWeight: 900,
                          color: theme.pillText,
                        }}
                      >
                        {step.number}
                      </span>
                      <span
                        style={{
                          width: "3px",
                          height: "3px",
                          borderRadius: "50%",
                          background: theme.accent,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-mono, 'IBM Plex Mono', monospace)",
                          fontSize: "0.68rem",
                          fontWeight: 750,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: theme.pillText,
                        }}
                      >
                        {step.tag || (idx === 0 ? "AUDIT" : idx === 1 ? "BUILD" : "SCALE")}
                      </span>
                    </div>

                    {/* Step Title (Crisp Plus Jakarta Sans display) */}
                    <h3
                      style={{
                        fontFamily: "var(--font-heading, 'Plus Jakarta Sans', sans-serif)",
                        fontSize: "clamp(1.3rem, 1.8vw, 1.55rem)",
                        fontWeight: 850,
                        color: "#080607",
                        lineHeight: 1.15,
                        margin: "0 0 0.45rem 0",
                        letterSpacing: "-0.025em",
                      }}
                    >
                      {step.title}
                    </h3>

                    {/* Concise Description (Locked 2-line height for uniform center alignment) */}
                    <p
                      style={{
                        fontFamily: "var(--font-body, 'Inter', sans-serif)",
                        fontSize: "clamp(0.78rem, 1vw, 0.85rem)",
                        color: "#475569",
                        lineHeight: 1.45,
                        margin: "0 0 0.75rem 0",
                        maxWidth: "220px",
                        fontWeight: 450,
                        minHeight: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {step.description}
                    </p>

                    {/* Bottom Concise Feature Micro-Chips (Single row nowrap) */}
                    {step.items && step.items.length > 0 && (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                          flexWrap: "nowrap",
                        }}
                      >
                        {step.items.map((item) => (
                          <span
                            key={item}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              fontSize: "0.68rem",
                              fontWeight: 650,
                              padding: "2.5px 7px",
                              borderRadius: "9999px",
                              backgroundColor: isActive ? theme.accentLight : "#FFFFFF",
                              color: isActive ? theme.accentDark : "#64748B",
                              border: `1px solid ${isActive ? theme.borderColor : "#E2E8F0"}`,
                              fontFamily: "var(--font-body, 'Inter', sans-serif)",
                              transition: "all 0.25s ease",
                              whiteSpace: "nowrap",
                            }}
                          >
                            <Check size={10} color={isActive ? theme.accentDark : "#94A3B8"} strokeWidth={3} />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Horizontal Connecting Flow Track (Colinear with Circle Equator) */}
              {idx < steps.length - 1 && (
                <div className="connector-node-h flow-connector-track-h">
                  {/* Base Track Line */}
                  <div
                    style={{
                      width: "100%",
                      height: "3px",
                      background: isPassed || isActive ? theme.borderColor : "#E2E8F0",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "3px",
                    }}
                  >
                    {/* Animated Gliding Flow Beam */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "36px",
                        height: "100%",
                        background: `linear-gradient(90deg, transparent, ${theme.accent}, #FFFFFF)`,
                        animation: "flowBeamH 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
                      }}
                    />
                  </div>

                  {/* Flow Direction Indicator Circle */}
                  <div
                    style={{
                      position: "absolute",
                      width: "26px",
                      height: "26px",
                      borderRadius: "50%",
                      background: isActive || isPassed ? theme.accent : "#FFFFFF",
                      border: isActive || isPassed ? "none" : "1.5px solid #CBD5E1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isActive || isPassed ? theme.numberText : "#94A3B8",
                      boxShadow: isActive ? `0 4px 12px ${theme.glowColor}` : "0 2px 4px rgba(0,0,0,0.04)",
                      transition: "all 0.35s ease",
                      animation: isActive ? "floatPulse 2s ease-in-out infinite" : "none",
                      zIndex: 3,
                    }}
                  >
                    <ArrowRight size={12} strokeWidth={2.8} />
                  </div>
                </div>
              )}

              {/* Vertical Connecting Flow Node (Mobile) */}
              {idx < steps.length - 1 && (
                <div
                  className="connector-node-v"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "44px",
                    width: "3px",
                    position: "relative",
                    margin: "0.2rem 0",
                  }}
                >
                  {/* Vertical Base Line */}
                  <div
                    style={{
                      height: "100%",
                      width: "3px",
                      background: isPassed || isActive ? theme.borderColor : "#E2E8F0",
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "24px",
                        background: `linear-gradient(180deg, transparent, ${theme.accent})`,
                        animation: "flowBeamV 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite",
                      }}
                    />
                  </div>

                  {/* Vertical Arrow Indicator */}
                  <div
                    style={{
                      position: "absolute",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: isActive || isPassed ? theme.accent : "#FFFFFF",
                      border: isActive || isPassed ? "none" : "1.5px solid #CBD5E1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isActive || isPassed ? theme.numberText : "#94A3B8",
                      boxShadow: isActive ? `0 4px 12px ${theme.glowColor}` : "none",
                      zIndex: 3,
                    }}
                  >
                    <ArrowRight size={11} strokeWidth={2.8} style={{ transform: "rotate(90deg)" }} />
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
