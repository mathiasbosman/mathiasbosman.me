import type { HTMLImage } from '../../../../src/shared/utils.tsx'
import ImageCarousel from '../../../../src/components/image-carousel.tsx'
import { htmlImageFixture } from '../fixtures/utils.fixture.tsx'

describe('<Imagecarousel/>', () => {
  let mockImageData: string

  before('Load mock images', () => {
    cy.fixture('images/cypress_logo.webp', 'base64').then(data => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      mockImageData = data
    })
  })

  it('Renders correctly', () => {
    const mockImageSrc = `data:image/webp;base64,${mockImageData}`
    const imageSet: HTMLImage[] = [
      htmlImageFixture(mockImageSrc, 'mock image 1'),
      htmlImageFixture(mockImageSrc, 'mock image 2')
    ]

    cy.mount(<ImageCarousel images={imageSet}/>)
    cy.get('img').should('be.visible').should('have.length', imageSet.length)
    cy.get('img').eq(0).parent().should('have.class', '-rotate-2')
    cy.get('img').eq(1).parent().should('have.class', 'rotate-2')
  })
})
