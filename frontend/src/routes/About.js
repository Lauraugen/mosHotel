import DefaultNavbar from "../components/Navbar/DefaultNavbar";
import HomeHero from "../components/Home/HomeHero";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/night.jpg";

function About() {
  return (
    <>
      <DefaultNavbar />
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

export default About;
