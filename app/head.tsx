/**
 * This file is used to render the <head> tag of the page.
 *  - https://nextjs.org/docs/advanced-features/custom-document
 */
export default function Head() {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Next.js 13 starter template" />
      <link rel="icon" href="/favicon.ico" />
      <title>Next.js 13 starter template</title>
    </head>
  );
}
