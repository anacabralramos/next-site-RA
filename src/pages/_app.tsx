import "../styles/global.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout
      MenuAcordeon={pageProps.MenuAcordeon}
      TitleAcordeon={pageProps.TitleAcordeon}
      logo={pageProps.logo}
      menu={pageProps.menu[0]}
    >
      <Component {...pageProps} />
    </Layout>
  );
}
