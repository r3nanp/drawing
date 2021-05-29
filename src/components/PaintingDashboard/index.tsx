import * as React from 'react'
import { useDraw } from '../../hooks/useDraw'

import * as S from './styles'

export const PaintingDashboard = () => {
  const { clearCanvas, changeColor } = useDraw()

  return (
    <S.Container>
      <S.TopContent>
        <h2>Choose your colors</h2>
      </S.TopContent>

      <S.Dashboard>
        <button onClick={() => changeColor('red')}></button>
        <button onClick={() => changeColor('#2aa9e0')}></button>
        <button onClick={() => changeColor('#6633cc')}></button>
        <button onClick={() => changeColor('black')}></button>
        <button onClick={() => changeColor('pink')}></button>
      </S.Dashboard>
      <div className="clear">
        <button className="clear-canvas" onClick={clearCanvas}>
          Clear canvas
        </button>
      </div>
    </S.Container>
  )
}
