import { SOCIAL_LINKS } from '../../data/portfolioData';
import { Reveal } from './../Reveal';
import type{ CaseStudyWireframesData } from './../../data/caseStudies';
import { ResilientImage } from '../ResilientImage';


export function CaseStudyWireframes(data: Readonly<CaseStudyWireframesData>) {

  return (
    <section className="w-full py-space-2xl lg:py-space-3xl">
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
          {/* Wireframe 1 */}
          {data.screens.map((screen) => (
            <Reveal key={screen.number} delay={0.04}>
              <div className="h-full p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    {screen.number}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {screen.title}
                  </span>
                </div>
                <div className="h-82 rounded-xl bg-surface-container p-space-md flex flex-col justify-between">
                  <ResilientImage
                    className="w-full h-full object-contain"
                    alt={screen.image.alt}
                    fallbackLabel={screen.image.fallbackLabel}
                    src={screen.image.src}
                  />
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {screen.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-space-xl text-center">
          <a
            className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors"
            href={data.prototypeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            {data.prototypeLabel} →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
