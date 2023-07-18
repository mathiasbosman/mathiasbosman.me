import { type HTMLSimpleLink } from '../../shared/utils.tsx'
import { type RouteObject } from 'react-router-dom'

export const publicPages: HTMLSimpleLink[] = [
  {
    href: '/',
    text: 'Home'
  }
]

export const routes: RouteObject[] = [
  {
    path: '/',
    element: '<HomePage></HomePage>'
  }
]
