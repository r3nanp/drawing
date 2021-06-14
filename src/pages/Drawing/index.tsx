import * as React from 'react'
import { Draw } from '../../components/Draw'
import { PaintingDashboard } from '../../components/PaintingDashboard'

import * as S from './styles'

export default function Drawing() {
  return (
    <>
      <S.Container>
        <Draw />
        <PaintingDashboard />
      </S.Container>

      <S.Warning>
        <div>
          <h3>This site is optimized for desktop</h3>
          <p>
            Please visit &nbsp;
            <a href="https://drawing.r3nanp.vercel.app">
              drawing.r3nanp.vercel.app
            </a>
            &nbsp; on a desktop to start drawing!
          </p>
        </div>
      </S.Warning>
    </>
  )
}
