import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html style={{ overflow: "hidden" }}>
        <Head />
        <body>
          <Main />
          <div id="toaster" />
          <div id="overlay" />
          <div id="animation" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
