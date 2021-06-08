import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  place-items: center;
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`

export const LoadingComponent = () => {
  return (
    <Container>
      <Spinner />
    </Container>
  )
}
