import type { AppProps } from "next/app";
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
