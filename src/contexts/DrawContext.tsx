import * as React from 'react'

type DrawContextData = {
  canvasRef: React.RefObject<HTMLCanvasElement>
  stopDrawing: () => void
  clearCanvas: () => void
  prepareCanvas: () => void
  changeColor: (color: string) => void
  startDrawing: (props: React.MouseEvent) => void
  draw: (props: React.MouseEvent) => void
}

type ProviderProps = {
  children: React.ReactNode
}

export const DrawContext = React.createContext({} as DrawContextData)

export function DrawProvider({ children }: ProviderProps) {
  const [isDrawing, setIsDrawing] = React.useState(false)
  const [color, setColor] = React.useState('black')

  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const contextRef = React.useRef<CanvasRenderingContext2D | null>(null)

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
    context.strokeStyle = color
    context.lineWidth = 5
    contextRef.current = context
  }

  const changeColor = (color: string) => {
    setColor(color)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.fillStyle = '#f1f2f5'
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

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

  React.useLayoutEffect(() => {
    prepareCanvas()
  }, [color])

  return (
    <DrawContext.Provider
      value={{
        canvasRef,
        stopDrawing,
        startDrawing,
        draw,
        prepareCanvas,
        clearCanvas,
        changeColor
      }}
    >
      {children}
    </DrawContext.Provider>
  )
}
