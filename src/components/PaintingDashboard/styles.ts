import styled, { css } from 'styled-components'

export const Container = styled.aside`
  width: 25rem;
  height: 100vh;

  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-left: 1px dashed ${theme.colors.black};
  `}

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  z-index: 50;

  position: fixed;
  top: 0;
  right: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 5rem;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .clear {
    display: grid;
    place-items: center;
    ${({ theme }) => css`
      .clear-canvas {
        display: flex;
        align-items: center;

        height: 2.5rem;
        padding: 1rem;
        background: ${theme.colors.red};
        color: ${theme.colors.primary};
        box-shadow: ${theme.shadow.normal};
        border: 0;
        border-radius: 5px;

        font-size: 1rem;
        font-weight: 700;

        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.875);
        }
      }
    `}
  }
`

export const TopContent = styled.div`
  display: grid;
  place-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Dashboard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  > button {
    ${({ theme }) => css`
      padding: 1rem;
      border-radius: 5px;
      border: 0;
      box-shadow: ${theme.shadow.normal};

      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.875);
      }

      &:nth-child(1) {
        background: ${theme.colors.red};
      }

      &:nth-child(2) {
        background: ${theme.colors.blue};
      }

      &:nth-child(3) {
        background: ${theme.colors.purple};
      }

      &:nth-child(4) {
        background: ${theme.colors.black};
      }

      &:nth-child(5) {
        background: ${theme.colors.pink};
      }
    `}
  }
`
