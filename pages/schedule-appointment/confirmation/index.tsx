import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import ConfirmationPage from "../../components/Confirmation";

export default function Confirmation() {
  return (
    <>
      <Header />
      <Nav page="Agendar Consulta" subtitle="Recupere seus pokémons em 5 segundos." />
      <ConfirmationPage />
      <Footer />
    </>

  )
}