import PageTitle from '../../../../../src/components/typography/page-title'

describe('<PageTitle/>', () => {
  it('renders without children', () => {
    cy.mount(<PageTitle title={'foo bar'}/>)
    cy.get('h1').should('have.text', 'foo bar')
    cy.get('p').should('not.exist')
  })

  it('renders <p> with children', () => {
    cy.mount(<PageTitle title={'foo'}>bar</PageTitle>)
    cy.get('h1').should('have.text', 'foo')
    cy.get('p').should('have.text', 'bar')
  })
})
