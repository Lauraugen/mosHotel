import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import AboutImg from "../../assets/night.jpg";

function AboutClient() {
  return (
    <>
      <ClientNavbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default AboutClient;
