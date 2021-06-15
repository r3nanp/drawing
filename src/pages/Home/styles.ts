import styled, { css } from 'styled-components'

const buttonCss = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 250px;
  height: 54px;

  border: 0;
  border-radius: 8px;

  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.75rem;
  padding: 0.5rem 1rem;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(0.875);
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 4rem;
  padding: 1.25rem;

  margin: 1rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  span {
    margin-left: 1rem;
    font-size: 2rem;
    font-weight: 700;
    font-family: monospace;
    letter-spacing: 0.0875rem;
    line-height: 1.5rem;
  }
`

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  padding: 0 1.5rem;

  overflow-y: hidden;
  position: relative;

  div {
    display: grid;
    place-items: center;

    text-align: center;

    h1 {
      margin-bottom: 1rem;
      font-weight: 600;
      letter-spacing: 0.00875rem;

      font-size: 3rem;

      > span {
        ${({ theme }) => css`
          color: ${theme.colors.blue};
        `}
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0.5rem;

  ${({ theme }) => css`
    button {
      ${buttonCss}

      background: ${theme.colors.blue};
      color: ${theme.colors.white};
      margin-bottom: 1rem;
    }

    .github {
      ${buttonCss}

      background: ${theme.colors.purple};
      color: ${theme.colors.white};
    }
  `}
`
