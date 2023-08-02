import type { ReactElement } from 'react'
import Page from '@components/common/page'
import ContentWrapper from '@components/common/content-wrapper'
import SectionWrapper from '@components/common/section-wrapper'
import PageTitle from '@components/typography/page-title'
import Experiences from '@components/experiences'
import { experienceConfig } from '@models/config/experience.config'

export const ExperiencePage = (): ReactElement => {
  return <Page
    title={'Experiences - Mathias Bosman'}
    renderAvatar={true}>
    <ContentWrapper>
      <SectionWrapper>
        <div className={'mx-auto max-w-2xl lg:max-w-5xl'}>
          <PageTitle title={'Places where I gained experience since graduating'}/>
          <p className={'mt-6 text-base text-zinc-500 dark:text-zinc-400'}>
            Once I graduated from the University of Ghent and received my
            Bachelor degree in multimedia I went out and found some amazing
            workplaces.<br/>
            Below are some of the most note-worthy.
          </p>
        </div>
        <div className={'mt-16 sm:mt-20'}>
          <Experiences experiences={experienceConfig.experiences}/>
        </div>
      </SectionWrapper>
    </ContentWrapper>
  </Page>
}

export default ExperiencePage
