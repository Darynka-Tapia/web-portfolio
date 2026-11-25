import { EXPERIENCES } from '../data/portfolioData';
import { Reveal } from './Reveal';

const DOT_CLASSES = {
  primary: 'bg-primary',
  tertiary: 'bg-tertiary-container',
  outline: 'bg-outline-variant',
} as const;

export function ExperienceSection() {
  return (
    <section
      className="w-full py-space-2xl lg:py-space-3xl bg-surface-container-low/40 scroll-mt-20"
      id="experience"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Reveal className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
            Career Progression
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Work Experience
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            A track record of frontend ownership, enterprise scalability, and cross-functional
            leadership.
          </p>
        </Reveal>

        {/* Editorial Timeline List */}
        <div className="relative flex flex-col gap-space-lg before:content-[''] before:absolute before:left-4 md:before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-surface-container-highest">
          {EXPERIENCES.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.08} className="relative pl-12 md:pl-20">
              {/* Timeline Node Pip */}
              <div
                aria-hidden="true"
                className={`absolute left-2.5 md:left-[26px] top-1.5 w-3.5 h-3.5 rounded-full ${DOT_CLASSES[item.dotStyle]} ring-4 ring-surface-container-lowest`}
              />
              <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-space-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs">
                  <div className="flex flex-col">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {item.role}
                    </h3>
                    <span className="font-label-md text-label-md text-primary font-medium">
                      {item.company}
                    </span>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-space-md py-1 rounded-full w-fit tabular-nums">
                    {item.period}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label-sm text-label-sm px-2.5 py-1 bg-secondary-container/50 text-on-secondary-container rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
