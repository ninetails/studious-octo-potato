import 'styled-components'
import { DefaultTheme as XStyledDefaultTheme } from '@xstyled/styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends XStyledDefaultTheme {
    /* Customize your theme */
  }
}

declare module '@xstyled/system' {
  export * from 'styled-system'
}
