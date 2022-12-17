import AreasContainer from "../components/AreasContainer";
import Footer from "../components/Footer";
import axios from "axios";
import OpeningSection from "../components/OpeningSection";

export interface FooterHome {
  span1: string;
  span2: string;
}
export interface Card {
  title: string;
  Description: string;
  Background: string;
  Icon: string;
}

export interface MenuAcordeon {
  Option: string;
  Option1: string;
}
export interface Menu {
  Option: string;
  Option2: string;
  Option3: string;
  Option4: string;
}
export interface HomeProps {
  Title: string;
  Span: string;
  Background: string;
  LeftCard: Card;
  MiddleCard: Card;
  RightCard: Card;
  footer: FooterHome;
}

export default function Home({
  Title,
  Span,
  Background,
  LeftCard,
  MiddleCard,
  RightCard,
  footer,
}: HomeProps) {
  return (
    <div>
      <main className="h-screen font-roboto bg-lime">
        <OpeningSection title={Title} background={Background} />
        <AreasContainer
          Span={Span}
          LeftCard={LeftCard}
          MiddleCard={MiddleCard}
          RightCard={RightCard}
        />
        <Footer span1={footer.span1} span2={footer.span2} />
      </main>
    </div>
  );
}

// Server Side Rendering - getServerSideProps
// Constroi a interface antes do acesso a aplicação
// O browser não realiza as requisições
// Static Side generation - getStaticProps
// Gera uma versão estática das páginas com requisições
// Se alguem quiser acessar uma página com determinada requisição que já havia sido realizada anteriormente, há uma versão dessa página estática em cache
// Carrega os dados do lado do servidor antes de mostrar a página
export async function getStaticProps() {
  const url = process.env.DATA;
  const { data } = await axios.get(`${url}`);
  return {
    props: data.Home,
    // O revalidate não funciona no servidor de desenvolvimento, apenas produção
    revalidate: 60, // quantos segundos vc quer que a página se mantenha em cache
  };
}
