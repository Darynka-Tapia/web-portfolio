import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';
import { Reveal } from './Reveal';

interface HuellitasCaseStudyProps {
  onBackToProjects: () => void;
  onContact: () => void;
}

export function HuellitasCaseStudy({ onBackToProjects, onContact }: HuellitasCaseStudyProps) {
  const scrollToDeliverables = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('deliverables');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            /projects/huellitas
          </span>
        </div>
      </section>

      {/* Section 1: Hero & Project Introduction */}
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
                  Google UX Capstone
                </span>
                <span className="text-outline-variant">•</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Case Study 2024
                </span>
              </div>
              <h1 className="font-display text-display-mobile md:text-display text-on-surface tracking-tight">
                Huellitas: Reconnecting Lost Pets with Their Families &amp; Empowering Rescuers
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                A collaborative community-driven mobile and web platform facilitating pet recovery,
                lost-and-found matching, and animal adoption through friction-free reporting.
              </p>
              <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  Core Mission
                </span>
                <p className="font-body-md text-body-md text-on-surface">
                  Fostering solidarity and neighborhood connection by linking pet owners with local
                  rescuers to collaborate in finding lost pets and facilitating compassionate
                  adoptions without digital barriers.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all shadow-sm"
                  href={SOCIAL_LINKS.huellitasHiFiFigma}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                  Interactive Prototype
                </a>
                <a
                  className="inline-flex items-center gap-space-xs bg-surface-container text-on-surface font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-surface-container-high transition-all"
                  href="#deliverables"
                  onClick={scrollToDeliverables}
                >
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  View Research Process
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
                    Mobile Preview (iOS/Android)
                  </span>
                </div>
                <div className="overflow-hidden rounded-xl bg-surface-container-low">
                  <ResilientImage
                    className="w-full h-80 object-cover"
                    alt="High fidelity mobile application mockup showing the Huellitas home screen in Spanish and English with cards of lost pets, urgent alert badges in deep violet, direct contact buttons for pet finders, warm ivory background, clean typography and high contrast cards"
                    fallbackLabel="Huellitas Mobile Preview"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKg3MCddjvcbJlIPmxZ11mGSGXLwjsLL44xKu5jzhMKXiGJs1UO3LWsW80zqgFFzPNashQfU0KDFKELurlLYBnvYInughO-b0w1MARRdypvNe5rO9K3BIEw635DirPSTMd4J8DCOjKy3ljIEADOXrBxI0MZ2N_5KTOajXiqkArCKs7hAdrpjFewjGsiJOgJ-x1afsJYOKsKJ0gM5NquR6UR-3mFVa9WBnCSW2id0E"
                  />
                </div>
                <div className="flex items-center justify-between text-on-surface-variant text-body-sm font-body-sm px-space-xs pt-space-xs">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      verified
                    </span>
                    Verified Community Network
                  </span>
                  <span>8-Week Sprint</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Project Overview Meta Grid */}
      <section className="w-full bg-surface-container-low py-space-2xl scroll-mt-20" id="deliverables">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
            {[
              {
                kicker: 'Role',
                value: 'UX/UI Designer & Frontend Architect',
                sub: 'Google UX Design Professional Certificate',
              },
              {
                kicker: 'Format & Scope',
                value: 'Mobile App & Web',
                sub: 'Cross-platform responsive design',
              },
              {
                kicker: 'Timeline',
                value: '8 Weeks',
                sub: 'Iterative sprints & usability testing',
              },
              {
                kicker: 'Tooling',
                value: 'Figma & FigJam',
                sub: 'Miro, WCAG Audit, Google Workspace',
              },
            ].map((meta, idx) => (
              <Reveal key={meta.kicker} delay={idx * 0.06}>
                <div className="h-full flex flex-col gap-space-xs p-space-lg rounded-xl bg-surface-container-lowest shadow-sm">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    {meta.kicker}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    {meta.value}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{meta.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-space-xl p-space-lg rounded-xl bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Artifacts Delivered
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Comprehensive End-to-End UX Deliverables
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-space-xs">
                {[
                  'User Research',
                  'User Personas',
                  'Crazy 8s Sketches',
                  'Digital Wireframes',
                  'Interactive Prototypes',
                  'WCAG 2.1 Audit',
                ].map((artifact) => (
                  <span
                    key={artifact}
                    className="px-space-md py-1 bg-surface-container-lowest text-on-surface rounded-full font-label-sm text-label-sm"
                  >
                    {artifact}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 3: The Problem */}
      <section className="w-full py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <Reveal className="lg:col-span-4 flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                01 / Challenge
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                The Emotional &amp; Logistical Crisis of Lost Pets
              </h2>
            </Reveal>

            <div className="lg:col-span-8 flex flex-col gap-space-xl">
              <Reveal delay={0.06}>
                <div className="p-space-xl rounded-xl bg-surface-container-low shadow-sm">
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">
                    Problem Statement
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    Pet owners facing the loss of their animals experience deep distress and struggle
                    to reach their local community quickly. Rescuers and neighbors who find
                    wandering animals lack a centralized, accessible way to locate and contact
                    anxious owners, leading to unnecessary shelter intake and prolonged family
                    separation.
                  </p>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {[
                  {
                    icon: 'family_restroom',
                    title: 'Distressed Families',
                    text: 'Need immediate peace of mind and urgent neighborhood visibility before the pet wanders outside safe perimeters.',
                  },
                  {
                    icon: 'volunteer_activism',
                    title: 'Active Rescuers',
                    text: 'Struggle with scattered social media posts and heavy account registration requirements when encountering lost animals.',
                  },
                  {
                    icon: 'visibility',
                    title: 'High-Stress Usability',
                    text: 'High-contrast readability and direct phone triggers are essential during chaotic outdoor search expeditions.',
                  },
                ].map((card, idx) => (
                  <Reveal key={card.title} delay={0.08 + idx * 0.06}>
                    <div className="h-full p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[28px]">
                        {card.icon}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">
                        {card.title}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {card.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: User Research & Methodology */}
      <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
            <Reveal className="lg:col-span-4 flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                02 / Investigation
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Empathetic User Research
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                A comprehensive usability investigation to expose friction points when publishing
                and retrieving critical pet alert bulletins under stressful conditions.
              </p>
            </Reveal>

            <div className="lg:col-span-8 flex flex-col gap-space-lg">
              <Reveal delay={0.06}>
                <div className="p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    Methodology &amp; Demographics
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                    <div>
                      <span className="font-display text-display-mobile md:text-display text-primary tabular-nums">
                        5
                      </span>
                      <p className="font-headline-sm text-headline-sm text-on-surface">
                        Participants
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Diverse demographics across ages &amp; digital literacy levels
                      </p>
                    </div>
                    <div>
                      <span className="font-display text-display-mobile md:text-display text-primary tabular-nums">
                        100%
                      </span>
                      <p className="font-headline-sm text-headline-sm text-on-surface">
                        Remote Moderated
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Screen-recorded task flows with live voice debriefs
                      </p>
                    </div>
                    <div>
                      <span className="font-display text-display-mobile md:text-display text-primary">
                        WCAG
                      </span>
                      <p className="font-headline-sm text-headline-sm text-on-surface">
                        Accessibility Focus
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Included participants with visual impairments
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                <Reveal delay={0.1}>
                  <div className="h-full p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[20px]">no_accounts</span>
                      <span className="font-label-md text-label-md">
                        Zero Mandatory Onboarding
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      Users under acute stress abandon apps that force login screens prior to
                      letting them broadcast or view missing pet coordinates.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.14}>
                  <div className="h-full p-space-lg rounded-xl bg-surface-container flex flex-col gap-space-xs">
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[20px]">
                        brightness_medium
                      </span>
                      <span className="font-label-md text-label-md">
                        Outdoor Sunlight Contrast
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface">
                      Search teams scan phones under direct sunlight; small grey fonts fail
                      completely. Bold badges and high-contrast chips are essential.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: User Personas */}
      <section className="w-full py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="flex flex-col gap-space-xs mb-space-2xl text-left">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              03 / Human Context
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Archetypal User Personas
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Synthesized from qualitative interviews, these profiles represent both sides of the
              community rescue dynamic.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter-desktop">
            {/* Persona 1: Sofia */}
            <Reveal delay={0.06}>
              <div className="h-full p-space-xl rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-lg">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-surface-container">
                      <ResilientImage
                        className="w-full h-full object-cover"
                        alt="Portrait photo of Sofia Martinez, a warm graphic designer and mother with thoughtful expression against a soft studio backdrop, natural lighting, serene atmosphere"
                        fallbackLabel="Sofía Martínez"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1y198KDuDAC2qO71o5gIFlY6cl3XSrciXCSEFWlg3Sir214H4cnnn_p8sGSL7LegrKuJVLUoNAnbNKgh3ZAc1IB5k3ywi0ceW2h-Pf8-dHgtyQ0fn-mRHKwd1ypIM0V1y_OWJYpSluxJWZT-WkGZIRhm9HeBFOvJm0FXcp-pVe_bq29KAhJ3NAQwjnH1UGGmZacqURh3aWiLPbp7RpX0YQdpkcpbeQ6pM7UOoV0g"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-md text-headline-md text-on-surface">
                        Sofía Martínez
                      </span>
                      <span className="font-label-md text-label-md text-primary">
                        Mother &amp; Remote Graphic Designer
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <p className="font-body-sm text-body-sm italic text-on-surface">
                      “I need to connect with my neighborhood community swiftly to find our lost dog,
                      bringing peace of mind and joy back to my children.”
                    </p>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Core Frustrations
                    </span>
                    <ul className="flex flex-col gap-space-xs text-body-sm font-body-sm text-on-surface">
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                          close
                        </span>
                        Social media posts get buried under algorithms within minutes.
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                          close
                        </span>
                        Lack of standardized, easy-to-print flyers with clear contact details.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-xs">
                  <span className="px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase">
                    Goal: Fast Pet Recovery
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Urban Resident
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Persona 2: Carlos */}
            <Reveal delay={0.12}>
              <div className="h-full p-space-xl rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between gap-space-lg">
                <div className="flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-md">
                    <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 bg-surface-container">
                      <ResilientImage
                        className="w-full h-full object-cover"
                        alt="Portrait photo of Carlos Gomez, an athletic sales manager in running attire outdoors in a city park at dawn, authentic candid photo with soft morning sunlight"
                        fallbackLabel="Carlos Gómez"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWhA7t8ut8kFK4neHTueQJ_YhdufbxiLncWq-L5kJXwBVLVz8nFjRIFHphdPwjRwzaj81sRGlSXu4cUPyyrNQZgRznnUGz7c_EOKqbLOMX6umZxuAtqxNDAj_tU7NbjOAVOJ_YMRA8RciovZu6-yT6v4WSIfgcjln7pZ9EAlKr3lECfbLQ7FqHeLCMm7o_YVJpVdjABMek_AJPPI_R-2kaPj9aS5YQV93uq9NOClo"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-md text-headline-md text-on-surface">
                        Carlos Gómez
                      </span>
                      <span className="font-label-md text-label-md text-primary">
                        Sales Manager &amp; Morning Runner
                      </span>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low">
                    <p className="font-body-sm text-body-sm italic text-on-surface">
                      “I found an abandoned wandering dog on my morning jog. I need a quick way to
                      find the owner before clocking into work so the pup stays safe.”
                    </p>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      Core Frustrations
                    </span>
                    <ul className="flex flex-col gap-space-xs text-body-sm font-body-sm text-on-surface">
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                          close
                        </span>
                        Forced account creation creates friction when time is limited before work.
                      </li>
                      <li className="flex items-start gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                          close
                        </span>
                        No standardized phone/WhatsApp quick trigger to call frantic pet parents.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-xs">
                  <span className="px-space-md py-1 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase">
                    Goal: Instant Contact
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Neighborhood Good Samaritan
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 6: Ideation & Crazy 8s */}
      <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
            <Reveal className="lg:col-span-5 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                04 / Divergence
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Crazy Eights &amp; Strategic Pivot
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                To rapidly brainstorm alternative layouts, I ran multiple Crazy 8s sketching
                iterations exploring how to display high-priority actions without cognitive
                overload.
              </p>
              <div className="p-space-lg rounded-xl bg-surface-container-lowest flex flex-col gap-space-xs shadow-sm">
                <span className="font-headline-sm text-headline-sm text-on-surface">
                  Key Design Decision
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  The user&apos;s primary intent is unambiguous:{' '}
                  <strong>Find, Return, or Adopt</strong>. I chose to surface these three primary
                  action buttons front-and-center rather than gating the experience behind
                  onboarding screens or authentication walls.
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
                  {[
                    { icon: 'search', label: '1. Instant Feed' },
                    { icon: 'add_a_photo', label: '2. Photo Snapper' },
                    { icon: 'pin_drop', label: '3. Geo Proximity' },
                    { icon: 'call', label: '4. 1-Tap WhatsApp' },
                    { icon: 'translate', label: '5. Dual Language' },
                    { icon: 'pets', label: '6. Breed Specs' },
                    { icon: 'share', label: '7. Printable Flyer' },
                    { icon: 'volunteer_activism', label: '8. Adopt Route' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-space-md rounded-lg bg-surface-container-low flex flex-col items-center justify-center text-center gap-space-xs h-36"
                    >
                      <span className="material-symbols-outlined text-primary text-[24px]">
                        {item.icon}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 7: Digital Wireframes & Architecture */}
      <section className="w-full py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="flex flex-col gap-space-xs mb-space-2xl text-left">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              05 / Structure
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Digital Wireframes &amp; Low-Fi Prototyping
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Translating rough pen-and-paper concepts into structured Figma wireframes, tested
              early to discover architectural gaps before styling.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Wireframe 1 */}
            <Reveal delay={0.04}>
              <div className="h-full p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    Screen 01
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Feed &amp; Direct CTA
                  </span>
                </div>
                <div className="h-64 rounded-xl bg-surface-container p-space-md flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="w-20 h-4 bg-outline-variant/60 rounded" />
                    <div className="w-8 h-8 rounded-full bg-outline-variant/60" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 bg-primary/20 rounded" />
                    <div className="h-10 bg-secondary-container rounded" />
                    <div className="h-10 bg-surface-container-highest rounded" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-16 bg-surface-container-lowest rounded p-2 flex gap-2">
                      <div className="w-12 h-12 bg-outline-variant/40 rounded" />
                      <div className="flex-1 space-y-1">
                        <div className="w-24 h-3 bg-outline-variant/60 rounded" />
                        <div className="w-32 h-2 bg-outline-variant/40 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Landing hub immediately giving users access to report missing animals or report
                  found ones without registering.
                </p>
              </div>
            </Reveal>

            {/* Wireframe 2 */}
            <Reveal delay={0.1}>
              <div className="h-full p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    Screen 02
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Post Creation Modal
                  </span>
                </div>
                <div className="h-64 rounded-xl bg-surface-container p-space-md flex flex-col justify-between">
                  <div className="w-28 h-4 bg-outline-variant/60 rounded" />
                  <div className="h-20 bg-surface-container-highest rounded flex items-center justify-center text-outline text-body-sm">
                    <span className="material-symbols-outlined">image</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-surface-container-lowest rounded" />
                    <div className="h-4 bg-surface-container-lowest rounded w-3/4" />
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Simplified multi-step form to collect essential traits: pet name, breed, last seen
                  coordinates, and owner telephone.
                </p>
              </div>
            </Reveal>

            {/* Wireframe 3 */}
            <Reveal delay={0.16}>
              <div className="h-full p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                    Screen 03
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Pet Detail &amp; Call Action
                  </span>
                </div>
                <div className="h-64 rounded-xl bg-surface-container p-space-md flex flex-col justify-between">
                  <div className="h-28 bg-outline-variant/40 rounded" />
                  <div className="space-y-1">
                    <div className="w-24 h-4 bg-outline-variant/80 rounded" />
                    <div className="w-40 h-2 bg-outline-variant/40 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 bg-primary/40 rounded" />
                    <div className="h-8 flex-1 bg-secondary-container rounded" />
                  </div>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Detail page designed with high readability and instant tap-to-call or
                  tap-to-WhatsApp actions for spontaneous rescuers.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mt-space-xl text-center">
            <a
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:text-primary-container transition-colors"
              href={SOCIAL_LINKS.huellitasLowFiFigma}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              Explore Low-Fidelity Figma Prototype →
            </a>
          </Reveal>
        </div>
      </section>

      {/* Section 8: Usability Testing & Findings */}
      <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="flex flex-col gap-space-xs mb-space-2xl text-left">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              06 / Evaluation
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Usability Testing &amp; 3 Core Findings
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Moderated sessions with 5 participants revealed critical oversights in the publication
              flow that hindered effective rescue communication.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                num: '01',
                title: 'Missing Name Field',
                desc: "The initial contact info form collected phone numbers but completely omitted the user's name field, causing severe hesitation when strangers called to discuss sightings.",
                resolved: 'Resolved: Added explicit full name field',
              },
              {
                num: '02',
                title: 'Incomplete Post Preview',
                desc: "Before submitting, the post preview failed to showcase whether a monetary reward was offered or display the author's verified handle, confusing reviewers.",
                resolved: 'Resolved: Live card preview with reward chip',
              },
              {
                num: '03',
                title: 'Language Barrier',
                desc: 'The app was restricted to Spanish only. Bilingual and non-native speaking neighbors were excluded from participating during urgent animal searches in diverse neighborhoods.',
                resolved: 'Resolved: Persistent EN/ES language toggle',
              },
            ].map((finding, idx) => (
              <Reveal key={finding.num} delay={idx * 0.08}>
                <div className="h-full p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-space-md">
                    <span className="font-display text-display-mobile md:text-display text-primary tabular-nums">
                      {finding.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-error uppercase tracking-wider">
                        Friction Point
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        {finding.title}
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {finding.desc}
                    </p>
                  </div>
                  <div className="pt-space-lg">
                    <div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-space-xs text-body-sm text-primary">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      <span>{finding.resolved}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: High-Fidelity Showcase */}
      <section className="w-full py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
            <div className="flex flex-col gap-space-xs text-left">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                07 / Polish
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                High-Fidelity Visual Design
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                A harmonious interface pairing accessible high-contrast color tokens with clear
                editorial cards and instant communication triggers.
              </p>
            </div>
            <a
              className="inline-flex items-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-lg py-space-sm rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all w-fit shrink-0"
              href={SOCIAL_LINKS.huellitasHiFiFigma}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              Launch Hi-Fi Figma Prototype
            </a>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              {
                title: 'Community Feed',
                desc: 'Real-time localized cards with distinct ‘LOST’ / ‘FOUND’ state badges.',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ9_brD2W661Ug2V3lY6taOUPoMEQz8ddFj0TCUQGQ4MpNUkfXxeLchyjeN-WXAy3vIUaUG6f-UA6pcDTlzhdbww_U0wEeZF14-t8ZgL_WaXKnuGlL8OdhiJjIa_WuJzr-sLeBZSLeqmzrUlx1w_H3Z4hULdjlulxqEH8q8FiVlpda0pjuqp0JCzWeM6q8-aMcCc_BgL5vSodj97bVAc-IYdTnlM6LS_eJqR_7HCc',
                alt: 'High fidelity UI screen of the Huellitas community feed showing pet cards with high-contrast status tags for LOST and FOUND in lavender and deep charcoal tones, clean typography, photo of a golden retriever and tabby cat, user avatar and location pin',
              },
              {
                title: 'Post Creation Flow',
                desc: 'Iterated form layout featuring verified owner details and optional reward amount.',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOgZfXtjp5DhZvksnWp4pVY5M9fRLB3zE9MGRDszc1lS0VxSiiOPDgX2QYTY1yybm9sPVILoZTUJdErtLOO_b0JpHfJP7EgxJxjxaziHVGQ-FCRMD9wVTgCfBjPb-r7fRaMGbipSIk3qCRsIrR-CQ6Z3D6zxaGoDiqrrTfKW3Px6qwlAhuJIdn-xu2ruIwhrxYUJM604Ca6Gp8Zhi454D8_-DHEEH7QKwmdWxhd_U',
                alt: 'High fidelity UI screen of the Huellitas report creation modal displaying pet image upload, name field, reward toggle, breed specification, and large accessible 48px submit button on warm off-white background',
              },
              {
                title: 'Instant Contact Sheet',
                desc: 'Zero-barrier contact options allowing finders to connect with owners within 2 taps.',
                src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf78ElR2kf03KNsOfse8zzCdeneqBzx4GR-4Bqcz6RYAAXKMbHF91OyV1_Hu7sbZ6EVwNAw-1fzT3JkGfC4M75L_7wNUdvrKKrQaftAi4CkJouMgL_cydCaeJ2b7xNh7N_wPzF0Y3rtWfk0KwLusShjjhOapOrZGr7u2P7_PvFvNsgJahZ_TjZRBLQTDzQ3DQ_0A4Yn8g6qSlotkfacpDlKKp9UOmZPKMmkYZnnFA',
                alt: 'High fidelity UI screen of the Huellitas pet details screen with large hero image of a lost beagle, distinct contact buttons for direct phone call and WhatsApp, last seen location map snippet, and medical notes tag',
              },
            ].map((mock, idx) => (
              <Reveal key={mock.title} delay={idx * 0.08}>
                <div className="flex flex-col gap-space-sm">
                  <div className="rounded-2xl overflow-hidden bg-surface-container-low shadow-md group">
                    <ResilientImage
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      alt={mock.alt}
                      fallbackLabel={mock.title}
                      src={mock.src}
                    />
                  </div>
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    {mock.title}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{mock.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Accessibility (WCAG 2.1 AA/AAA) */}
      <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <Reveal className="lg:col-span-4 flex flex-col gap-space-sm">
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                08 / Universal Design
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Accessibility Considerations
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Inclusive design principles integrated from day one to accommodate participants with
                visual impairments and varying motor abilities.
              </p>
            </Reveal>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                {
                  num: '1',
                  title: 'Language Selector',
                  desc: 'An omnipresent quick toggle ensures non-Spanish speakers can comfortably report lost pets or read bulletins across multilingual communities.',
                },
                {
                  num: '2',
                  title: 'High Contrast Ratio',
                  desc: 'Strict compliance with WCAG contrast standards (>4.5:1 text, 3:1 graphical targets) ensures readability outdoors under harsh daylight.',
                },
                {
                  num: '3',
                  title: 'Enlarged Touch Targets',
                  desc: 'All interactive triggers, form fields, and navigation items meet or exceed 48x48px boundaries for users with motor tremors or one-handed operation.',
                },
              ].map((item, idx) => (
                <Reveal key={item.num} delay={idx * 0.08}>
                  <div className="h-full p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-primary font-headline-sm tabular-nums">
                      {item.num}
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {item.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Conclusions & Learnings */}
      <section className="w-full py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <Reveal>
            <div className="p-space-xl lg:p-space-2xl rounded-2xl bg-surface-container-lowest shadow-md grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              <div className="lg:col-span-6 flex flex-col gap-space-md">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  09 / Reflections
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                  Project Conclusions &amp; Impact
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Huellitas illustrates that in life-critical and emotionally stressful digital
                  products, empathy is measured by the removal of friction. By removing mandatory
                  onboarding, users are empowered to act within seconds of finding an animal.
                </p>
              </div>
              <div className="lg:col-span-6 flex flex-col gap-space-md justify-center">
                <div className="p-space-lg rounded-xl bg-surface-container-low flex items-start gap-space-md">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    psychology
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      Key Insight
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Prioritizing immediacy over data collection yields higher user trust and
                      immediate community participation in neighborhood search initiatives.
                    </p>
                  </div>
                </div>
                <div className="p-space-lg rounded-xl bg-surface-container-low flex items-start gap-space-md">
                  <span className="material-symbols-outlined text-primary text-[28px]">
                    thumb_up
                  </span>
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      User Sentiment
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Study participants praised the clarity of the interface, highlighting how
                      intuitive the direct WhatsApp call sheet felt during simulated outdoor tests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section 12: Next Steps Roadmap */}
      <section className="w-full bg-surface-container-low py-space-2xl lg:py-space-3xl">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
          <Reveal className="flex flex-col gap-space-xs mb-space-2xl text-left">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
              10 / Future Roadmap
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Next Iteration Horizons
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Future feature rollouts planned for future development cycles of Huellitas:
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                phase: 'Phase 1',
                icon: 'manage_search',
                title: 'Find the Owner Tool',
                desc: 'Include a specialized attribute filter matching found pets with existing missing pet records automatically using breed, collar color, and location tags.',
              },
              {
                phase: 'Phase 2',
                icon: 'favorite',
                title: 'In-App Adoption Module',
                desc: 'A dedicated channel for verified local shelters to showcase rescue animals seeking permanent homes, including screening questionnaires.',
              },
              {
                phase: 'Phase 3',
                icon: 'dynamic_feed',
                title: 'Multi-Pet Reporting',
                desc: 'Empower shelters and active rescuers to create batch rescue alerts in a unified post when multiple littermates or animals are found together.',
              },
            ].map((step, idx) => (
              <Reveal key={step.phase} delay={idx * 0.08}>
                <div className="h-full p-space-xl rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                      {step.phase}
                    </span>
                    <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
              href={SOCIAL_LINKS.huellitasHiFiFigma}
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
