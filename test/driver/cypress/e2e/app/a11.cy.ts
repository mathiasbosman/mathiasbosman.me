import { allPages } from '../config.ts';
import type { Result as AxeResult } from 'axe-core';

const logViolations = (violations: AxeResult[]) => {
  if (!violations.length) return;

  cy.task('log', `a11y violations: ${violations.length}`);

  const rows = violations.map((v) => ({
    id: v.id,
    impact: v.impact,
    help: v.help,
    nodes: v.nodes.length,
    targets: v.nodes.flatMap((n) => n.target).join(', '),
  }));

  cy.task('table', rows);
};

describe('A11 checks', () => {
  const visitAndInject = (path: string) => {
    cy.visit(path);
    // Wait for hydration/paint
    cy.get('main', { timeout: 10000 }).should('be.visible');
    cy.injectAxe();
  };

  context('Medium viewport', { viewportWidth: 640, viewportHeight: 1250 }, () => {
    allPages.forEach((page) => {
      it(`Page passes a11y: ${page}`, () => {
        visitAndInject(page);
        cy.checkA11y(undefined, undefined, logViolations);
      });
    });
  });

  context('Small viewport', { viewportWidth: 639, viewportHeight: 1250 }, () => {
    allPages.forEach((page) => {
      it(`Page passes a11y: ${page}`, () => {
        visitAndInject(page);
        cy.checkA11y(undefined, undefined, logViolations);
      });
    });

    it('Navigation banner (drawer) is accessible when open', () => {
      visitAndInject('/');
      cy.get('button[aria-controls="mobile-nav"]').should('be.visible');
      cy.get('button[aria-controls="mobile-nav"]').click();
      cy.get('#mobile-nav').should('be.visible');

      cy.checkA11y('#mobile-nav', undefined, logViolations);
    });
  });

  describe('Landmarks present', () => {
    allPages.forEach((page) => {
      it(`Landmarks exist on: ${page}`, () => {
        cy.visit(page);
        cy.get('h1').should('be.visible');
        cy.get('main').should('be.visible');
        cy.get('nav').should('exist'); // nav may be hidden on small viewports; we just assert it exists
        cy.get('header').should('be.visible');
        cy.get('footer').should('be.visible');
      });
    });
  });
});
