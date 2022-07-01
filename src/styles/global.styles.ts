/* eslint-disable @typescript-eslint/no-unused-vars */
import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ${({ theme }) => css`
    html {
      font-family: 'Popins';
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      background-color: #000112;
      color: #fff;
      font-size: 1rem;
    }
  `}
`

export default GlobalStyle
