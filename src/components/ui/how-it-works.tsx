"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";

export interface Step {
  step?: string;
  title: string;
  description: string;
  tags?: string[];
  colorTheme?: "orange" | "blue" | "purple" | "mint";
}

export interface HowItWorksProps {
  features?: Step[];
  className?: string;
}

export default function HowItWorks({
  features,
  className = "",
}: HowItWorksProps) {
  const defaultFeatures: Step[] = [
    {
      step: "01",
      title: "Understand",
      description:
        "We audit your workflow and identify exactly where time and money are being lost.",
      tags: ["Workflow Audit", "Bottleneck Mapping", "ROI Targets"],
      colorTheme: "mint",
    },
    {
      step: "02",
      title: "Build",
      description:
        "We design and deploy the solution — automations, apps, or campaigns. You see progress every two weeks.",
      tags: ["2-Week Sprints", "Direct Dev Slack", "Live Production"],
      colorTheme: "mint",
    },
    {
      step: "03",
      title: "Grow",
      description:
        "You get results. We monitor, optimise, and scale what works. Post-launch support is included.",
      tags: ["Realtime Telemetry", "Continuous Tuning", "24/7 SLA Support"],
      colorTheme: "mint",
    },
  ];

  const data = features && features.length > 0 ? features : defaultFeatures;

  return (
    <LazyMotion features={domAnimation}>
      <div className={`relative w-full ${className}`}>
        {/* Horizontal Process Track Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {data.map((step, index) => {
            const stepNum = step.step || `0${index + 1}`;

            return (
              <m.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-[20px] p-7 md:p-8 shadow-sm hover:shadow-xl hover:border-[#00bba7]/50 transition-all duration-300"
              >
                {/* Horizontal Top Header: Step Number & Progress Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold text-lg group-hover:bg-[#00bba7] group-hover:text-black transition-colors duration-300"
                      style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                    >
                      {stepNum}
                    </span>

                    <span className="text-xs font-bold uppercase tracking-wider text-[#008779] bg-[#e6f9f4] dark:bg-[#00bba7]/10 px-3 py-1 rounded-full">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 tracking-tight group-hover:text-[#008779] transition-colors"
                    style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                  >
                    {step.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Horizontal Tags Pills */}
                {step.tags && step.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    {step.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </m.div>
            );
          })}
        </div>
      </div>
    </LazyMotion>
  );
}
