import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import Footer from "../../components/Footer/Footer";
import AboutImg from "../../assets/night.jpg";
import Destination from "../../components/Destinations/Destination";

function TravelClient() {
  return (
    <>
      <ClientNavbar />
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

export default TravelClient;
