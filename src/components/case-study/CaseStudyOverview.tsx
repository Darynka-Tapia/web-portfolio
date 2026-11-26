import { Reveal } from './../Reveal';
import type{ CaseStudyOverviewData } from './../../data/caseStudies';


export function CaseStudyOverview(data: Readonly<CaseStudyOverviewData>) {

  return (
    <section className="w-full bg-surface-container-low py-space-2xl scroll-mt-20" id="deliverables">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
          {data.meta.map((meta, idx) => (
            <Reveal key={meta.kicker} delay={idx * 0.06}>
              <div className="h-full flex flex-col gap-space-xs p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  {meta.kicker}
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {meta.value}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{meta.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.12}>
          <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-md">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                UX Design Process
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface">
                {data.artifactsTitle}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-xs">
              {data.artifacts.map((artifact) => (
                <span
                  key={artifact}
                  className="px-space-md py-1 bg-surface-container-lowest text-on-surface rounded-full font-label-sm text-label-sm"
                >
                  {artifact}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
