import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import AboutUsPage from "../components/AboutUs";

export default function AboutUs() {
  return (
    <>
      <Header />
      <Nav page="Quem Somos" subtitle="A maior rede de tratamento pokémon." />
      <AboutUsPage />
      <Footer />
    </>

  )
}