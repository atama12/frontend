import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>

  </>
  );
}
