import SiteHeader from '@components/layout/site-header.tsx';
import { portfolioConfig } from '@models/config/portfolio.config.ts';

describe('<SiteHeader />', () => {
  beforeEach(() => {
    cy.mount(<SiteHeader />);
  });

  it('renders the brand, skip link, and primary anchor navigation', () => {
    cy.get('header').should('be.visible');
    cy.get('a[href="#main-content"]').should('have.text', 'Skip to content');
    cy.get('a[href="#top"]')
      .should('have.attr', 'aria-label', 'Mathias Bosman, back to top')
      .and('contain.text', 'MB.');

    cy.get('nav[aria-label="Primary navigation"]')
      .should('exist')
      .within(() => {
        cy.get('a').should('have.length', portfolioConfig.navigation.length);

        portfolioConfig.navigation.forEach((item) => {
          cy.get(`a[href="${item.href}"]`).should('have.text', item.label);
        });
      });
  });

  it('renders LinkedIn as a safe external link', () => {
    cy.get(`a[href="${portfolioConfig.social.linkedIn.href}"]`)
      .should('contain.text', portfolioConfig.social.linkedIn.label)
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noreferrer');
  });
});
