import Page from '../../../../../src/components/common/page'
import { MemoryRouter } from 'react-router-dom'
import type { ReactElement } from 'react'

describe('<Page>', () => {
  const renderInRouterContext = (title: string): ReactElement => {
    return <MemoryRouter initialEntries={['/', '/pageA']}>
      <Page renderAvatar={true} title={title}/>
    </MemoryRouter>
  }

  it('Title manipulates the document title', () => {
    cy.mount(renderInRouterContext('foo bar'))
    cy.title().should('eq', 'foo bar')
  })

  it('Renders with all expected elements', () => {
    cy.mount(renderInRouterContext('foo bar'))
    cy.get('main').should('be.visible')
    cy.get('header').should('be.visible')
    .get('nav').should('exist')
    cy.get('footer').should('be.visible')
  })
})
