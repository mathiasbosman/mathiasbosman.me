import React from "react";
import Copyright from "../../src/components/Copyright";


describe('<Copyright /> component tests', () => {
  it('renders without version', () => {
    cy.mount(<Copyright name='foo bar'/>);
    cy.get('span').should('have.html', '© ' + new Date(Date.now()).getFullYear() + ' foo bar');
  });

  it('renders with version', () => {
    cy.mount(<Copyright name='foo bar' version='1.0' />);
    cy.get('span').should('have.html', '© ' + new Date(Date.now()).getFullYear() + ' foo bar v1.0');
  });
})