import ExperienceSection from '@components/sections/experience-section.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

describe('<ExperienceSection />', () => {
  beforeEach(() => {
    cy.mount(<ExperienceSection />);
  });

  it('renders every configured experience in order', () => {
    cy.get('section#experience').should('be.visible');
    cy.get('#experience p')
      .first()
      .should('contain.text', 'Experience')
      .find('span[aria-hidden="true"]')
      .should('have.text', '/');
    cy.get('#experience h2').should('have.text', 'A career built across code, delivery and leadership.');
    cy.get('#experience article').should('have.length', portfolioConfig.experience.length);

    portfolioConfig.experience.forEach((entry, index) => {
      cy.get('#experience article')
        .eq(index)
        .within(() => {
          cy.contains(entry.period).should('be.visible');
          cy.get('h3').should('contain.text', entry.role);
          cy.get(`a[href="${entry.company.href}"]`)
            .should('have.text', entry.company.label)
            .and('have.attr', 'target', '_blank')
            .and('have.attr', 'rel', 'noreferrer');
          cy.contains(entry.description).should('be.visible');
        });
    });
  });

  it('marks only configured current roles', () => {
    const currentRoles = portfolioConfig.experience.filter((entry) => entry.current);

    cy.get('#experience h3 .sr-only').should('have.length', currentRoles.length).and('have.text', 'Current role');
    currentRoles.forEach((entry) => {
      cy.contains('#experience h3', entry.role).find('.sr-only').should('have.text', 'Current role');
    });
  });
});
