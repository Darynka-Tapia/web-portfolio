import { SKILL_GROUPS } from '../data/portfolioData';
import { Reveal } from './Reveal';

export function SkillsSection() {
  return (
    <section className="w-full py-space-2xl lg:py-space-3xl scroll-mt-20" id="skills">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Reveal className="flex flex-col gap-space-xs mb-space-2xl">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
            Capabilities
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Technical Skills
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
            Technologies, tools, and methodologies I use to build, maintain, and improve web applications.
          </p>
        </Reveal>

        {/* Editorial Skill Cards (No arbitrary percentage bars or fake meters) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {SKILL_GROUPS.map((group, idx) => {
            if (group.highlighted) {
              return (
                <Reveal
                  key={group.id}
                  delay={Math.min(idx * 0.06, 0.35)}
                  className="md:col-span-2 lg:col-span-2"
                >
                  <div className="h-full bg-primary/5 border-none p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-space-xs">
                      <div className="flex items-center gap-space-sm text-primary">
                        <span className="material-symbols-outlined text-[24px]">{group.icon}</span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {group.title}
                        </h3>
                      </div>
                      {group.badge && (
                        <span className="font-label-sm text-label-sm text-primary bg-primary-fixed px-space-sm py-0.5 rounded-full uppercase tracking-wider">
                          {group.badge}
                        </span>
                      )}
                    </div>
                    {group.description && (
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {group.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-space-xs">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-surface-container-lowest text-primary font-label-sm text-label-sm rounded-full shadow-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={group.id} delay={Math.min(idx * 0.06, 0.35)}>
                <div className="h-full bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-space-sm text-primary">
                    <span className="material-symbols-outlined text-[24px]">{group.icon}</span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {group.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-space-xs">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 font-label-sm text-label-sm rounded-md ${
                          group.accentChips
                            ? 'bg-secondary-container/40 text-on-secondary-container'
                            : 'bg-surface-container text-on-surface-variant'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
