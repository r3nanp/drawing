import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import { DrawProvider } from './contexts/DrawContext'

ReactDOM.render(
  <React.StrictMode>
    <DrawProvider>
      <App />
    </DrawProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
