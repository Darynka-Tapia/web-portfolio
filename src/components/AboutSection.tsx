import { Reveal } from './Reveal';

const PILLARS = [
  { icon: 'verified', label: '5+ Years Experience' },
  { icon: 'token', label: 'Reusable UI Systems' },
  { icon: 'architecture', label: 'Clean Architecture' },
  { icon: 'accessibility_new', label: 'Human-Centered UX' },
];

const SPECIALIZATIONS = [
  {
    kicker: 'Frontend Specialization',
    title: 'Design Systems & Component Logic',
    description:
      'Translating design token primitives into deterministic, battle-tested Vue and React component trees that empower rapid product iteration.',
  },
  {
    kicker: 'Usability & Standards',
    title: 'WCAG 2.1 AA Accessibility',
    description:
      'Building for all users via semantic HTML5, keyboard navigation primitives, robust ARIA attributes, and high contrast color audits.',
  },
  {
    kicker: 'Full-Stack Foundations',
    title: 'API & Data Contract Fluency',
    description:
      'Deep understanding of relational schemas, RESTful response contracts, and state caching enables frictionless full-stack collaboration.',
  },
];

export function AboutSection() {
  return (
    <section className="w-full py-space-2xl bg-surface-container-low/50 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Reveal className="flex flex-col gap-space-xs mb-space-xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
            Philosophy &amp; Focus
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            About Me
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          {/* Editorial Bio Narrative (7 cols) */}
          <Reveal delay={0.05} className="lg:col-span-7 flex flex-col gap-space-md">
            <p className="font-body-lg text-body-lg text-on-surface leading-relaxed">
              Frontend development is my primary realm of expertise. I specialize in conceptualizing
              and engineering responsive web applications with scalable, highly modular UI
              components built on bulletproof architecture.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              My background in UX/UI design deeply enhances my engineering practice—providing a
              holistic viewpoint that values not only algorithmic efficiency and test coverage, but
              also pixel-level consistency, design tokens, and human usability.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              With solid foundations in full-stack web engineering, I bridge the gap between backend
              capabilities and fluid user experiences. I thrive on continuous learning, whether
              auditing performance metrics, experimenting with evolving frontend specifications, or
              refining team workflows.
            </p>

            {/* Core Pillar Highlight Chips */}
            <div className="flex flex-wrap gap-space-xs pt-space-sm">
              {PILLARS.map((pillar) => (
                <span
                  key={pillar.label}
                  className="inline-flex items-center gap-1.5 px-space-md py-1.5 rounded-full bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm"
                >
                  <span className="material-symbols-outlined text-[16px] text-primary">
                    {pillar.icon}
                  </span>{' '}
                  {pillar.label}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Right Side: Editorial Metric Cards & Architectural Mindset (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            {SPECIALIZATIONS.map((item, idx) => (
              <Reveal key={item.title} delay={0.08 + idx * 0.08}>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-xs hover:shadow-md transition-shadow duration-300">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    {item.kicker}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
