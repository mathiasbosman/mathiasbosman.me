import { Employment } from '../../../../src/components/employment.tsx'
import {
  experienceItemMock,
  experiencesWithOnePlaceAndOneItem,
  experiencesWithTwoPlaces
} from '../fixtures/experience.fixture.ts'

describe('<Employment/>', () => {
  it('Renders correctly with a single item', () => {
    cy.mount(<Employment experiences={experiencesWithOnePlaceAndOneItem}/>)
    cy.get('dl')
      .should('contain.text', experiencesWithOnePlaceAndOneItem[0].place)
      .should('contain.text', experienceItemMock.title)
  })

  it('Renders correctly with multiple experiences', () => {
    cy.mount(<Employment experiences={experiencesWithTwoPlaces}/>)
    let amountPinned = 0
    experiencesWithTwoPlaces.map(exp =>
      exp.items.filter(item => item.pinned).map(() => amountPinned++))
    cy.get('dl').should('have.length', amountPinned)
  })
})
