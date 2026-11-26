import { Reveal } from './../Reveal';
import type{ CaseStudyIdeationData } from './../../data/caseStudies';
import { ResilientImage } from './../ResilientImage';

export function CaseStudyIdeation(data: Readonly<CaseStudyIdeationData>) {

  return (
    <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          <Reveal className="lg:col-span-5 flex flex-col gap-space-md">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              {data.eyebrow}
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              {data.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {data.description}
            </p>
            <div className="p-space-lg rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs shadow-sm">
              <span className="font-headline-sm text-headline-sm text-on-surface">
                {data.decisionTitle}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {data.decision}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center justify-between gap-space-xs">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Rapid Ideation Artifacts
                </span>
                <span className="font-label-sm text-label-sm text-primary">
                  8 Sketches in 8 Minutes
                </span>
              </div>
              <div className=" gap-space-sm">
                <ResilientImage
                  className="w-full h-full object-cover"
                  alt={data.image.alt}
                  fallbackLabel={data.image.fallbackLabel}
                  src={data.image.src}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
