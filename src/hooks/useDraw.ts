import * as React from 'react'
import { DrawContext } from '../contexts/DrawContext'

export const useDraw = () => {
  const context = React.useContext(DrawContext)

  return context
}
