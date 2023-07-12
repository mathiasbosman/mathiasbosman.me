import { Router } from '@vaadin/router'
import './components/page'

const routes = [
  {
    path: '/',
    component: 'sandbox-home-page',
    action: async () => { await import('./pages/home.page') }
  },
  {
    path: '(.*)',
    component: 'sandbox-error-page',
    action: async () => { await import('./pages/error.page') }
  }
]

const container = document.getElementById('app')
const router = new Router(container)
router.setRoutes(routes).then()
