import {
  type Experience,
  type ExperienceItem
} from '../../../../src/models/config/experience.config.tsx'
import { htmlImageFixture, htmlSimpleLinkFixture, periodFixture } from './utils.fixture.tsx'

export const experienceItemMock: ExperienceItem = {
  title: 'mock title',
  period: periodFixture(new Date('2023-01-01'), undefined),
  description: 'mock description',
  link: htmlSimpleLinkFixture('/href', 'linkText'),
  pinned: true
}

export const experienceWithOnePlaceAndOneItem: Experience = {
  place: 'mockPlace',
  items: [experienceItemMock],
  logo: htmlImageFixture('logo.webp', 'logo alt')
}

export const experiencesWithOnePlaceAndOneItem: Experience[] = [
  experienceWithOnePlaceAndOneItem
]

export const experienceMockWithTwoItems: Experience = {
  place: 'mockPlace',
  logo: htmlImageFixture('logo.webp', 'logo alt'),
  items: [
    experienceItemMock,
    {
      title: 'mock title 2',
      description: 'mock description 2',
      link: htmlSimpleLinkFixture('https://foo2.bar', 'foo bar 2'),
      period: periodFixture(new Date('2023-01-01'), new Date('2023-10-01')),
      pinned: true
    }
  ]
}
export const experiencesWithTwoPlaces: Experience[] = [
  experienceMockWithTwoItems,
  {
    place: 'mockPlace 2',
    logo: htmlImageFixture('logo2.webp', 'logo2 alt'),
    items: [
      {
        title: 'mock title 2.1',
        description: 'mock description',
        period: periodFixture(new Date('2023-01-01'), undefined),
        link: htmlSimpleLinkFixture('https://foo2_1.bar', 'foo bar'),
        pinned: false
      },
      {
        title: 'mock title 2.2',
        description: 'mock description 2.2',
        period: periodFixture(new Date('2023-01-01'), new Date('2023-10-01')),
        link: htmlSimpleLinkFixture('https://foo2_2.bar', 'foo bar 2.2' ),
        pinned: true
      }
    ]
  }
]
