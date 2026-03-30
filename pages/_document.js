import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Andrew Youn - Software Engineer at Meta. Carnegie Mellon University graduate with a B.S. in Mechanical Engineering and Computer Science." />
        <meta name="author" content="Andrew Youn" />
        <meta property="og:title" content="Andrew Youn - Software Engineer" />
        <meta property="og:description" content="Software Engineer at Meta. CMU graduate in Mechanical Engineering + Computer Science." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
