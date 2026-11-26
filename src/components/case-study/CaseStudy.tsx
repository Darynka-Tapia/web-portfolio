import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../../data/portfolioData';
import { ResilientImage } from './../ResilientImage';

import { CASE_STUDIES, getCaseStudyById, type CaseStudyId } from './../../data/caseStudies';

import { CaseStudyHero } from './CaseStudyHero';
import { CaseStudyOverview } from './CaseStudyOverview';
import { CaseStudyProblem } from './CaseStudyProblem';
import { CaseStudyResearch } from './CaseStudyResearch';
import { CaseStudyPersonas } from './CaseStudyPersonas';
import { CaseStudyIdeation } from './CaseStudyIdeation';
import { CaseStudyWireframes } from './CaseStudyWireframes';
import { CaseStudyFindings } from './CaseStudyFindings';
import { CaseStudyShowcase } from './CaseStudyShowcase';
import { CaseStudyAccessibility } from './CaseStudyAccessibility';
import { CaseStudyConclusions } from './CaseStudyConclusions';
import { CaseStudyRoadmap } from './CaseStudyRoadmap';

interface CaseStudyProps {
  onBackToProjects: () => void;
  onContact: () => void;
  caseStudyId: CaseStudyId
}

export function CaseStudy({ onBackToProjects, onContact, caseStudyId }: CaseStudyProps) {
  const caseStudyData = getCaseStudyById(caseStudyId);
  if (!caseStudyData) return null;

  return (
    <div className="flex flex-col w-full">
      {/* Sub-header Breadcrumb Bar */}
      <section className="w-full bg-surface-container-low py-space-md">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-wrap items-center justify-between gap-space-sm">
          <button
            type="button"
            onClick={onBackToProjects}
            className="inline-flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Projects
          </button>
          <span className="inline-flex items-center px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider">
            {caseStudyData.slug}
          </span>
        </div>
      </section>

      <CaseStudyHero            {...caseStudyData.hero}/>
      <CaseStudyOverview        {...caseStudyData.overview}/>
      <CaseStudyProblem         {...caseStudyData.problem}/>
      <CaseStudyResearch        {...caseStudyData.research}/>
      <CaseStudyPersonas        {...caseStudyData.personas}/>
      <CaseStudyIdeation        {...caseStudyData.ideation}/>
      <CaseStudyWireframes      {...caseStudyData.wireframes}/>
      <CaseStudyFindings        {...caseStudyData.usability}/>
      <CaseStudyShowcase        {...caseStudyData.showcase}/>
      <CaseStudyAccessibility   {...caseStudyData.accessibility}/>
      <CaseStudyConclusions     {...caseStudyData.conclusions}/>
      <CaseStudyRoadmap         {...caseStudyData.roadmap }/>
      {/* Project Navigation & Bottom CTA */}
      <section className="w-full py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-lg">
          <button
            type="button"
            onClick={onBackToProjects}
            className="inline-flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to All Projects
          </button>
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <a
              className="inline-flex items-center gap-space-xs bg-secondary-container text-on-secondary-fixed font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-secondary-fixed-dim transition-all"
              href={caseStudyData.footer.prototypeUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              Figma High-Fi
            </a>
            <button
              type="button"
              onClick={onContact}
              className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer"
            >
              Discuss this Project
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
