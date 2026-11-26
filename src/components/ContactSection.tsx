import { useEffect, useRef, useState } from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export function ContactSection({ onShowToast }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    const email = SOCIAL_LINKS.email;
    let didCopy = false;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        didCopy = true;
      }
    } catch {
      didCopy = false;
    }

    if (!didCopy) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        didCopy = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch {
        didCopy = false;
      }
    }

    if (didCopy) {
      setCopied(true);
      onShowToast('Email copied to clipboard!');
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
      }, 2800);
    } else {
      onShowToast(`Email: ${email}`);
    }
  };

  return (
    <section
      className="w-full py-space-2xl lg:py-space-3xl bg-surface-container-low/60 scroll-mt-20"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Reveal className="max-w-3xl mx-auto text-center flex flex-col items-center gap-space-lg">
          <div className="inline-flex items-center gap-space-xs text-primary font-label-sm text-label-sm uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Have a project in mind or an opportunity to discuss?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Feel free to reach out. I am always open to exploring meaningful frontend engineering
            roles, design system initiatives, and technical collaborations.
          </p>

          {/* Direct Email Pill with Interactive Copy Action */}
          <div className="bg-surface-container-lowest p-2 sm:p-2.5 rounded-full shadow-sm flex items-center gap-space-sm max-w-md w-full justify-between">
            <div className="flex items-center gap-space-sm pl-space-sm sm:pl-space-md overflow-hidden min-w-0">
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                mail
              </span>
              <span
                className="font-label-md text-label-md text-on-surface truncate"
                id="email-address-text"
              >
                {SOCIAL_LINKS.email}
              </span>
            </div>
            <button
              aria-label="Copy email address"
              className="inline-flex items-center gap-1.5 bg-primary text-on-primary hover:bg-primary-container px-space-md sm:px-space-lg py-2 rounded-full font-label-sm text-label-sm transition-all shrink-0 cursor-pointer"
              id="copy-email-btn"
              type="button"
              onClick={handleCopyEmail}
            >
              <span className="material-symbols-outlined text-[16px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span id="copy-btn-text">{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* External Profile Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-space-md pt-space-sm">
            <a
              className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-on-surface hover:text-primary font-label-md text-label-md px-space-xl py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              href={SOCIAL_LINKS.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">share</span>
              <span>LinkedIn Profile</span>
            </a>
            <a
              className="inline-flex items-center gap-space-xs bg-surface-container-lowest text-on-surface hover:text-primary font-label-md text-label-md px-space-xl py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              href={SOCIAL_LINKS.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">code</span>
              <span>GitHub Profile</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
