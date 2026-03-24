import Skills from '@components/skills.tsx';
import type { Skill } from '@models/config/experience.config.ts';

describe('<Skills/> component', () => {
  it('Should render provided skills', () => {
    const intro = 'Skill summary paragraph';
    const skills: Skill[] = [
      { label: 'TypeScript', category: 'Frontend', proficiency: 'Advanced'},
      { label: 'React', category: 'Frontend', proficiency: 'Advanced' },
      { label: 'Java', category: 'Backend', proficiency: 'Expert' },
    ];

    cy.mount(<Skills skills={skills} />);

    cy.get('section[aria-labelledby="skills-heading"]').should('be.visible');
    cy.get('#skills-heading').should('have.text', 'Skills');
    cy.contains('p', intro).should('be.visible');
    cy.contains('h3', 'Frontend').should('be.visible');
    cy.contains('h3', 'Backend').should('be.visible');
    cy.get('li').should('have.length', 3);
    cy.get('li').eq(0).should('contain.text', 'TypeScript');
    cy.get('li').eq(0).should('contain.text', 'Advanced');
    cy.get('li').eq(1).should('contain.text', 'React');
    cy.get('li').eq(2).should('contain.text', 'Expert');
  });

  it('Should not render section when there are no skills', () => {
    cy.mount(<Skills skills={[]} />);

    cy.get('section[aria-labelledby="skills-heading"]').should('not.exist');
  });
});

