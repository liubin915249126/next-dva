import React from 'react'
import App, { Container } from 'next/app'
// import '~/common/common.less'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        {/* <style jsx global>{`
          
        `}</style> */}
      </Container>
    )
  }
}

export default MyApp