import type { ReactElement } from 'react';
import type { Skill } from '@models/config/experience.config.ts';

interface Props {
  skills: Skill[];
}

export const Skills = (props: Props): ReactElement => {
  const { skills } = props;

  if (skills.length === 0) {
    return <></>;
  }

  const groupedSkills = skills.reduce<Record<string, Skill[]>>((accumulator, skill) => {
    const currentGroup = accumulator[skill.category] ?? [];
    accumulator[skill.category] = [...currentGroup, skill];
    return accumulator;
  }, {});

  return (
    <section
      aria-labelledby="skills-heading"
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 id="skills-heading" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          Skills
        </h2>
        <div className="space-y-8 md:col-span-3">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Over the years I have combined software engineering, delivery and leadership skills to ship practical
            solutions for teams and end users.
          </p>
          {Object.entries(groupedSkills).map(([category, items]) => (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{category}</h3>
              <ul className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <li
                    key={`${skill.category}-${skill.label}`}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    <span>{skill.label}</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {skill.proficiency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

