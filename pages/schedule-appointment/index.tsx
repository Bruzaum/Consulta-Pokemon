import Header from "../components/Header";
import Footer from "../components/Footer";
// import ScheduleAppointmentPage from "../components/ScheduleAppointment";
import Nav from "../components/Nav";

export default function ScheduleAppointment() {
  return (
    <>
      <Header />
      <Nav page="Agendar Consulta" subtitle="Recupere seus pokémons em 5 segundos." />
      {/* <ScheduleAppointmentPage /> */}
      <Footer />
    </>

  )
}