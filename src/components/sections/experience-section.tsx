import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import SectionLabel from '@components/ui/section-label.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const ExperienceSection = (): ReactElement => {
  return (
    <section className="scroll-mt-0 bg-paper text-ink dark:bg-night dark:text-warm" id="experience">
      <Container className="py-24 sm:py-28 lg:py-36">
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionLabel className="text-ink/65 dark:text-warm/50 lg:col-span-3" label="Experience" />
          <h2 className="max-w-[50rem] text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-[0.96] tracking-[-0.06em] lg:col-span-8 lg:col-start-4">
            A career built across code, delivery and leadership.
          </h2>
        </div>

        <div className="mt-16 border-t border-ink/15 dark:border-white/15 lg:mt-20">
          {portfolioConfig.experience.map((entry) => (
            <article
              className="grid gap-4 border-b border-ink/15 py-7 dark:border-white/15 sm:grid-cols-12 sm:gap-6 lg:items-start lg:py-8"
              key={`${entry.period}-${entry.role}`}
            >
              <p className="text-[0.625rem] font-bold uppercase tracking-[0.13em] text-ink/65 dark:text-pink sm:col-span-3">
                {entry.period}
              </p>
              <div className="sm:col-span-4">
                <h3 className="flex items-center gap-2 text-base font-medium tracking-[-0.025em]">
                  {entry.role}
                  {entry.current && (
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-pink" />
                      <span className="sr-only">Current role</span>
                    </span>
                  )}
                </h3>
                <a
                  className="mt-1 inline-block text-xs font-semibold text-electric underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric dark:text-warm/50 dark:hover:text-pink dark:focus-visible:outline-pink"
                  href={entry.company.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {entry.company.label}
                </a>
              </div>
              <p className="max-w-[34rem] text-sm leading-6 text-ink/65 dark:text-warm/55 sm:col-span-5">
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
