import type { Project } from '../../../../src/models/config/project.config.tsx'

export const projectFixutre = (title: string, pinned: boolean, src: string): Project => {
  return {
    pinned,
    logo: { src, alt: 'logo alt ' + title },
    title,
    link: { href: '#', text: 'link ' + title },
    description: 'description ' + title
  }
}
