import React from 'react'
import Copyright from "../../src/components/Copyright";

describe('<Copyright />', () => {
  it('renders without version', () => {
    let currentYear = new Date(Date.now()).getFullYear();

    cy.mount(<Copyright name='foo bar'/>);
    cy.get('span').should('have.html', '© ' + currentYear + ' foo bar');
  });

  it('renders with version', () => {
    let currentYear = new Date(Date.now()).getFullYear();

    cy.mount(<Copyright name='foo bar' version='1.0'/>);
    cy.get('span')
      .should('have.html', '© ' + currentYear + ' foo bar')
      .should('have.attr', 'data-version', '1.0');
  });
})