import type { Project } from '@models/config/project.config.ts';
import { htmlImageFixture, htmlSimpleLinkFixture } from './utils.fixture.ts';

export const projectFixture = (title: string, pinned: boolean, src: string): Project => {
  return {
    pinned,
    logo: htmlImageFixture(src, 'logo alt ' + title),
    title,
    link: htmlSimpleLinkFixture('#', 'link ' + title),
    description: 'description ' + title,
  };
};
