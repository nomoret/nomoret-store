import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    console.log(initialProps);
    return { ...initialProps };
  }
  render() {
    return (
      <html>
        <Head>
          <title>Nomore Store</title>
          <meta name="author" content={"test"} />
          <link href="/static/styles.css" rel={"stylesheet"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
