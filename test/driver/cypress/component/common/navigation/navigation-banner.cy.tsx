import type { HTMLSimpleLink } from '@shared/utils.ts';
import { htmlSimpleLinkFixture } from '../../../../../fixtures/utils.fixture.ts';
import { MemoryRouter } from 'react-router-dom';
import NavigationBanner from '@components/common/navigation/navigation-banner.tsx';

describe('<NavigationBanner/> component', () => {
  const mockLinks: HTMLSimpleLink[] = [
    htmlSimpleLinkFixture('/pageA', 'page A'),
    htmlSimpleLinkFixture('/pageB', 'page B'),
  ];

  beforeEach('Force smaller viewport', () => {
    cy.viewport(639, 750);
    cy.mount(
      <MemoryRouter>
        <NavigationBanner links={mockLinks} location={'/pageA'} rightSlot={<span>foo bar</span>} />
      </MemoryRouter>,
    );
  });

  it('Should not have visible nav on page load', () => {
    cy.get('nav').should('not.be.visible');
  });

  it('Should render button on smaller viewport', () => {
    cy.get('button[aria-expanded="true"]').should('be.visible');
  });

  it('Should show breadcrumb', () => {
    const listItems = cy.get('ol li');
    listItems.should('have.length', 2);
    listItems.last().should('have.text', 'page A');
  });

  it('Should render all given links when state is open', () => {
    cy.get('button[aria-expanded="true"]').click();
    cy.get('nav a').should('have.length', mockLinks.length);
  });

  it('Should change visible state when clicking button', () => {
    cy.get('button[aria-expanded="true"]').click();
    cy.get('nav').should('be.visible');

    const closeButton = cy.get('button[aria-label="Close menu"]');
    closeButton.should('be.visible');
    closeButton.click();
    cy.get('nav').should('not.be.visible');
  });

  it('Should contain right slot if given', () => {
    cy.get('header').should('contain.html', '<span>foo bar</span>');
  });
});
