import styled, { css } from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
  }
`

export const LeftSide = styled.div`
  display: grid;
  place-items: center;

  h1 {
    font-size: 2rem;
    line-height: 1.5rem;
    letter-spacing: 0.0875rem;
  }
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  > h2 {
    font-size: 1.5rem;
    letter-spacing: 0.0875em;
    line-height: 1.5rem;
  }

  ${({ theme }) => css`
    button {
      padding: 1rem;
      border-radius: 5px;
      font-size: 1rem;

      border: none;
      color: ${theme.colors.white};
      background: ${theme.colors.blue};
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.8);
      }
    }
  `}
`
