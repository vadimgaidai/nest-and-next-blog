import { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache, Global } from '@emotion/react'

import createEmotionCache from 'src/common/createEmotionCache'
import { theme, GlobalStyles } from 'ui'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: FC<MyAppProps> = ({ Component, emotionCache = clientSideEmotionCache, pageProps }) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <title>Blog</title>
    </Head>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <CssBaseline />
      <NextNProgress options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
)

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
}

export default MyApp
