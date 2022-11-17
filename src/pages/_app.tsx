import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals'
import { ThemeProvider } from '@emotion/react'
import Theme from '../styles/theme/default'

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
