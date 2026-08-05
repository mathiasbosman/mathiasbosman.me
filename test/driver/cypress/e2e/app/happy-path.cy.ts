import { primaryNavigationAnchors, rootPage, sectionIds } from '../config.ts';

describe('One-page portfolio happy path', () => {
  beforeEach(() => {
    cy.visit(rootPage);
  });

  it('renders the complete portfolio on the root page', () => {
    cy.location('pathname').should('eq', rootPage);
    cy.get('main#main-content > section').should('have.length', sectionIds.length);

    sectionIds.forEach((sectionId) => {
      cy.get(`main#main-content > section#${sectionId}`).should('exist');
    });
  });

  context('Desktop navigation', { viewportWidth: 1024, viewportHeight: 900 }, () => {
    it('moves between sections with primary anchor links', () => {
      primaryNavigationAnchors.forEach((anchor) => {
        cy.get(`nav[aria-label="Primary navigation"] a[href="${anchor}"]`).click();
        cy.location('pathname').should('eq', rootPage);
        cy.location('hash').should('eq', anchor);
        cy.get(anchor).should('be.visible');
      });
    });

    it('returns to the hero from the footer', () => {
      cy.get('a[href="#contact"]').filter(':visible').first().click();
      cy.get('footer a[href="#top"]').contains('Back to top').click();

      cy.location('hash').should('eq', '#top');
      cy.get('#top').should('be.visible');
    });
  });

  context('Mobile navigation', { viewportWidth: 375, viewportHeight: 812 }, () => {
    it('keeps the main call to action available without a menu drawer', () => {
      cy.get('nav[aria-label="Primary navigation"]').should('not.be.visible');
      cy.get('a[href="#work"]').contains('Explore my work').click();

      cy.location('hash').should('eq', '#work');
      cy.get('#work').should('be.visible');
    });
  });
});
