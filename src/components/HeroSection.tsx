import { motion } from 'motion/react';
import type { NavSectionId } from '../types/portfolio';

interface HeroSectionProps {
  onNavigate: (sectionId: NavSectionId) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleJump = (sectionId: NavSectionId, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <section
      className="relative w-full pt-space-lg md:pt-space-xl pb-space-2xl lg:pb-space-3xl overflow-hidden scroll-mt-20"
      id="hero"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl lg:gap-gutter-desktop items-center">
          {/* Left: Editorial Headline & Manifesto */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-space-sm bg-secondary-container/60 text-on-secondary-container px-space-md py-1.5 rounded-full w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-sm text-label-xs uppercase tracking-wider">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-space-xs"
            >
              <h1 className="font-display text-display-mobile md:text-display text-on-surface tracking-tight leading-none">
                Abril Tapia
              </h1>
              <p className="font-headline-sm text-headline-sm text-primary font-medium tracking-tight mt-space-xs">
                Designing scalable frontend systems with surgical attention to craft.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface-container-low p-space-lg rounded-xl relative shadow-sm max-w-xl"
            >
              <div className="absolute -left-1.5 top-space-md bottom-space-md w-1 bg-primary rounded-full" />
              <p className="font-body-lg text-body-lg text-secondary italic">
                “Building thoughtful digital experiences through frontend development and clean architecture.”
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-space-md pt-space-sm"
            >
              <a
                className="inline-flex items-center justify-center gap-space-sm bg-primary text-on-primary font-label-md text-label-md px-space-lg sm:px-space-xl py-3 rounded-full hover:bg-primary-container transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                href="#projects"
                onClick={(e) => handleJump('projects', e)}
              >
                <span>Explore Projects</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-space-sm bg-surface-container-lowest text-on-surface font-label-md text-label-md px-space-lg sm:px-space-xl py-3 rounded-full hover:bg-secondary-container/50 transition-all shadow-sm"
                href="#contact"
                onClick={(e) => handleJump('contact', e)}
              >
                <span>Contact Me</span>
                <span className="material-symbols-outlined text-[18px]">mail</span>
              </a>
            </motion.div>

            {/* Highlight Micro-Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 gap-space-sm sm:gap-space-md pt-space-md sm:pt-space-lg max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-on-surface font-semibold tabular-nums">
                  5+
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Years Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-on-surface font-semibold tabular-nums">
                  100%
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Clean Architecture
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-on-surface font-semibold">
                  WCAG
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Accessibility Focus
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Architectural Editorial Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative w-full pt-space-md lg:pt-0">
            <div className="relative w-full max-w-md sm:max-w-lg min-h-[430px] sm:h-[500px] flex items-center justify-center select-none">
              {/* Dynamic Subtle Ambient Glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-secondary-container/50 via-primary/5 to-surface-container-low rounded-3xl blur-2xl -z-10 pointer-events-none opacity-80" />

              {/* LAYER 1: Background Architectural Wireframe Card (Blueprint / Low-Fi Layout) */}
              <motion.div
                initial={{ opacity: 0, x: -18, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.65, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-2 left-1 sm:-left-6 w-64 sm:w-80 h-88 sm:h-[400px] z-0 pointer-events-none"
              >
                <div className="w-full h-full bg-surface-container-lowest/80 border border-outline-variant/50 rounded-xl p-space-md shadow-sm backdrop-blur-sm flex flex-col gap-3 animate-float-wireframe">
                  <div className="flex items-center justify-between border-b border-surface-container pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-outline-variant/60" />
                      <span className="w-2 h-2 rounded-full bg-outline-variant/60" />
                      <span className="w-2 h-2 rounded-full bg-outline-variant/60" />
                    </div>
                    <div className="h-2 w-16 bg-surface-container-high rounded-full" />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="h-3 w-20 bg-surface-container-highest rounded" />
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-8 bg-surface-container rounded-full" />
                      <div className="h-2.5 w-8 bg-surface-container rounded-full" />
                    </div>
                  </div>
                  {/* Blueprint Layout Grid Mock */}
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="col-span-2 h-16 bg-surface-container-low rounded border border-dashed border-outline-variant/40 flex flex-col justify-center p-2 gap-1.5">
                      <div className="h-2 w-12 bg-outline-variant/40 rounded" />
                      <div className="h-1.5 w-24 bg-surface-container-high rounded" />
                    </div>
                    <div className="col-span-1 h-16 bg-surface-container-low/60 rounded border border-dashed border-outline-variant/40" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="h-20 bg-surface-container-low/50 rounded border border-dashed border-outline-variant/30" />
                    <div className="h-20 bg-surface-container-low/50 rounded border border-dashed border-outline-variant/30" />
                  </div>
                  {/* Blueprint Token Annotation */}
                  <div className="mt-auto flex items-center justify-between text-[10px] font-mono text-outline/70 border-t border-surface-container pt-2">
                    <span>grid: 12-col / fluid</span>
                    <span>rem-scale: 8pt</span>
                  </div>
                </div>
              </motion.div>

              {/* LAYER 2: Design Tokens & Reusable Component Micro-Cards (Orbiting Bridges) */}
              {/* Swatch Pill (Top Right) */}
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -top-2 right-1 sm:right-2 z-20"
              >
                <div className="bg-surface-container-lowest border border-outline-variant/60 p-2 sm:p-2.5 rounded-xl shadow-md flex items-center gap-2 animate-float-token-a hover:shadow-lg transition-shadow">
                  <div className="flex -space-x-1.5">
                    <span
                      className="w-5 h-5 rounded-circle ring-2 ring-surface-container-lowest shadow-sm"
                      style={{ backgroundColor: '#7a68ab' }}
                      title="Primary: #7a68ab"
                    />
                    <span
                      className="w-5 h-5 rounded-circle ring-2 ring-surface-container-lowest shadow-sm"
                      style={{ backgroundColor: '#e5e0f2' }}
                      title="Secondary Container: #e5e0f2"
                    />
                    <span
                      className="w-5 h-5 rounded-circle ring-2 ring-surface-container-lowest shadow-sm"
                      style={{ backgroundColor: '#1a1c1a' }}
                      title="On Surface: #1a1c1a"
                    />
                  </div>
                  <span className="font-label-sm text-[11px] text-on-surface-variant font-medium">
                    tokens.config
                  </span>
                </div>
              </motion.div>

              {/* Floating Button Token (Mid-Right Floating) */}
              <motion.div
                initial={{ opacity: 0, x: 16, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-1/3 right-0 sm:-right-6 z-20 max-w-[145px]"
              >
                <div className="bg-surface-container-lowest border border-outline-variant/60 p-2.5 rounded-xl shadow-lg flex flex-col gap-1.5 animate-float-token-b hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between text-[10px] font-mono text-primary font-medium">
                    <span>&lt;Button.vue&gt;</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <div className="inline-flex items-center justify-center gap-1 bg-primary text-on-primary text-[11px] font-medium py-1 px-2.5 rounded-full shadow-sm">
                    <span>Primary State</span>
                    <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tag & Micro State Card (Bottom Left Floating) */}
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 sm:-bottom-4 left-1 sm:left-4 z-20"
              >
                <div className="bg-surface-container-lowest border border-outline-variant/60 px-3 py-2 rounded-xl shadow-lg flex items-center gap-2.5 animate-float-token-c hover:shadow-xl transition-shadow">
                  <div className="w-6 h-6 rounded-lg bg-secondary-container/60 text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[15px]">component_exchange</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="font-label-sm text-[11px] font-semibold text-on-surface">
                        Tag.tsx
                      </span>
                      <span className="text-[9px] px-1 bg-secondary-container text-on-secondary-container rounded font-mono">
                        v1.4
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-outline">
                      props: variant=&quot;accent&quot;
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Subtle Flow SVG Connector Node */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30 stroke-primary"
                fill="none"
                viewBox="0 0 400 480"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="animate-dash-flow"
                  d="M 60 180 C 60 260, 160 240, 200 300"
                  strokeDasharray="4 4"
                  strokeWidth="1.5"
                />
                <circle cx="60" cy="180" fill="currentColor" r="3.5" />
                <circle cx="200" cy="300" fill="currentColor" r="3.5" />
              </svg>

              {/* LAYER 3: Elevated High-Fidelity Responsive Viewport Window (Focal Point) */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-[272px] sm:w-84 md:w-96 z-10"
              >
                <div className="w-full bg-surface-container-lowest rounded-xl shadow-xl border border-surface-container-highest/90 overflow-hidden transition-shadow duration-300 hover:shadow-2xl animate-float-main">
                  {/* Minimalist Window Titlebar Chrome */}
                  <div className="h-9 px-3 bg-surface-container-low border-b border-surface-container flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-outline-variant/60" />
                    </div>
                    <div className="h-5 px-3 bg-surface-container-lowest rounded-full border border-outline-variant/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="font-mono text-[10px] text-on-surface-variant truncate max-w-[120px]">
                        https://abril.dev/ui
                      </span>
                    </div>
                    <div className="w-3" />
                  </div>

                  {/* High-Fidelity Interface Viewport Preview */}
                  <div className="p-4 sm:p-5 flex flex-col gap-3.5 bg-background">
                    {/* In-Window Minimal Navigation */}
                    <div className="flex items-center justify-between pb-1 border-b border-surface-container/60">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-[9px]">
                          A
                        </div>
                        <span className="font-headline-sm text-xs font-semibold text-on-surface">
                          Tapia Studio
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-1.5 bg-surface-container-highest rounded-full" />
                        <span className="w-7 h-1.5 bg-surface-container-highest rounded-full" />
                        <div className="w-4 h-4 rounded-full bg-secondary-container/80 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[11px] text-primary">
                            search
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* High-Fi Hero Micro-Section */}
                    <div className="bg-surface-container-lowest p-3 rounded-lg border border-surface-container shadow-sm flex flex-col gap-2">
                      <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-secondary-container/50 w-fit">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        <span className="font-label-sm text-[8px] uppercase tracking-wider text-on-secondary-container font-semibold">
                          Release v2.8
                        </span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline-sm text-xs text-on-surface font-semibold leading-tight">
                          Deterministic UI Systems
                        </h4>
                        <p className="font-body-sm text-[10px] text-on-surface-variant leading-relaxed">
                          Architecting accessible, performant components with atomic foundations.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 pt-0.5">
                        <button
                          className="px-2.5 py-1 bg-primary text-on-primary font-label-sm text-[10px] rounded-full flex items-center gap-1 shadow-sm hover:bg-primary-container transition-colors cursor-pointer"
                          type="button"
                          onClick={(e) => handleJump('projects', e)}
                        >
                          <span>Explore</span>
                          <span className="material-symbols-outlined text-[10px]">
                            arrow_forward
                          </span>
                        </button>
                        <span className="font-mono text-[9px] text-on-surface-variant">
                          WCAG AAA Verified
                        </span>
                      </div>
                    </div>

                    {/* High-Fi Multi-Card Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-2.5 bg-surface-container-lowest rounded-lg border border-surface-container shadow-sm flex flex-col gap-1">
                        <div className="flex items-center justify-between text-on-surface-variant">
                          <span className="font-label-sm text-[9px] uppercase tracking-wider">
                            Lighthouse
                          </span>
                          <span className="material-symbols-outlined text-[12px] text-primary">
                            bolt
                          </span>
                        </div>
                        <span className="font-headline-md text-sm font-semibold text-on-surface tabular-nums">
                          100/100
                        </span>
                        <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                          <div className="w-full h-full bg-primary rounded-full" />
                        </div>
                      </div>
                      <div className="p-2.5 bg-surface-container-lowest rounded-lg border border-surface-container shadow-sm flex flex-col gap-1">
                        <div className="flex items-center justify-between text-on-surface-variant">
                          <span className="font-label-sm text-[9px] uppercase tracking-wider">
                            Bundle Size
                          </span>
                          <span className="material-symbols-outlined text-[12px] text-primary">
                            package_2
                          </span>
                        </div>
                        <span className="font-headline-md text-sm font-semibold text-on-surface tabular-nums">
                          1.8 kB
                        </span>
                        <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-secondary-container rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
