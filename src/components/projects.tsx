import type { Project } from '@models/config/project.config.ts';
import type { PropsWithChildren, ReactElement } from 'react';

interface Props {
  projects: Project[];
  pinned: boolean;
}

export const Projects = (props: PropsWithChildren<Props>): ReactElement => {
  const { projects, pinned } = props;

  const renderItem = (project: Project, key: number): ReactElement => (
    <article
      key={key}
      className="group relative overflow-hidden rounded-md border border-zinc-200/80 bg-white/90 transition duration-300 hover:-translate-y-1 hover:border-violet-300/80 hover:shadow-lg hover:shadow-zinc-900/10 dark:border-zinc-700/50 dark:bg-zinc-900/80 dark:hover:border-violet-500/50 dark:hover:shadow-black/30"
    >
      <div className="h-44 overflow-hidden border-b border-zinc-100 bg-zinc-100/80 dark:border-zinc-700/50 dark:bg-zinc-800/70">
        <img
          src={project.preview.src}
          alt={project.preview.alt}
          style={{ color: 'transparent' }}
          loading="lazy"
          width={560}
          height={248}
          decoding="async"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex h-full flex-col p-6">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{project.title}</h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-5 text-sm font-semibold">
          <a
            href={project.links.github.href}
            className="text-zinc-600 transition hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent dark:text-zinc-300"
          >
            {project.links.github.text ?? 'GitHub'} →
          </a>
          {project.links.demo && (
            <a
              href={project.links.demo.href}
              className="text-zinc-600 transition hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent dark:text-zinc-300"
            >
              {project.links.demo.text ?? 'Live demo'} →
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <>{projects.filter((project) => (pinned ? project.pinned : true)).map((project, i) => renderItem(project, i))}</>
  );
};

export default Projects;
