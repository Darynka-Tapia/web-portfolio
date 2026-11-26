import { SOCIAL_LINKS } from '../../data/portfolioData';
import { ResilientImage } from './../ResilientImage';
import { Reveal } from './../Reveal';
import type{ CaseStudyShowcaseData } from './../../data/caseStudies';

export function CaseStudyShowcase(data: Readonly<CaseStudyShowcaseData>) {

  return (
    <section className="w-full py-space-2xl lg:py-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
          <div className="flex flex-col gap-space-xs text-left">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              {data.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              {data.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              {data.description}
            </p>
          </div>
          <a
            className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all w-fit shrink-0"
            href={data.prototypeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
            {data.prototypeLabel}
          </a>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {data.screens.map((screen, idx) => (
            <Reveal key={screen.title} delay={idx * 0.08}>
              <div className="flex flex-col gap-space-sm">
                <div className="rounded-2xl overflow-hidden bg-white shadow-md group">
                  <ResilientImage
                    className="w-full h-92 object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    alt={screen.alt}
                    fallbackLabel={screen.title}
                    src={screen.src}
                  />
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  {screen.title}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">{screen.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
