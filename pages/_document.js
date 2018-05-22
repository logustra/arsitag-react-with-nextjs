import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

    render () {
        const { pathname, query } = this.props;

        return (
        <html>
            <Head>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
            {this.props.styleTags}
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </html>
    )
  }
}
