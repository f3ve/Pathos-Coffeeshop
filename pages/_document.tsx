/*
  This is a custom document file. The main reason I created this is to make
  Material-ui styles work with NextJS.
*/

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='theme-color' content='#ffffff' />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons'
          />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css2?family=Nova+Round&family=Roboto+Condensed&display=swap'
          />
          <style jsx global>
            {`
              html,
              body {
                height: 100%;
                width: 100%;
              }
              *,
              *:after,
              *:before {
                box-sizing: border-box;
              }
              body {
                font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
                font-size: 1rem;
                margin: 0;
                background-color: #ffffff;
              }
              a {
                color: inherit;
                text-decoration: none;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,

    styles: [
      <React.Fragment key='styles'>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
