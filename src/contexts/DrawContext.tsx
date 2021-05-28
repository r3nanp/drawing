import * as React from 'react'

interface DrawContextData {
  isDrawing: boolean
  canvasRef: React.RefObject<HTMLCanvasElement>
  stopDrawing: () => void
  prepareCanvas: () => void
  clearCanvas: () => void
  startDrawing: ({ nativeEvent }: React.MouseEvent) => void
  draw: ({ nativeEvent }: React.MouseEvent) => void
}

interface ProviderProps {
  children: React.ReactNode
}

export const DrawContext = React.createContext({} as DrawContextData)

export function DrawProvider({ children }: ProviderProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const contextRef = React.useRef<CanvasRenderingContext2D | null>(null)
  const [isDrawing, setIsDrawing] = React.useState(false)

  const prepareCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext('2d')
    if (!context) return

    context.scale(2, 2)
    context.lineCap = 'round'
    context.strokeStyle = 'black'
    context.lineWidth = 5
    contextRef.current = context
  }

  const clearCanvas = () => {}

  const startDrawing = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent

    contextRef.current?.beginPath()
    contextRef.current?.moveTo(offsetX, offsetY)

    setIsDrawing(true)
  }

  const stopDrawing = () => {
    contextRef.current?.closePath()

    setIsDrawing(false)
  }

  const draw = ({ nativeEvent }: React.MouseEvent) => {
    const { offsetX, offsetY } = nativeEvent

    if (!isDrawing) return

    contextRef.current?.lineTo(offsetX, offsetY)
    contextRef.current?.stroke()
  }

  return (
    <DrawContext.Provider
      value={{
        canvasRef,
        isDrawing,
        stopDrawing,
        startDrawing,
        draw,
        prepareCanvas,
        clearCanvas,
      }}
    >
      {children}
    </DrawContext.Provider>
  )
}
