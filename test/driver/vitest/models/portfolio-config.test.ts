import { describe, expect, it } from 'vitest';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

describe('portfolioConfig', () => {
  it('defines unique in-page navigation targets', () => {
    const navigationTargets = portfolioConfig.navigation.map((item) => item.href);

    expect(navigationTargets).toEqual(['#work', '#experience', '#contact']);
    expect(new Set(navigationTargets).size).toBe(navigationTargets.length);
  });

  it('provides content for every data-driven section', () => {
    expect(portfolioConfig.hero.stats.length).toBeGreaterThan(0);
    expect(portfolioConfig.focus.description.length).toBeGreaterThan(0);
    expect(portfolioConfig.focus.technologies.length).toBeGreaterThan(0);
    expect(portfolioConfig.experience.length).toBeGreaterThan(0);
    expect(portfolioConfig.projects.length).toBeGreaterThan(0);
    expect(portfolioConfig.toolbox.length).toBeGreaterThan(0);
    expect(portfolioConfig.about.paragraphs.length).toBeGreaterThan(0);
    expect(portfolioConfig.about.interests.length).toBeGreaterThan(0);
  });
});
