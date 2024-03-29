import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { App } from './App'
import { Toaster } from 'sonner'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <App />
    <Toaster richColors/>
  </React.StrictMode>
)