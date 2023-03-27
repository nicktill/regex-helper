import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";

hljs.registerLanguage("python", python);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
