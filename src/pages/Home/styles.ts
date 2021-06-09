import styled, { css } from 'styled-components'

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;

  flex: 1 1 0%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}

  h2 {
    margin-bottom: 1rem;
  }
`

export const Content = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 30rem;
  padding: 4rem;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    box-shadow: ${theme.shadow.normal};
    background: ${theme.colors.primary};

    button {
      display: grid;
      place-items: center;
      text-align: center;

      border: 0;
      border-radius: 5px;

      background: ${theme.colors.blue};
      color: ${theme.colors.white};

      font-size: 1.2rem;
      font-weight: 800;
      width: 100%;
      padding: 1rem;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.875);
      }
    }
  `}
`
