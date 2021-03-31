import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import theme from './theme/default'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
