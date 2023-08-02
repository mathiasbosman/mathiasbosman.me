import type { ReactElement } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from '@models/config/navigation.config'

const router = createBrowserRouter(routes)

export const App = (): ReactElement => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
