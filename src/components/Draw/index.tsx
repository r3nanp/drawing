import * as React from 'react'
import { useDraw } from '../../hooks/useDraw'

import styles from './styles.module.css'

export const Draw = () => {
  const { startDrawing, stopDrawing, draw, canvasRef, prepareCanvas } =
    useDraw()

  React.useEffect(() => {
    prepareCanvas()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      className={styles.canvas}
    />
  )
}
