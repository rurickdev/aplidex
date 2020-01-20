
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <meta name='theme-color' content='#feb100' />
          <link
            rel='icon'
            type='image/png'
            href='https://s3.us-east-2.amazonaws.com/cdn.aplidex.now.sh/favicon.png'
          />
        </Head>
        <body className='has-navbar-fixed-top'>
          <Main />
          <NextScript />
          <script src='https://kit.fontawesome.com/846cbbb684.js' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
