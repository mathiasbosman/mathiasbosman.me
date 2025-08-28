import Navigation from '@components/common/navigation/navigation.tsx';
import type { HTMLSimpleLink } from '@shared/utils.ts';
import { htmlSimpleLinkFixture } from '../../../../../fixtures/utils.fixture.ts';
import { MemoryRouter } from 'react-router-dom';

describe('<Navigation/> component', () => {
  const mockLinks: HTMLSimpleLink[] = [
    htmlSimpleLinkFixture('/pageA', 'page A'),
    htmlSimpleLinkFixture('/pageB', 'page B'),
  ];

  const mountWithRoute = (path = '/pageA') => {
    cy.mount(
      <MemoryRouter initialEntries={[path]}>
        <Navigation leftSlot={<span id="mock_slot">avatar</span>} links={mockLinks} />
      </MemoryRouter>,
    );
  };

  context('Small viewport', { viewportWidth: 639, viewportHeight: 200 }, () => {
    beforeEach(() => mountWithRoute('/pageA'));

    it('Should not show on small viewport', () => {
      cy.get('nav').first().should('not.be.visible');
    });
  });

  context('Medium viewport', { viewportWidth: 640, viewportHeight: 200 }, () => {
    beforeEach(() => mountWithRoute('/pageA'));

    it('Should render on medium viewport', () => {
      cy.get('nav')
        .first()
        .within(() => {
          cy.get('a').should('have.length', mockLinks.length);
        });
      cy.get('#mock_slot').should('be.visible');
    });

    it('Should mark the active link', () => {
      // NavLink renders an <a>, and component adds a <span> underline when active
      cy.get('nav a[href="/pageA"] span').should('exist');
      cy.get('nav a[href="/pageB"] span').should('not.exist');
    });

    it('Should update active link when route changes', () => {
      cy.get('nav a[href="/pageB"]').click(); // triggers MemoryRouter navigation
      cy.get('nav a[href="/pageB"] span').should('exist');
      cy.get('nav a[href="/pageA"] span').should('not.exist');
    });
  });
});
