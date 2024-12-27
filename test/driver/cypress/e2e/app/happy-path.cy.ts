import { allPages, publicTestPages } from '../config.ts';

describe('Happy paths', () => {
  function _navigate(preProcessor: () => void, path: string): void {
    preProcessor();
    cy.get('nav')
      .filter(':visible')
      .within(() => {
        cy.get(`a[href="${path}"]`).click();
      });
  }

  function _navigateTooAndBackHome(navPreProcessor: () => void): void {
    cy.visit('/');
    publicTestPages.forEach((path) => {
      _navigate(navPreProcessor, path);
      cy.get('header a[href="/"]').filter(':visible').click();
      cy.location().should((loc) => expect(loc.pathname).to.eq('/'));
    });
  }

  function _navigateEachPage(navPreProcessor: () => void): void {
    publicTestPages.forEach((currentPath) => {
      cy.visit(currentPath);
      publicTestPages
        .filter((link) => link !== currentPath)
        .forEach((link) => {
          cy.log('Navigation from ' + currentPath + ' to ' + link);
          _navigate(navPreProcessor, link); // return to starting point
          cy.visit(currentPath);
        });
    });
  }

  context(
    'Small viewport',
    {
      viewportWidth: 639,
      viewportHeight: 1250,
    },
    () => {
      const openHamburgerMenu = () => {
        cy.get('button[aria-expanded="true"]').click();
      };

      it('Should be able to navigate too and back home from each page', () => {
        _navigateTooAndBackHome(openHamburgerMenu);
      });

      it('Should be able to navigate back and forth between public pages', () => {
        _navigateEachPage(openHamburgerMenu);
      });
    },
  );

  context(
    'Medium viewport',
    {
      viewportWidth: 640,
      viewportHeight: 1250,
    },
    () => {
      it('Should be able to navigate too and back home from each page', () => {
        _navigateTooAndBackHome(() => {
          return;
        });

        it('Should be able to navigate back and forth between public pages', () => {
          _navigateEachPage(() => {
            return;
          });
        });
      });

      it('Should be able to visit all pages directly', () => {
        allPages.forEach((page) => {
          cy.visit(page);
        });
      });
    },
  );
});
