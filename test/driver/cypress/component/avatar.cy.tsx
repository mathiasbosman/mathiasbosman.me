import Avatar, { AvatarSize } from '../../../../src/components/avatar.tsx'
import { type HTMLImage } from '../../../../src/shared/utils.tsx'

const mockImage: HTMLImage = {
  src: 'foo.webp',
  alt: 'img_alt'
}
describe('<Avatar/>', () => {
  it('Renders correctly', () => {
    cy.mount(<Avatar image={mockImage} size={AvatarSize.s}/>)
    cy.get('a').should('exist').should('have.attr', 'href', '/')
      .within(() => {
        cy.get('img').should('be.visible')
          .should('have.attr', 'alt', mockImage.alt)
          .should('have.attr', 'src', mockImage.src)
      })
  })

  it('Sizes are applied correctly', () => {
    cy.mount(<Avatar image={mockImage} size={AvatarSize.s}/>)
    cy.get('div')
      .should('have.class', 'w-16')
      .should('have.class', 'h-16')
    cy.get('img')
      .should('have.class', 'w-16')
      .should('have.class', 'h-16')
  })
})
