import { Reveal } from './../Reveal';
import type{ CaseStudyRoadmapData } from './../../data/caseStudies';


export function CaseStudyRoadmap(data: Readonly<CaseStudyRoadmapData>) {

  return (
    <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Reveal className="flex flex-col gap-space-xs mb-space-2xl text-left">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
            {data.eyebrow}
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
            {data.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            {data.description}
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {data.steps.map((step, idx) => (
            <Reveal key={step.phase} delay={idx * 0.08}>
              <div className="h-full p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    {step.phase}
                  </span>
                  <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                    {step.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
