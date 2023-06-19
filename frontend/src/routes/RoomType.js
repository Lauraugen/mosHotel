import DefaultNavbar from "../components/Navbar/DefaultNavbar";
import HomeHero from "../components/Home/HomeHero";
import Destination from "../components/Destinations/Destination";
import Footer from "../components/Footer/Footer";
import Trip from "src/components/Home/Service";

function Room() {
  return (
    <>
      <DefaultNavbar />
      <HomeHero
        cName="hero"
        heroImg="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2022-03/Fushimi-Inari-taisha.jpg"

        title="Tu viaje tu Historia"
        btnClass="show"
        buttonText="Reserva Ya"
        url="/"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Room;