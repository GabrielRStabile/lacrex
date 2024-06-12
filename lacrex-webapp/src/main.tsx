import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NavigationSystemProvider } from './contexts/navigation-system-context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavigationSystemProvider>
      <App />
    </NavigationSystemProvider>
  </React.StrictMode>,
)
