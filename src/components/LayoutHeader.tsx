// import Layout from "../components/layout";
import Header from "./Header";
import { LayoutProps, Menu } from "../pages";

export default function MyApp({
  logo,
  menu,
  TitleAcordeon,
  MenuAcordeon,
  children,
}: LayoutProps) {
  return (
    <div>
      <Header
        logo={logo}
        menu={menu[0]}
        TitleAcordeon={TitleAcordeon}
        MenuAcordeon={MenuAcordeon}
      />
      <main className="h-screen font-roboto bg-lime">{children}</main>
    </div>
    // <Layout>
    //   <Component {...pageProps} />
    // </Layout>
  );
}
