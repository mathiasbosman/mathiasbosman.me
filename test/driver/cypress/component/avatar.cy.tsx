import Avatar, { AvatarSize } from '../../../../src/components/avatar.tsx'
import { htmlImageFixture } from '../fixtures/utils.fixture.tsx'

describe('<Avatar/>', () => {
  it('Renders correctly', () => {
    cy.mount(<Avatar image={htmlImageFixture('foo.webp', 'img_alt')} size={AvatarSize.s}/>)
    cy.get('a').should('exist').should('have.attr', 'href', '/')
      .within(() => {
        cy.get('img').should('be.visible')
          .should('have.attr', 'alt', 'img_alt')
          .should('have.attr', 'src', 'foo.webp')
      })
  })

  it('Sizes are applied correctly', () => {
    cy.mount(<Avatar image={htmlImageFixture('foo.webp', 'img_alt')} size={AvatarSize.s}/>)
    cy.get('div')
      .should('have.class', 'w-16')
      .should('have.class', 'h-16')
    cy.get('img')
      .should('have.class', 'w-16')
      .should('have.class', 'h-16')
  })
})
