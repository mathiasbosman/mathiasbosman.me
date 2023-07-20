import { type HTMLSimpleLink } from '../../../../src/shared/utils.tsx'

export const mockHomeLink: HTMLSimpleLink = { href: '/', text: 'home' }
export const mockPageLink: HTMLSimpleLink = { href: '/pageA', text: 'Page A' }
export const mockLinks: HTMLSimpleLink[] = [
  mockHomeLink,
  mockPageLink
]
