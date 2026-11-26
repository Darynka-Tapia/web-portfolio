import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../../data/portfolioData';
import { ResilientImage } from './../ResilientImage';
import type{ CaseStudyHeroData } from './../../data/caseStudies';

export function CaseStudyHero(data: Readonly<CaseStudyHeroData>) {
  const scrollToDeliverables = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('deliverables');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full py-space-2xl lg:py-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Hero Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-space-lg"
          >
            <div className="flex flex-wrap items-center gap-space-sm">
              <span className="px-space-md py-1 rounded-full bg-secondary-container text-primary font-label-sm text-label-sm uppercase tracking-wider">
                {data.category}
              </span>
              <span className="text-outline-variant">•</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                {data.year}
              </span>
            </div>
            <h1 className="font-display text-display-mobile md:text-display text-on-surface tracking-tight">
              {data.title}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              {data.description}
            </p>
            <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                Core Mission
              </span>
              <p className="font-body-md text-body-md text-on-surface">
                {data.mission}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a
                className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"
                href={data.prototypeUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                {data.prototypeLabel}
              </a>
              <a
                className="inline-flex items-center gap-space-xs bg-surface-container text-on-surface font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-surface-container-high transition-all"
                href="#deliverables"
                onClick={scrollToDeliverables}
              >
                <span className="material-symbols-outlined text-[18px]">menu_book</span>
                {data.researchLabel}
              </a>
            </div>
          </motion.div>
          {/* Hero App Showcase Mockup */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="w-full rounded-full bg-primary-fixed-dim/20 blur-3xl absolute inset-0 -z-10 transform scale-90" />
              <div className="relative bg-surface-container-lowest p-space-md rounded-2xl shadow-xl flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm">
                  <div className="flex items-center gap-space-xs">
                    <span className="w-3 h-3 rounded-full bg-error/70" />
                    <span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim" />
                    <span className="w-3 h-3 rounded-full bg-primary/40" />
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                    {data.previewLabel}
                  </span>
                </div>
                <div className="overflow-hidden rounded-xl bg-surface-container-low">
                  <ResilientImage
                    className="w-full h-80 object-cover"
                    alt={data.image.alt}
                    fallbackLabel={data.image.fallbackLabel}
                    src={data.image.src}
                  />
                </div>
                <div className="flex items-center justify-between text-on-surface-variant text-body-sm font-body-sm px-space-xs pt-space-xs">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      verified
                    </span>
                    {data.footerLabel}
                  </span>
                  <span>{data.durationLabel}</span>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
