import type { ReactElement } from 'react';
import Container from '@components/layout/container.tsx';
import SectionLabel from '@components/ui/section-label.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

export const ToolboxSection = (): ReactElement => {
  return (
    <section className="bg-paper text-ink" id="toolbox">
      <Container className="py-24 sm:py-28 lg:py-36">
        <div className="grid gap-8 lg:grid-cols-12">
          <SectionLabel className="text-ink/65 lg:col-span-3" label="Toolbox" />
          <h2 className="max-w-[52rem] text-[clamp(2.75rem,5vw,4.5rem)] font-normal leading-[0.96] tracking-[-0.06em] lg:col-span-8 lg:col-start-4">
            Deep backend roots. Broad product context.
          </h2>
        </div>

        <div className="mt-16 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {portfolioConfig.toolbox.map((group) => (
            <section className="border-b border-r border-ink/15 p-5 sm:p-6" key={group.label}>
              <h3 className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-electric">{group.label}</h3>
              <ul className="mt-5">
                {group.skills.map((skill) => (
                  <li className="border-t border-ink/10 py-2.5 text-xs text-ink/75 first:border-t-0" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ToolboxSection;
