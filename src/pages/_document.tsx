import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="theme-color" content="#06C9AF" />
          <meta
            name="description"
            content="Web client for the Phylogeny Explorer Project"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#06c9af" />
          <meta
            name="apple-mobile-web-app-title"
            content="Phylogeny Explorer"
          />
          <meta name="application-name" content="Phylogeny Explorer" />
          <meta name="msapplication-TileColor" content="#06c9af" />
          <meta name="theme-color" content="#2b3034" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
