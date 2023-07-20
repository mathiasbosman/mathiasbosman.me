import { type HTMLImage } from '../../../../src/shared/utils.tsx'
import Imagecarousel from '../../../../src/components/imagecarousel.tsx'

describe('<Imagecarousel/>', () => {
  let mockImageData: string

  before('Load mock images', () => {
    cy.fixture('images/cypress_logo.webp', 'base64').then(data => {
      mockImageData = data
    })
  })

  it('Renders correctly', () => {
    const mockImageSrc = `data:image/webp;base64,${mockImageData}`
    const imageSet: HTMLImage[] = [
      {
        src: mockImageSrc,
        alt: 'mock image 1'
      },
      {
        src: mockImageSrc,
        alt: 'mock image 2'
      }
    ]

    cy.mount(<Imagecarousel images={imageSet} />)
    cy.get('img').should('be.visible').should('have.length', imageSet.length)
    cy.get('img').eq(0).parent().should('have.class', '-rotate-2')
    cy.get('img').eq(1).parent().should('have.class', 'rotate-2')
  })
})
