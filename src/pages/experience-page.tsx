import type { ReactElement } from 'react';
import Page from '@components/common/page.tsx';
import ContentWrapper from '@components/common/content-wrapper.tsx';
import SectionWrapper from '@components/common/section-wrapper.tsx';
import PageTitle from '@components/typography/page-title.tsx';
import Experiences from '@components/experiences.tsx';
import { experienceConfig } from '@models/config/experience.config.ts';
import { LINK_LINKEDIN } from '@/constants.ts';
import Link from '@components/typography/link.tsx';

export const ExperiencePage = (): ReactElement => {
  return (
    <Page title="Experiences - Mathias Bosman" renderAvatar={true}>
      <ContentWrapper>
        <SectionWrapper>
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <PageTitle title="Places where I gained experience since graduating." />
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Once I graduated from the University of Ghent and received my Bachelor degree in multimedia I went out and
              found some amazing workplaces.
              <br />
              Below are some of the most note-worthy. If you want more detailed information I invite you to take a look
              at my{' '}
              <strong>
                <Link link={LINK_LINKEDIN} />
              </strong>
              .
            </p>
          </div>
          <div className="mt-16 sm:mt-20">
            <h2 className="sr-only">Experiences</h2>
            <Experiences experiences={experienceConfig.experiences} />
          </div>
        </SectionWrapper>
      </ContentWrapper>
    </Page>
  );
};

export default ExperiencePage;
