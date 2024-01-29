import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import ErrorPage from "../../components/Error";

export default function Error() {
  return (
    <>
      <Header />
      <Nav page="Agendar Consulta" subtitle="Recupere seus pokémons em 5 segundos." />
      <ErrorPage />
      <Footer />
    </>

  )
}