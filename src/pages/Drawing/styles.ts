import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Warning = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};

    width: 100vw;
    height: 100vh;

    display: none;
    padding: 1rem;

    div {
      padding: 1.25rem 1.5rem;

      background: ${theme.colors.white};
      box-shadow: ${theme.shadow.magical};
      border-radius: 5px;

      h3 {
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.5rem;

        margin-bottom: 0.5rem;
      }

      p {
        font-size: 1.2rem;
        line-height: 1.5rem;
        padding-top: 0.5rem;
        text-align: center;

        color: ${theme.colors.text};

        a {
          color: inherit;
        }
      }
    }

    @media (max-width: 768px) {
      display: grid;
      place-items: center;
    }
  `}
`
