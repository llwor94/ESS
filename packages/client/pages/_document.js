import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
          <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js" />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
