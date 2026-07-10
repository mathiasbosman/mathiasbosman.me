import type { ReactElement } from 'react';
import SectionWrapper from '@components/common/section-wrapper.tsx';
import PageTitle from '@components/typography/page-title.tsx';
import Experiences from '@components/experiences.tsx';
import Skills from '@components/skills.tsx';
import { experienceConfig } from '@models/config/experience.config.ts';
import { LINK_LINKEDIN } from '@/constants.ts';
import Link from '@components/typography/link.tsx';
import ContentWrapper from '@components/common/content-wrapper.tsx';

export const ExperiencePage = (): ReactElement => {
  const totalRoles = experienceConfig.experiences.reduce((sum, experience) => sum + experience.items.length, 0);

  return (
    <ContentWrapper>
      <SectionWrapper>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <PageTitle
            title={
              <>
                Places where I gained
                <span className="bg-gradient-to-r from-violet-500 to-pink-600 bg-clip-text text-transparent">
                  {' '}
                  experience
                </span>{' '}
                since graduating.
              </>
            }
          />
          <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Once I graduated from the University of Ghent and received my Bachelor degree in multimedia I went out and
            found some amazing workplaces.
            <br />
            Below are some of the most note-worthy. If you want more detailed information I invite you to take a look at
            my <Link link={LINK_LINKEDIN} target="_blank" />.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {experienceConfig.experiences.length} companies
            </span>
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {totalRoles} roles
            </span>
            <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              {experienceConfig.skills.length} highlighted skills
            </span>
          </div>
        </div>
        <div className="mt-16 sm:mt-20">
          <h2 className="sr-only">Experiences</h2>
          <Experiences experiences={experienceConfig.experiences} />
        </div>
        <div className="mt-16 sm:mt-20">
          <Skills skills={experienceConfig.skills} />
        </div>
      </SectionWrapper>
    </ContentWrapper>
  );
};

export default ExperiencePage;
