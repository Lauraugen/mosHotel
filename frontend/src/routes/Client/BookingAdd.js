import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import Footer from "../../components/Footer/Footer";
import BookingClientAdd from "src/components/Booking/BookingClientAdd";

function BookingAdd() {
  return (
    <>
      <ClientNavbar />
      <HomeHero
        cName="hero-little"
        heroImg="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2022-03/Fushimi-Inari-taisha.jpg"

        title="Nueva Reserva"
        
      />
      <BookingClientAdd/>
      <Footer />
    </>
  );
}

export default BookingAdd;