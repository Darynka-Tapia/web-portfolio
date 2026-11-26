import { Reveal } from './../Reveal';
import type{ CaseStudyAccessibilityData } from './../../data/caseStudies';


export function CaseStudyAccessibility(data: Readonly<CaseStudyAccessibilityData>) {

  return (
    <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          <Reveal className="lg:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              {data.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              {data.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {data.description}
            </p>
          </Reveal>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {data.items.map((item, idx) => (
              <Reveal key={item.number} delay={idx * 0.08}>
                <div className="h-full p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                  <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary font-headline-sm tabular-nums">
                    {item.number}
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
