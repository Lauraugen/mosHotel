import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import Footer from "../../components/Footer/Footer";
import Room from "../../components/Rooms/Room";

function RoomClient() {
  return (
    <>
      <ClientNavbar />
      <HomeHero
        cName="hero-mid"
        heroImg="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2022-03/Fushimi-Inari-taisha.jpg"

        title="Tipo de habitaciones"
        url="/"
      />
      <Room />
      <Footer />
    </>
  );
}

export default RoomClient;