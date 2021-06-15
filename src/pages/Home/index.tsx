import * as React from 'react'
import { Link } from 'react-router-dom'

import icon from '/icon.svg'
import * as S from './styles'

export default function Home() {
  return (
    <>
      <S.Header>
        <img src={icon} alt="Logo" />

        <span>Drawing!</span>
      </S.Header>

      <S.Container>
        <div>
          <h1>
            Start now to draw your <span>best pictures</span> or not...
          </h1>
        </div>

        <S.Content>
          <Link to="/app">
            <button>Get started</button>
          </Link>

          <a className="github" href="https://github.com/r3nanp">My Github</a>
        </S.Content>
      </S.Container>
    </>
  )
}
