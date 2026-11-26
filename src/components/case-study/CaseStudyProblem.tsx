import { Reveal } from './../Reveal';
import type{ CaseStudyProblemData} from './../../data/caseStudies';

export function CaseStudyProblem(data: Readonly<CaseStudyProblemData>) {
  return (
    <section className="w-full py-space-2xl lg:py-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          <Reveal className="lg:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              {data.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              {data.title}
            </h2>
          </Reveal>
          <div className="lg:col-span-8 flex flex-col gap-space-xl">
            <Reveal delay={0.06}>
              <div className="p-space-xl rounded-xl bg-surface-container-low shadow-sm">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                  {data.statementTitle}
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {data.statement}
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {data.cards.map((card, idx) => (
                <Reveal key={card.title} delay={0.08 + idx * 0.06}>
                  <div className="h-full p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                    <span className="material-symbols-outlined text-primary text-[28px]">
                      {card.icon}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      {card.title}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {card.text}
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
