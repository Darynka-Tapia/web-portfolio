import { Reveal } from './../Reveal';
import type{ CaseStudyResearchData } from './../../data/caseStudies';

export function CaseStudyResearch(data: Readonly<CaseStudyResearchData>) {

  return (
    <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
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
          <div className="lg:col-span-8 flex flex-col gap-space-lg">
            <Reveal delay={0.06}>
              <div className="p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  {data.methodologyTitle}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                  {data.metrics.map((metric) => (
                    <div key={metric.title}>
                      <span className="font-display text-display-mobile md:text-display text-primary tabular-nums">
                        {metric.value}
                      </span>
                      <p className="font-headline-sm text-headline-sm text-on-surface">
                        {metric.title}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {data.insights.map((insight) => (
                <Reveal key={insight.title} delay={0.1}>
                <div className="h-full p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">{insight.icon}</span>
                    <span className="font-label-md text-label-md">
                      {insight.title}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    {insight.description}
                  </p>
                </div>
              </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
