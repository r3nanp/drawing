import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import App from './App'
import { DrawProvider } from './contexts/DrawContext'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/globals'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DrawProvider>
        <GlobalStyles />
        <App />
      </DrawProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
