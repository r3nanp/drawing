import * as React from 'react'
import { DrawProvider } from './contexts/DrawContext'

import { Routes } from './routes'

export default function App() {
  return (
    <DrawProvider>
      <Routes />
    </DrawProvider>
  )
}
