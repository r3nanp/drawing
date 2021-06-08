import * as React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'

export default function Home() {
  return (
    <S.Container>
      <S.Content>
        <h2>Start to draw the best draws or not...</h2>
        <Link to="/app">
          <button>Start drawing!</button>
        </Link>
      </S.Content>
    </S.Container>
  )
}
