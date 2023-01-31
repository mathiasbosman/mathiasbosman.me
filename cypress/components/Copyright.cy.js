import React from 'react'
import Copyright from "../../src/components/Copyright";

describe('<Copyright />', () => {
  it('renders without version', () => {
    cy.mount(<Copyright name='foo bar'/>);
    cy.get('span').should('have.html', '© ' + new Date(Date.now()).getFullYear() + ' foo bar');
  });
})