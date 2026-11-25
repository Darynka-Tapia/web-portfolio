import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';
import type { NavSectionId, PageView } from '../types/portfolio';

interface HeaderProps {
  activeSection: NavSectionId;
  currentView: PageView;
  onNavigate: (sectionId: NavSectionId) => void;
}

export function Header({ activeSection, currentView, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleLinkClick = (sectionId: NavSectionId, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  const resolvedActive: NavSectionId =
    currentView === 'huellitas-case-study' ? 'projects' : activeSection;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
        <a
          className="flex flex-col group text-left shrink-0"
          data-path="home"
          href="#hero"
          onClick={(e) => handleLinkClick('home', e)}
        >
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
            Abril Tapia
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
            Frontend Software Engineer
          </span>
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-space-lg"
          data-active-classes="text-primary font-label-md"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = resolvedActive === item.id;
            return (
              <a
                key={item.id}
                aria-current={isActive ? 'page' : undefined}
                className={`relative transition-colors py-space-xs font-label-md text-label-md whitespace-nowrap ${
                  isActive
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
                data-path={item.id}
                href={`#${item.sectionId}`}
                onClick={(e) => handleLinkClick(item.id, e)}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
          <a
            className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all whitespace-nowrap"
            data-path="contact"
            href="#contact"
            onClick={(e) => handleLinkClick('contact', e)}
          >
            Let's Talk
          </a>
          <button
            aria-label={mobileMenuOpen ? 'Close Mobile Menu' : 'Open Mobile Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            className="lg:hidden min-w-[44px] min-h-[44px] p-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full flex items-center justify-center transition-colors cursor-pointer"
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-20 bg-on-surface/20 backdrop-blur-[2px] lg:hidden z-40"
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile Navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden relative z-50 bg-surface-container-lowest/98 backdrop-blur-xl border-t border-outline-variant/30 shadow-lg px-margin md:px-margin-tablet py-space-lg flex flex-col gap-space-xs"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = resolvedActive === item.id;
                return (
                  <a
                    key={item.id}
                    aria-current={isActive ? 'page' : undefined}
                    href={`#${item.sectionId}`}
                    onClick={(e) => handleLinkClick(item.id, e)}
                    className={`flex items-center justify-between px-space-md py-3 rounded-xl font-label-md text-label-md transition-colors ${
                      isActive
                        ? 'bg-secondary-container/70 text-primary font-semibold'
                        : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="material-symbols-outlined text-[18px] text-primary">
                        arrow_forward
                      </span>
                    )}
                  </a>
                );
              })}

              <div className="pt-space-sm mt-space-xs border-t border-outline-variant/30 sm:hidden">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick('contact', e)}
                  className="w-full inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-3 rounded-full hover:bg-primary-container transition-all"
                >
                  <span>Let&apos;s Talk</span>
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
