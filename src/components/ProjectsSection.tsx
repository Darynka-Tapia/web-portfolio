import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { PROJECT_FILTERS, PROJECTS, SOCIAL_LINKS } from '../data/portfolioData';
import type { ProjectCategory, ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

interface ProjectsSectionProps {
  onOpenCaseStudy: (projectId: 'huellitas' | 'art-auction') => void;
}

export function ProjectsSection({ onOpenCaseStudy }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((project) =>
    activeFilter === 'all' ? true : project.categories.includes(activeFilter),
  );

  return (
    <section className="w-full py-space-2xl lg:py-space-3xl scroll-mt-20" id="projects">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        {/* Section Header with Category Filter Controls */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-2xl">
          <div className="flex flex-col gap-space-xs">
            <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Featured Case Studies &amp; Codebases</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
              Selected Projects
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              A curated collection of web applications, reusable design architectures, and
              open-source tooling built with precision.
            </p>
          </div>

          {/* Filter Pills Bar */}
          <div
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-space-xs bg-surface-container p-1 rounded-full w-fit max-w-full"
            role="group"
          >
            {PROJECT_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  aria-pressed={isActive}
                  className={`px-space-md py-1.5 rounded-full font-label-sm text-label-sm transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-primary text-on-primary shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                  data-filter={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop items-stretch"
          id="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = Boolean(project.featured);

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  viewport={{ once: true, amount: 0.08 }}
                  transition={{
                    duration: 0.42,
                    delay: Math.min(index * 0.05, 0.25),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`project-card flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${
                    isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                  data-category={project.categories.join(' ')}
                >
                  <div
                    className={`relative w-full bg-surface-container overflow-hidden ${
                      isFeatured ? 'h-64 sm:h-80' : 'h-48'
                    }`}
                  >
                    <ResilientImage
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fallbackLabel={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-space-md left-space-md flex flex-wrap items-center gap-space-xs">
                      {isFeatured ? (
                        <>
                          <span className="bg-primary text-on-primary font-label-sm text-label-sm px-space-md py-1 rounded-full uppercase tracking-wider font-semibold shadow-sm">
                            {project.badgeLeft}
                          </span>
                          {project.badgeSecondary && (
                            <span className="bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full">
                              {project.badgeSecondary}
                            </span>
                          )}
                        </>
                      ) : (
                        <span className="bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full uppercase tracking-wider">
                          {project.badgeLeft}
                        </span>
                      )}
                    </div>
                  </div>

                  <div
                    className={`${
                      isFeatured ? 'p-space-lg sm:p-space-xl gap-space-lg' : 'p-space-lg gap-space-md'
                    } flex flex-col justify-between flex-grow`}
                  >
                    <div className="flex flex-col gap-space-xs">
                      {project.year ? (
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-medium">
                            {project.categoryLabel}
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant tabular-nums">
                            {project.year}
                          </span>
                        </div>
                      ) : (
                        <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-medium">
                          {project.categoryLabel}
                        </span>
                      )}

                      <h3
                        className={`${
                          isFeatured
                            ? 'font-headline-md text-headline-md'
                            : 'font-headline-sm text-headline-sm'
                        } text-on-surface group-hover:text-primary transition-colors`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={
                          isFeatured
                            ? 'font-body-md text-body-md text-on-surface-variant mt-space-xs'
                            : 'font-body-sm text-body-sm text-on-surface-variant line-clamp-3'
                        }
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-col gap-space-md">
                      <div className="flex flex-wrap gap-space-xs">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`font-label-sm text-label-sm rounded-full ${
                              isFeatured
                                ? 'px-2.5 py-1 bg-secondary-container/60 text-on-secondary-container'
                                : 'px-2 py-0.5 bg-surface-container text-on-surface-variant'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                        {project.actions.map((action) => {
                          if (action.actionType === 'case-study' && action.page) {
                            const page = action.page;
                            return (
                              <button
                                key={action.label}
                                type="button"
                                onClick={() => onOpenCaseStudy(page)}
                                className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-2.5 rounded-full hover:bg-primary-container transition-all cursor-pointer"
                              >
                                <span>{action.label}</span>
                                <span className="material-symbols-outlined text-[18px]">
                                  {action.icon}
                                </span>
                              </button>
                            );
                          }
                          if (action.actionType === 'external-website' && action.href) {
                            return (
                              <a
                                key={action.label}
                                href={action.href}
                                rel="noopener noreferrer"
                                target="_blank"
                                className={
                                  action.variant === 'secondary'
                                    ? 'inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md py-1.5 px-space-md rounded-full bg-secondary-container/40 hover:bg-secondary-container/70 transition-colors'
                                    : 'inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-1.5 rounded-full hover:bg-primary-container transition-all cursor-pointer'
                                }
                              >
                                <span>{action.label}</span>
                                <span className="material-symbols-outlined text-[12px]">
                                  {action.icon}
                                </span>
                              </a>
                            );
                          }


                          if (action.actionType === 'external' && action.href) {
                            return (
                              <a
                                key={action.label}
                                href={action.href}
                                rel="noopener noreferrer"
                                target="_blank"
                                className={
                                  action.variant === 'secondary'
                                    ? 'inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md py-1.5 px-space-md rounded-full bg-secondary-container/40 hover:bg-secondary-container/70 transition-colors'
                                    : 'inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-1.5 px-space-sm rounded-full transition-colors'
                                }
                              >
                                <span>{action.label}</span>
                                <span className="material-symbols-outlined text-[16px]">
                                  {action.icon}
                                </span>
                              </a>
                            );
                          }

                          return (
                            <button
                              key={action.label}
                              type="button"
                              onClick={() => setSelectedProject(project)}
                              className={
                                action.variant === 'secondary'
                                  ? 'inline-flex items-center gap-1 text-primary hover:text-primary-container font-label-md text-label-md py-1.5 px-space-md rounded-full bg-secondary-container/40 hover:bg-secondary-container/70 transition-colors cursor-pointer'
                                  : 'inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-1.5 px-space-sm rounded-full transition-colors cursor-pointer'
                              }
                            >
                              <span>{action.label}</span>
                              <span className="material-symbols-outlined text-[16px]">
                                {action.icon}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Prominent GitHub Bottom CTA */}
        <Reveal delay={0.1} className="mt-space-2xl">
          <div className="p-space-xl bg-surface-container-low rounded-xl flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
            <div className="flex flex-col gap-space-xs">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Looking for experimental repositories & source code?
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Continuous contributions, architectural spikes, and documentation on GitHub.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-space-sm bg-on-surface text-on-primary font-label-md text-label-md px-space-xl py-3 rounded-full hover:bg-inverse-surface transition-all shadow-sm shrink-0"
              href={SOCIAL_LINKS.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
              <span>Explore All My Projects on GitHub</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </Reveal>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
