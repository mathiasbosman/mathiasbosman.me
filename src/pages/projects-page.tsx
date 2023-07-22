import type { ReactElement } from 'react'
import Page from '../components/common/page.tsx'
import ContentWrapper from '../components/common/content-wrapper.tsx'
import SectionWrapper from '../components/common/section-wrapper.tsx'
import PageTitle from '../components/typography/page-title.tsx'
import Projects from '../components/projects.tsx'
import { projectsConfig } from '../models/config/project.config.tsx'

export const ProjectsPage = (): ReactElement => {
  return <Page title={'Projects - Mathias Bosman'} renderAvatar={true}>
    <ContentWrapper>
      <SectionWrapper>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <PageTitle title={'Bits and bytes I\'ve put out into the world wide web.'}>
            I’ve worked on tons of little projects over the years that led
            to nothing but these are the ones that are worth mentioning or
            that are re-usable. All of them are open-source, so if you see
            something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </PageTitle>
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
