import {
  createGlobalStyle,
  DefaultTheme,
  css,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

export const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; //15px
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  @media(max-width: 700px) {
    html {
      font-size: 75%;
    }
  }

  @media(max-width: 590px) {
    html {
      font-size: 62.25%;
    }
  }

  body, html {
    ${({ theme }) => css`
      background: ${theme.colors.primary};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizelegibility !important;
      font-family: ${theme.fonts.family};
    `}
  }
`
