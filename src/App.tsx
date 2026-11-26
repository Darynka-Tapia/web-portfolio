
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MotionConfig } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
//import { HuellitasCaseStudy } from './components/HuellitasCaseStudy';
import { CaseStudy } from './components/case-study/CaseStudy';
import { ArtAuctionCaseStudy } from './components/ArtAuctionCaseStudy';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Toast } from './components/Toast';
import { NAV_ITEMS } from './data/portfolioData';
import type { NavSectionId, PageView } from './types/portfolio';

type CaseStudyId = 'huellitas' | 'art-auction';

const CASE_STUDY_ROUTES: Record<CaseStudyId, PageView> = {
  huellitas: 'huellitas-case-study',
  'art-auction': 'art-auction-case-study',
};

function getCurrentView(): PageView {
  const hash = window.location.hash;
  const projectId = hash.match(/^#\/projects\/(.+)$/)?.[1];

  if (projectId && projectId in CASE_STUDY_ROUTES) {
    return CASE_STUDY_ROUTES[projectId as CaseStudyId];
  }

  return 'portfolio';
}

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>(getCurrentView);
  const [activeSection, setActiveSection] = useState<NavSectionId>('home');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setToastVisible(true);

    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }

    toastTimerRef.current = window.setTimeout(() => {
      setToastVisible(false);
    }, 2800);
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

  // Sync browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentView(getCurrentView());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Active section scroll spy via IntersectionObserver
  useEffect(() => {
    if (currentView !== 'portfolio') return;

    const sectionElements = NAV_ITEMS.map((item) => ({
      navId: item.id,
      el: document.getElementById(item.sectionId),
    })).filter(
      (item): item is { navId: NavSectionId; el: HTMLElement } =>
        item.el !== null,
    );

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const matched = sectionElements.find(
            (section) => section.el === visible[0].target,
          );

          if (matched) {
            setActiveSection(matched.navId);
          }
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sectionElements.forEach(({ el }) => observer.observe(el));

    const handleScrollBottom = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;

      if (nearBottom) {
        setActiveSection('contact');
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScrollBottom, {
      passive: true,
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollBottom);
    };
  }, [currentView]);

  // Navigate to portfolio sections
  const scrollToSection = useCallback(
    (sectionNavId: NavSectionId) => {
      const item = NAV_ITEMS.find((n) => n.id === sectionNavId);
      if (!item) return;

      setActiveSection(sectionNavId);

      const performScroll = () => {
        if (sectionNavId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }

        const target = document.getElementById(item.sectionId);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      };

      if (currentView !== 'portfolio') {
        window.history.pushState(null, '', `#${item.sectionId}`);
        setCurrentView('portfolio');
        window.setTimeout(performScroll, 60);
      } else {
        performScroll();
      }
    },
    [currentView],
  );

  // Open any case study
  const openCaseStudy = useCallback((projectId: CaseStudyId) => {
    const route = `#/projects/${projectId}`;

    if (window.location.hash !== route) {
      window.history.pushState(null, '', route);
    }

    setCurrentView(CASE_STUDY_ROUTES[projectId]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Return to projects section
  const handleBackToProjects = useCallback(() => {
    window.history.pushState(null, '', '#projects');
    setCurrentView('portfolio');
    setActiveSection('projects');

    window.setTimeout(() => {
      const target = document.getElementById('projects');

      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 60);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-background text-on-surface">
        <Header
          activeSection={activeSection}
          currentView={currentView}
          onNavigate={scrollToSection}
        />

        <main className="w-full pt-20 bg-background flex-1">
          {currentView === 'portfolio' ? (
            <div className="flex flex-col w-full text-on-surface">
              <HeroSection onNavigate={scrollToSection} />
              <AboutSection />

              <ProjectsSection onOpenCaseStudy={openCaseStudy} />

              <ExperienceSection />
              <SkillsSection />
              <ContactSection onShowToast={showToast} />
            </div>
          ) : currentView === 'huellitas-case-study' ? (
            <CaseStudy
              onBackToProjects={handleBackToProjects}
              onContact={() => scrollToSection('contact')}
              caseStudyId='huellitas-case-study'
            />
          ) : currentView === 'art-auction-case-study' ? (
            <CaseStudy
              onBackToProjects={handleBackToProjects}
              onContact={() => scrollToSection('contact')}
              caseStudyId='art-auction-case-study'
            />
          ) : null}
        </main>

        <Footer onNavigate={scrollToSection} />

        <Toast visible={toastVisible} message={toastMessage} />
      </div>
    </MotionConfig>
  );
}
