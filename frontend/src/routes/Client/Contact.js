import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import ContactImg from "../../assets/recepcion.jpeg";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

function ContactClient() {
  return (
    <>
      <ClientNavbar />
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

export default ContactClient;
