import { LinkIcon } from '../../../../../src/shared/icons'
import { htmlSimpleLinkFixture } from '../../fixtures/utils.fixture'
import FollowIconLink from '../../../../../src/components/typography/folow-iconlink'

describe('<FollowIconLink/>', () => {
  it('Renders correctly', () => {
    cy.mount(<FollowIconLink link={htmlSimpleLinkFixture('/href', 'foo bar')} icon={LinkIcon}/>)
    cy.get('a').should('be.visible')
    .should('have.attr', 'href', '/href')
    .should('have.attr', 'aria-label', 'Follow me on foo bar')
    cy.get('path').should('have.attr', 'd', LinkIcon.svgPath)
    cy.get('span').should('have.text', 'Follow me on foo bar')
  })

  it('Renders with given pre- and postfix', () => {
    cy.mount(<FollowIconLink
      prefix={'Join me on '}
      postfix={' for more!'}
      link={htmlSimpleLinkFixture('/href', 'foo bar')}
      icon={LinkIcon} />)
    cy.get('span').should('have.text', 'Join me on foo bar for more!')
  })

  it('Line-height of text should equal height of icon', () => {
    cy.mount(<FollowIconLink link={htmlSimpleLinkFixture('/href', 'text')} icon={LinkIcon}/>)
    cy.get('svg').invoke('css', 'height').then(iconHeight => {
      cy.get('span').should('have.css', 'line-height', iconHeight)
    })
  })
})
