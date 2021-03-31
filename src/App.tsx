import {
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import { Provider as ReactReduxProvider } from 'react-redux'
import theme from './theme/default'
import store from './store'

export default function App({ Component, pageProps }) {
  return (
    <ReactReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <Preflight />
        <Component {...pageProps} />
      </ThemeProvider>
    </ReactReduxProvider>
  )
}
