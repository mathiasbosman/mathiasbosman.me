import { Contact } from '../../../../src/components/contact.tsx'

describe('<Contact/>', () => {
  it('renders correctly', () => {
    cy.mount(<Contact/>)
    cy.get('input[aria-label="Your subject"]').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('input is handled correctly', () => {
    cy.mount(<Contact/>)
    const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    cy.get('input[aria-label="Your subject"]').type(dummyText)
      .should('have.value', dummyText.substring(0, 30))
  })
})
