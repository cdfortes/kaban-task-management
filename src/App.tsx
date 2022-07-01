import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppRouter from './routes'
import GlobalStyle from './styles/global.styles'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
