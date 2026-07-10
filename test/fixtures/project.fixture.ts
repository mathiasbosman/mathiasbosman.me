import type { Project } from '@models/config/project.config.ts';
import { htmlImageFixture, htmlSimpleLinkFixture } from './utils.fixture.ts';

export const projectFixture = (title: string, pinned: boolean, src: string): Project => {
  return {
    pinned,
    preview: htmlImageFixture(src, 'preview alt ' + title),
    title,
    links: {
      github: htmlSimpleLinkFixture('#', 'GitHub'),
    },
    description: 'description ' + title,
    technologies: ['TypeScript', 'React'],
  };
};
