import Page from '@components/common/page.tsx';
import { MemoryRouter } from 'react-router-dom';
import type { ReactElement } from 'react';

describe('<Page/> component', () => {
  const renderInRouterContext = (): ReactElement => {
    return (
      <MemoryRouter initialEntries={['/', '/pageA']}>
        <Page renderAvatar={true} />
      </MemoryRouter>
    );
  };

  it('Should render with all expected elements', () => {
    cy.mount(renderInRouterContext());
    cy.get('main').should('be.visible');
    cy.get('nav').should('exist');
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});
