import Document, { Head, Main, NextScript } from 'next/document';
import { renderToSheetList } from 'fela-dom';
import getFelaRenderer from '../getFelaRenderer';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const renderer = getFelaRenderer();
    const originalRenderPage = ctx.renderPage;

    renderer.renderStatic(
      `
        @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
        @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

        *,
        *::before,
        *::after {
          box-sizing: border-box;
          font-family: 'Nunito', sans-serif;
        }

        html {
          overflow-x: hidden;
        }

        body {
          margin: 0;
          padding: 0;
          min-height: 100vh;
          position: relative;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Roboto', sans-serif;
        }

        p {
          margin: 0
        }
      `,
    );

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => <App {...props} renderer={renderer} />, // eslint-disable-line
    });

    const initialProps = await Document.getInitialProps(ctx);
    const sheetList = renderToSheetList(renderer);
    return {
      ...initialProps,
      sheetList,
    };
  }

  render() {
    const styleNodes = this.props.sheetList.map(
      ({
        type, rehydration, support, media, css,
      }) => (
        <style
          dangerouslySetInnerHTML={{ __html: css }} // eslint-disable-line
          data-fela-id=""
          data-fela-rehydration={rehydration}
          data-fela-support={support}
          data-fela-type={type}
          key={`${type}-${media}`}
          media={media}
        />
      ),
    );

    return (
      <html lang="en">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-143621851-3" />
          <script dangerouslySetInnerHTML={{ // eslint-disable-line
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-143621851-3');`,
          }}
          />
          <meta name="author" content="HaveALook UG" />
          <meta name="publisher" content="HaveALook UG" />
          <meta name="copyright" content="HaveALook UG" />
          <meta name="description" content="Add Google Analytics to any Google Form with just one click! Track visitors on your Google Forms!" />
          <meta name="keywords" content="google, forms, analytics, tracking, googleforms, gta, form, survey" />
          <meta name="page-type" content="Software" />
          <meta httpEquiv="content-language" content="en-us" />
          <meta name="robots" content="index, follow" />
          <title>GFormAnalytics - Add Analytics to any Google Form with 1 click!</title>
          {styleNodes}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
