import { rootPage, sectionIds } from '../config.ts';
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
  const visitAndInject = () => {
    cy.visit(rootPage);
    cy.get('main#main-content', { timeout: 10000 }).should('be.visible');
    cy.injectAxe();
  };

  context('Desktop viewport', { viewportWidth: 1024, viewportHeight: 900 }, () => {
    it('passes automated accessibility checks', () => {
      visitAndInject();
      cy.checkA11y(undefined, undefined, logViolations);
    });
  });

  context('Mobile viewport', { viewportWidth: 375, viewportHeight: 812 }, () => {
    it('passes automated accessibility checks', () => {
      visitAndInject();
      cy.checkA11y(undefined, undefined, logViolations);
    });
  });

  it('provides the page landmarks and a logical heading structure', () => {
    cy.visit(rootPage);
    cy.get('header').should('be.visible');
    cy.get('nav[aria-label="Primary navigation"]').should('exist');
    cy.get('main#main-content').should('be.visible');
    cy.get('main#main-content h1').should('have.length', 1);
    cy.get('footer').should('be.visible');

    sectionIds.forEach((sectionId, index) => {
      cy.get(`main#main-content > section#${sectionId}`)
        .should('exist')
        .within(() => {
          cy.get(index === 0 ? 'h1' : 'h2').should('have.length', 1);
        });
    });
  });
});
