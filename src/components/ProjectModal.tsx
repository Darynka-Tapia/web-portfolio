import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import type { ProjectItem } from '../types/portfolio';
import { ResilientImage } from './ResilientImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          aria-labelledby="project-modal-title"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-margin"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="relative h-52 sm:h-64 bg-surface-container shrink-0">
              <ResilientImage
                src={project.imageSrc}
                alt={project.imageAlt}
                fallbackLabel={project.title}
                className="w-full h-full object-cover"
              />
              <button
                aria-label="Close project details"
                type="button"
                onClick={onClose}
                className="absolute top-space-md right-space-md w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface hover:bg-surface-container-lowest flex items-center justify-center shadow-md cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
              <span className="absolute top-space-md left-space-md bg-surface-container-lowest/90 backdrop-blur-md text-on-surface font-label-sm text-label-sm px-space-sm py-1 rounded-full uppercase tracking-wider">
                {project.badgeLeft}
              </span>
            </div>

            <div className="p-space-lg sm:p-space-xl overflow-y-auto flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider font-medium">
                  {project.categoryLabel}
                </span>
                <h3
                  id="project-modal-title"
                  className="font-headline-md text-headline-md text-on-surface"
                >
                  {project.title}
                </h3>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {project.description}
              </p>

              <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  Architecture Overview
                </span>
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                  {project.architectureSummary}
                </p>
              </div>

              {project.availabilityNote && (
                <div className="p-space-md rounded-xl bg-secondary-container/40 flex items-start gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                    lock
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {project.availabilityNote}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-space-xs pt-space-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label-sm text-label-sm px-2.5 py-1 bg-surface-container text-on-surface-variant rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-end gap-space-sm pt-space-sm">
                {project.actions
                  .filter((a) => a.actionType === 'external' && a.href)
                  .map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-flex items-center gap-1.5 bg-secondary-container/60 text-on-secondary-fixed font-label-md text-label-md px-space-lg py-2 rounded-full hover:bg-secondary-container transition-colors"
                    >
                      <span>{action.label}</span>
                      <span className="material-symbols-outlined text-[16px]">{action.icon}</span>
                    </a>
                  ))}
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-space-lg py-2 rounded-full hover:bg-primary-container transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
