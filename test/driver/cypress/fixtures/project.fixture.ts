import type { Project } from '../../../../src/models/config/project.config'
import { htmlImageFixture, htmlSimpleLinkFixture } from './utils.fixture'

export const projectFixture = (title: string, pinned: boolean, src: string): Project => {
  return {
    pinned,
    logo: htmlImageFixture(src, 'logo alt ' + title),
    title,
    link: htmlSimpleLinkFixture('#', 'link ' + title),
    description: 'description ' + title
  }
}
