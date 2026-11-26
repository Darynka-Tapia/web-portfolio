import { Reveal } from './../Reveal';
import type{ CaseStudyConclusionsData } from './../../data/caseStudies';


export function CaseStudyConclusions(data: Readonly<CaseStudyConclusionsData>) {

  return (
    <section className="w-full py-space-2xl lg:py-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Reveal>
          <div className="p-space-xl lg:p-space-2xl rounded-2xl bg-surface-container-lowest shadow-md grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-6 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                {data.eyebrow}
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                {data.title}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {data.description}
              </p>
            </div>
            <div className="lg:col-span-6 flex flex-col gap-space-md justify-center">
              {data.insights.map((insight) => (
                <div key={insight.title} className="p-space-lg rounded-xl bg-surface-container-low flex items-start gap-space-md">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    {insight.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      {insight.title}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {insight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
