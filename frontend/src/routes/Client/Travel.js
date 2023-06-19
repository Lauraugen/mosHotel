import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import Footer from "../../components/Footer/Footer";
import TravelImg from "../../assets/travels/travel.jpg";
import Destination from "../../components/Destinations/Destination";

function TravelClient() {
  return (
    <>
      <ClientNavbar />
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

export default TravelClient;
