import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import Footer from "../../components/Footer/Footer";
import Booking from "../../components/Booking/BookingClient";

function BookingClient() {
  return (
    <>
      <ClientNavbar />
      <HomeHero
        cName="hero-little"
        heroImg="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2022-03/Fushimi-Inari-taisha.jpg"

        title="Reservas"
        btnClass="show"
        buttonText="Nueva reserva"
        url="/bookingClientAdd"
      />
      <Booking />
      <Footer />
    </>
  );
}

export default BookingClient;