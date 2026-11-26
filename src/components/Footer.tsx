import { SOCIAL_LINKS } from '../data/portfolioData';
import type { NavSectionId } from '../types/portfolio';

interface FooterProps {
  onNavigate: (sectionId: NavSectionId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container-low shadow-[0_-1px_6px_rgba(0,0,0,0.02)] mt-space-2xl lg:mt-space-3xl">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-xl">
        <div className="flex flex-col gap-space-xs">
          <span className="font-headline-sm text-headline-sm text-on-surface">Abril Tapia</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Frontend Software Engineer — Building thoughtful, responsive, and reliable web experiences.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-space-lg">
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            href={SOCIAL_LINKS.linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            href={SOCIAL_LINKS.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            data-path="contact"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
          >
            Email
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pb-space-xl text-left">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          © Abril Tapia. Designed and developed with care.
        </p>
      </div>
    </footer>
  );
}
