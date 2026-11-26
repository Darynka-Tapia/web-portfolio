import { Reveal } from './../Reveal';
import { ResilientImage } from './../ResilientImage';
import type{ CaseStudyPersonasData } from './../../data/caseStudies';


export function CaseStudyPersonas(data: Readonly<CaseStudyPersonasData>) {

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop">
          {/* Persona 1: Sofia */}
          {data.items.map((persona ) => (
            <Reveal key={persona.name} delay={0.06}>
              <div className="h-full p-space-xl rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-lg">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-surface-container">
                      <ResilientImage
                        className="w-full h-full object-cover"
                        alt={persona.image.alt}
                        fallbackLabel={persona.image.fallbackLabel}
                        src={persona.image.src}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-md text-headline-md text-on-surface">
                        {persona.name}
                      </span>
                      <span className="font-label-md text-label-md text-primary">
                        {persona.role}
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <p className="font-body-sm text-body-sm italic text-on-surface">
                      “{persona.quote}”
                    </p>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Core Frustrations
                    </span>
                    <ul className="flex flex-col gap-space-xs text-body-sm font-body-sm text-on-surface">
                      {persona.frustrations.map((frustration ) => (
                        <li key={frustration} className="flex items-start gap-space-xs">
                          <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                            close
                          </span>
                          {frustration}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-xs">
                  <span className="px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase">
                    Goal: {persona.goal}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {persona.context}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
