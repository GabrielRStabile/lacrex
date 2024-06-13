import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import { NavigationSystemProvider } from './contexts/navigation-system-context.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavigationSystemProvider>
      <App />
      <Toaster />
    </NavigationSystemProvider>
  </React.StrictMode>,
)
