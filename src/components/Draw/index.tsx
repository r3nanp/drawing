import * as React from 'react'
import { useDraw } from '../../hooks/useDraw'

export const Draw = () => {
  const { startDrawing, stopDrawing, draw, canvasRef } = useDraw()

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
    />
  )
}
