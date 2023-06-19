import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import Footer from "../../components/Footer/Footer";
import Room from "../../components/Rooms/Room";
import RoomImg from "src/assets/rooms/bali-prasana-by-arjani-resort-picture-3.jpg"

function RoomClient() {
  return (
    <>
      <ClientNavbar />
      <HomeHero
        cName="hero-mid"
        heroImg={RoomImg}

        title="Tipo de habitaciones"
        url="/"
      />
      <Room />
      <Footer />
    </>
  );
}

export default RoomClient;