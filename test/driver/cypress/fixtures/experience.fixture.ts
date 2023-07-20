import {
  type Experience,
  type ExperienceItem
} from '../../../../src/models/config/experience.config.tsx'
import { mockPageLink } from './navigation.fixture.ts'

export const experienceItemMock: ExperienceItem = {
  title: 'mock title',
  period: { from: new Date('2023-01-01') },
  description: 'mock description',
  link: mockPageLink,
  pinned: true
}

export const experienceWithOnePlaceAndOneItem: Experience = {
  place: 'mockPlace',
  logo: { src: 'logo.webp', alt: 'logo alt' },
  items: [experienceItemMock]
}

export const experiencesWithOnePlaceAndOneItem: Experience[] = [
  experienceWithOnePlaceAndOneItem
]

export const experienceMockWithTwoItems: Experience = {
  place: 'mockPlace',
  logo: { src: 'logo.webp', alt: 'logo alt' },
  items: [
    experienceItemMock,
    {
      title: 'mock title 2',
      period: { from: new Date('2023-01-01'), to: new Date('2023-10-01') },
      description: 'mock description 2',
      link: { href: 'https://foo2.bar', text: 'foo bar 2' },
      pinned: true
    }
  ]
}
export const experiencesWithTwoPlaces: Experience[] = [
  experienceMockWithTwoItems,
  {
    place: 'mockPlace 2',
    logo: { src: 'logo2.webp', alt: 'logo 2 alt' },
    items: [
      {
        title: 'mock title 2.1',
        period: { from: new Date('2023-01-01') },
        description: 'mock description',
        link: { href: 'https://foo2_1.bar', text: 'foo bar' },
        pinned: false
      },
      {
        title: 'mock title 2.2',
        period: { from: new Date('2023-01-01'), to: new Date('2023-10-01') },
        description: 'mock description 2.2',
        link: { href: 'https://foo2_2.bar', text: 'foo bar 2.2' },
        pinned: true
      }
    ]
  }
]
