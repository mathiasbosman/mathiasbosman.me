import type { ReactElement } from 'react'
import Page from '@components/common/page'
import ContentWrapper from '@components/common/content-wrapper'
import SectionWrapper from '@components/common/section-wrapper'
import PageTitle from '@components/typography/page-title'
import Projects from '@components/projects'
import { projectsConfig } from '@models/config/project.config'

export const ProjectsPage = (): ReactElement => {
  return <Page title={'Projects - Mathias Bosman'} renderAvatar={true}>
    <ContentWrapper>
      <SectionWrapper>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <PageTitle title={'Bits and bytes I\'ve put out into the world wide web.'} />
          <p className={'mt-6 text-base text-zinc-500 dark:text-zinc-400'}>
            I&apos;ve worked on tons of little projects over the years that led
            to nothing but these are the ones that are worth mentioning or
            that are re-usable. All of them are open-source, so if you see
            something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </p>
        </div>
        <div className={'mt-16 mx-auto max-w-2xl lg:max-w-5xl'}>
          <div className={'grid md:grid-cols-2 lg:grid-cols-3 gap-16'}>
            <Projects projects={projectsConfig.projects} pinned={false}/>
          </div>
        </div>
      </SectionWrapper>
    </ContentWrapper>
  </Page>
}

export default ProjectsPage
