import type { ReactElement } from 'react';
import Page from '@components/common/page.tsx';
import ContentWrapper from '@components/common/content-wrapper.tsx';
import SectionWrapper from '@components/common/section-wrapper.tsx';
import PageTitle from '@components/typography/page-title.tsx';
import Projects from '@components/projects.tsx';
import { projectsConfig } from '@models/config/project.config.ts';

export const ProjectsPage = (): ReactElement => {
  return (
    <Page title={'Projects - Mathias Bosman'} renderAvatar={true}>
      <ContentWrapper>
        <SectionWrapper>
          <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
            <PageTitle title={"Bits and bytes I've put out into the world wide web."} />
            <p className={'mt-6 text-base text-zinc-600 dark:text-zinc-400'}>
              I&apos;ve worked on tons of little projects over the years that led to nothing but these are the ones that
              are worth mentioning or that are re-usable. All of them are open-source, so if you see something that
              piques your interest, check out the code and contribute if you have ideas for how it can be improved.
            </p>
          </div>
          <div className={'mx-auto mt-16 max-w-2xl lg:max-w-5xl'}>
            <div className={'grid gap-16 md:grid-cols-2 lg:grid-cols-3'}>
              <h2 className={'sr-only'}>Projects</h2>
              <Projects projects={projectsConfig.projects} pinned={false} />
            </div>
          </div>
        </SectionWrapper>
      </ContentWrapper>
    </Page>
  );
};

export default ProjectsPage;
