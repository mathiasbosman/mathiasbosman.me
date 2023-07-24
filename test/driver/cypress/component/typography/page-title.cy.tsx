import PageTitle from '../../../../../src/components/typography/page-title'

describe('<PageTitle/>', () => {
  it('Renders', () => {
    cy.mount(<PageTitle title={'foo bar'}/>)
    cy.get('h1').should('have.text', 'foo bar')
  })

  it('Renders subtitle slot with children', () => {
    cy.mount(<PageTitle title={'foo'} subtitleSlot={<span id="mock_slot">subtitle</span>}/>)
    cy.get('#mock_slot')
    .should('have.text', 'subtitle')
    .should('be.visible')
  })
})
