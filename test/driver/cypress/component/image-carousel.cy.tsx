import type { HTMLImage } from '@shared/utils.ts'
import ImageCarousel from '@components/image-carousel.tsx'
import { htmlImageFixture } from '../fixtures/utils.fixture.ts'

describe('<Imagecarousel/>', () => {
  let mockImageSrc: string
  let imageSet: HTMLImage[]

  before('Load mock images', () => {
    cy.viewport(1000,500)
    cy.fixture('images/cypress_logo.webp', 'base64').then(data => {
      mockImageSrc = `data:image/webp;base64,${data}`
      imageSet = [
        htmlImageFixture(mockImageSrc, 'mock image 1'),
        htmlImageFixture(mockImageSrc, 'mock image 2'),
        htmlImageFixture(mockImageSrc, 'mock image 3'),
        htmlImageFixture(mockImageSrc, 'mock image 4'),
        htmlImageFixture(mockImageSrc, 'mock image 5'),
        htmlImageFixture(mockImageSrc, 'mock image 6')
      ]
    })
  })

  it('Renders default correctly', () => {
    cy.mount(<ImageCarousel images={imageSet}/>)
    cy.get('img').should('be.visible').should('have.length', 5)
    cy.get('img').eq(0).parent().should('have.class', '-rotate-2')
    cy.get('img').eq(1).parent().should('have.class', 'rotate-2')
  })

  it('Amount of items is respected when total is higher', () => {
    cy.mount(<ImageCarousel amountToShow={imageSet.length - 1} images={imageSet}/>)
    cy.get('img').should('be.visible').should('have.length', imageSet.length - 1)
  })

  it('Amount of items is respected when total is lower', () => {
    cy.mount(<ImageCarousel amountToShow={imageSet.length + 1} images={imageSet}/>)
    cy.get('img').should('be.visible').should('have.length', imageSet.length)
  })
})
