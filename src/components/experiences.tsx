import type { Experience, ExperienceItem } from '@models/config/experience.config.ts';
import type { PropsWithChildren, ReactElement } from 'react';

interface Props {
  experiences: Experience[];
}

export const Experiences = (props: PropsWithChildren<Props>): ReactElement => {
  const { experiences } = props;

  const renderItem = (item: ExperienceItem, key: number): ReactElement => (
    <article key={key} className="relative pl-8">
      <span className="absolute left-4 top-6 z-10 flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900">
        <span className="h-2 w-2 rounded-full bg-violet-500"></span>
      </span>
      <div className="group ml-6 rounded-md border border-zinc-200/80 bg-white/90 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-300/80 hover:shadow-lg hover:shadow-zinc-900/10 dark:border-zinc-700/50 dark:bg-zinc-900/80 dark:hover:border-violet-500/50 dark:hover:shadow-black/30">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {item.period.toString()}
        </p>
        <h3 className="relative mt-2 text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {item.title}
        </h3>
        {item.description && (
          <p
            className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></p>
        )}
        {item.link && (
          <a
            href={item.link.href}
            aria-label={item.link.text}
            className="mt-4 inline-flex items-center text-sm font-semibold text-zinc-600 transition hover:bg-gradient-to-r hover:from-violet-500 hover:to-pink-600 hover:bg-clip-text hover:text-transparent dark:text-zinc-300"
          >
            {item.link.text} →
          </a>
        )}
      </div>
    </article>
  );

  const renderSection = (experience: Experience, key: number): ReactElement => (
    <section
      key={key}
      aria-labelledby={`ref:${experience.place}`}
      className="group relative overflow-hidden rounded-2xl px-0 sm:px-8"
    >
      <div className="flex items-center gap-4">
        {experience.logo && (
          <div className="flex h-12 w-12 items-center justify-center overflow-hidden">
            <img
              src={experience.logo.src}
              alt={experience.logo.alt}
              className="h-10 w-10 object-contain"
              loading="lazy"
            />
          </div>
        )}
        <div>
          <h2 id={`ref:${experience.place}`} className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
            {experience.place}
          </h2>
        </div>
      </div>
      <div className="relative mt-8 space-y-5">
        <span
          aria-hidden="true"
          className="absolute bottom-3 left-[26px] top-3 w-px bg-zinc-200 dark:bg-zinc-700"
        ></span>
        {experience.items.map((item, i) => renderItem(item, i))}
      </div>
    </section>
  );

  return <div className="space-y-10">{experiences.map((item, i) => renderSection(item, i))}</div>;
};

export default Experiences;
