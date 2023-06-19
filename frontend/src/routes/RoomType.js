import DefaultNavbar from "../components/Navbar/DefaultNavbar";
import HomeHero from "../components/Home/HomeHero";
import Destination from "../components/Destinations/Destination";
import Footer from "../components/Footer/Footer";
import RoomType from "src/components/Rooms/Room";
import RoomImg from "src/assets/rooms/bali-prasana-by-arjani-resort-picture-3.jpg"

function Room() {
  return (
    <>
      <DefaultNavbar />
      <HomeHero
        cName="hero-mid"
        heroImg={RoomImg}

        title="Habitaciones"
      />
      <RoomType />
      <Footer />
    </>
  );
}

export default Room;