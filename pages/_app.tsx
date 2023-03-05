import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "components/header";
import Banner from "components/banner";
import Content from "components/content";
import Footer from "components/footer";
import Background from "@/components/background";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Background></Background>
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer></Footer>
    </>
  );
}
