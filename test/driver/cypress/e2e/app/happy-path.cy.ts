import { publicTestPages } from '../config.ts';

describe('Happy paths', () => {
  function _navigate(preProcessor: () => void, path: string): void {
    preProcessor();
    // Click the link inside the currently visible nav (desktop or mobile)
    cy.get('nav')
      .filter(':visible')
      .within(() => {
        cy.get(`a[href="${path}"]`).click();
      });
    // Wait for the SPA navigation to finish
    cy.location('pathname').should('eq', path);
  }

  function _navigateTooAndBackHome(navPreProcessor: () => void): void {
    cy.visit('/');
    publicTestPages.forEach((link) => {
      _navigate(navPreProcessor, link);
      // Click the home link in the header (visible on both layouts)
      cy.get('header a[href="/"]').filter(':visible').click();
      cy.location('pathname').should('eq', '/');
    });
  }

  function _navigateEachPage(navPreProcessor: () => void): void {
    publicTestPages.forEach((currentPage) => {
      cy.visit(currentPage);
      publicTestPages
        .filter((link) => link !== currentPage)
        .forEach((link) => {
          cy.log(`Navigation from ${currentPage} to ${link}`);
          _navigate(navPreProcessor, link);
          cy.visit(currentPage);
          cy.location('pathname').should('eq', currentPage);
        });
    });
  }

  context('Small viewport', { viewportWidth: 639, viewportHeight: 1250 }, () => {
    const openHamburgerMenu = () => {
      cy.get('button[aria-controls="mobile-nav"]').should('be.visible');
      cy.get('button[aria-controls="mobile-nav"]').click();
      cy.get('#mobile-nav').should('be.visible');
    };

    it('Should be able to navigate too and back home from each page', () => {
      _navigateTooAndBackHome(openHamburgerMenu);
    });

    it('Should be able to navigate back and forth between public pages', () => {
      _navigateEachPage(openHamburgerMenu);
    });
  });

  context('Medium viewport', { viewportWidth: 640, viewportHeight: 1250 }, () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const noop = () => {};

    it('Should be able to navigate too and back home from each page', () => {
      _navigateTooAndBackHome(noop);
    });

    it('Should be able to navigate back and forth between public pages', () => {
      _navigateEachPage(noop);
    });

    it('Should be able to visit all pages directly', () => {
      publicTestPages.forEach((link) => {
        cy.visit(link);
        cy.location('pathname').should('eq', link);
      });
    });
  });
});
