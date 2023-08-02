import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app.tsx'
import '@/index.css'
import { Analytics } from '@vercel/analytics/react'

// Inject React + add Vercel analytics
ReactDOM.createRoot(document.getElementById('app-root')!).render(
  <React.StrictMode>
    <App/>
    <Analytics/>
  </React.StrictMode>
)
