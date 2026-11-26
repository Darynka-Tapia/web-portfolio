import { Reveal } from './../Reveal';
import type{ CaseStudyUsabilityData } from './../../data/caseStudies';

export function CaseStudyFindings(data: Readonly<CaseStudyUsabilityData>) {

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
          {data.findings.map((finding, idx) => (
            <Reveal key={finding.number} delay={idx * 0.08}>
              <div className="h-full p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                <div className="flex flex-col gap-space-md">
                  <span className="font-display text-display-mobile md:text-display text-primary tabular-nums">
                    {finding.number}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-error uppercase tracking-wider">
                      Friction Point - {finding.frictionPoint}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {finding.title}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {finding.description}
                  </p>
                </div>
                <div className="pt-space-lg">
                  <div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-space-xs text-body-sm text-primary">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                    <span>{finding.resolved}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
