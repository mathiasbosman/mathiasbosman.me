import type { ReactElement } from 'react'
import Page from '../components/common/page.tsx'
import ContentWrapper from '../components/common/content-wrapper.tsx'
import SectionWrapper from '../components/common/section-wrapper.tsx'
import PageTitle from '../components/typography/page-title.tsx'
import Experiences from '../components/experiences.tsx'
import { experienceConfig } from '../models/config/experience.config.tsx'

export const ExperiencePage = (): ReactElement => {
  return <Page
    title={'Experiences - Mathias Bosman'}
    renderAvatar={true}>
    <ContentWrapper>
      <SectionWrapper>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <PageTitle title={'Places where I gained experiences since graduating'}>
            Once I graduated from the University of Ghent and gained my
            Bachelor degree in multimedia I went out and found some amazing
            workplaces.<br/>
            Below are some of the most note-worthy.
          </PageTitle>
        </div>
        <div className={'mt-16 sm:mt-20'}>
          <Experiences experiences={experienceConfig.experiences}/>
        </div>
      </SectionWrapper>
    </ContentWrapper>
  </Page>
}

export default ExperiencePage
