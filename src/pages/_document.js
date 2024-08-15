import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* meta begin */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          {/* meta end */}

          {/* favicon begin */}
          <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
	        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
          {/* favicon */}
          {/* Fonts */}
          {/* public assets begin */}
          <link rel="stylesheet" href="/css/vendors/bootstrap.css" />
          <link rel="stylesheet" href="/fonts/font-awesome/css/font-awesome.css" />
          <link rel="stylesheet" href="/css/vendors/magnific-popup.css" />
          {/* public assets end */}
          <script src="https://app.boei.help/embed/k/ef6462c4-7c77-4606-9cab-0ba16f69ee99" async></script>
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
