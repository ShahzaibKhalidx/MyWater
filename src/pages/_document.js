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

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />

          {/* public assets end */}
          
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
