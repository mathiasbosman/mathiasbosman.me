import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import SectionLabel from '@components/ui/section-label.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const ProjectsSection = (): ReactElement => {
  return (
    <section className="scroll-mt-0 bg-mist text-ink" id="projects">
      <Container className="grid gap-16 py-24 sm:py-28 lg:grid-cols-12 lg:gap-10 lg:py-32">
        <div className="lg:col-span-4">
          <SectionLabel className="text-ink/65" label="Selected projects" />
          <h2 className="mt-10 max-w-[24rem] text-[clamp(2.75rem,4.3vw,4rem)] font-normal leading-[0.95] tracking-[-0.06em]">
            Useful experiments, built in the open.
          </h2>
          <p className="mt-8 max-w-[22rem] text-sm leading-6 text-ink/65">
            Side projects are where I test an idea, learn a technology and keep the curious part of software development
            alive.
          </p>
        </div>

        <ol className="border-t border-ink/15 lg:col-span-7 lg:col-start-6">
          {portfolioConfig.projects.map((project, index) => (
            <li className="group border-b border-ink/15" key={project.link.label}>
              <a
                className="grid grid-cols-[2rem_1fr_auto] gap-x-4 gap-y-2 py-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric sm:grid-cols-[2.5rem_1fr_auto] sm:py-8"
                href={project.link.href}
                rel="noreferrer"
                target="_blank"
              >
                <span className="pt-1 text-[0.625rem] font-bold tracking-[0.15em] text-electric-dark">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block text-lg font-medium tracking-[-0.035em] transition-colors group-hover:text-electric sm:text-xl">
                    {project.link.label}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-ink/65">{project.description}</span>
                  <span className="mt-4 block text-[0.5625rem] font-bold uppercase tracking-[0.12em] text-ink/65">
                    {project.stack.join(' · ')}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-lg transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </a>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default ProjectsSection;
