import DefaultNavbar from "../components/Navbar/DefaultNavbar";
import HomeHero from "../components/Home/HomeHero";
import TravelImg from "../assets/travels/travel.jpg";
import Footer from "../components/Footer/Footer";
import Destination from "src/components/Destinations/Destination";

function Travel() {
  return (
    <>
      <DefaultNavbar />
      <HomeHero
        cName="hero-mid"
        heroImg={TravelImg}
        title="Viajes"
        btnClass="hide"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Travel;
