import * as React from 'react'
import { Link } from 'react-router-dom'

import Logo from '/icon.svg'
import * as S from './styles'

export function NotFound() {
  return (
    <S.Container>
      <S.LeftSide>
        <h1>Drawing!!</h1>
        <img src={Logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <h2>It looks like you are lost</h2>
        <Link to="/">
          <button>Return to the home page</button>
        </Link>
      </S.RightSide>
    </S.Container>
  )
}
