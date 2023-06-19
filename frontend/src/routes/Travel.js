import DefaultNavbar from "../components/Navbar/DefaultNavbar";
import HomeHero from "../components/Home/HomeHero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer/Footer";
import Destination from "src/components/Destinations/Destination";

function Travel() {
  return (
    <>
      <DefaultNavbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Viajes"
        btnClass="hide"
      />
      <Destination />
      <Footer />
    </>
  );
}

export default Travel;
