import DefaultNavbar from "../components/Navbar/DefaultNavbar";
import HomeHero from "../components/Home/HomeHero";
import ContactImg from "../assets/recepcion.jpeg";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

function Contact() {
  return (
    <>
      <DefaultNavbar />
      <HomeHero
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contacto"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
