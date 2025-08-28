import type { HTMLSimpleLink } from '@shared/utils.ts';
import { htmlSimpleLinkFixture } from '../../../../../fixtures/utils.fixture.ts';
import { MemoryRouter } from 'react-router-dom';
import NavigationBanner from '@components/common/navigation/navigation-banner.tsx';

describe('<NavigationBanner/> component', () => {
  const mockLinks: HTMLSimpleLink[] = [
    htmlSimpleLinkFixture('/pageA', 'page A'),
    htmlSimpleLinkFixture('/pageB', 'page B'),
  ];

  const mountWithRoute = (initialPath = '/pageA') => {
    cy.mount(
      <MemoryRouter initialEntries={[initialPath]}>
        <NavigationBanner links={mockLinks} rightSlot={<span>foo bar</span>} />
      </MemoryRouter>,
    );
  };

  beforeEach('Force smaller viewport', () => {
    cy.viewport(639, 750);
    mountWithRoute('/pageA');
  });

  it('Should not have visible nav on page load', () => {
    cy.get('#mobile-nav').should('not.be.visible'); // drawer hidden initially
  });

  it('Should render the menu button (collapsed by default)', () => {
    cy.get('button[aria-controls="mobile-nav"]').should('be.visible').and('have.attr', 'aria-expanded', 'false');
  });

  it('Should show breadcrumb for current page', () => {
    cy.get('ol li').should('have.length', 2);
    cy.get('ol li').last().should('have.text', 'page A');
  });

  it('Should render all given links when state is open', () => {
    cy.get('button[aria-controls="mobile-nav"]').click();
    cy.get('#mobile-nav').should('be.visible');
    cy.get('#mobile-nav nav a').should('have.length', mockLinks.length);
  });

  it('Should change visible state when toggling', () => {
    cy.get('button[aria-controls="mobile-nav"]').click();
    cy.get('#mobile-nav').should('be.visible');

    cy.get('button[aria-label="Close menu"]').should('be.visible').click();
    cy.get('#mobile-nav').should('not.be.visible');

    // aria-expanded should reflect state changes
    cy.get('button[aria-controls="mobile-nav"]').should('have.attr', 'aria-expanded', 'false');
  });

  it('Should contain right slot if given', () => {
    cy.get('header').should('contain.text', 'foo bar');
  });
});
