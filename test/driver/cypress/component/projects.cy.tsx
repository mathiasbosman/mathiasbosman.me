import type { Project } from '@models/config/project.config'
import Projects from '@components/projects'
import { projectFixture } from '../fixtures/project.fixture'

describe('<Projects/>', () => {
  let mockImageSrc: string

  before('Load mock images', () => {
    cy.fixture('images/cypress_logo.webp', 'base64').then(data => {
      mockImageSrc = `data:image/webp;base64,${data}`
    })
  })

  it('Renders all projects when pinned is false', () => {
    const mockProjectList: Project[] = [
      projectFixture('project A', true, mockImageSrc),
      projectFixture('project B', true, mockImageSrc),
      projectFixture('project C', false, mockImageSrc)
    ]
    cy.mount(<Projects projects={mockProjectList} pinned={false}/>)
    cy.get('h2').should('have.length', mockProjectList.length)
  })

  it('Renders only pinned projects when pinned is true', () => {
    const mockProjectList: Project[] = [
      projectFixture('project A', true, mockImageSrc),
      projectFixture('project B', true, mockImageSrc),
      projectFixture('project C', false, mockImageSrc)
    ]
    cy.mount(<Projects projects={mockProjectList} pinned={true}/>)
    cy.get('h2').should('have.length', 2)
  })
})
