import ClientNavbar from "../../components/Navbar/ClientNavbar";
import HomeHero from "../../components/Home/HomeHero";
import Footer from "../../components/Footer/Footer";
import Service from "../../components/Home/Service";

function HomeClient() {
  return (
    <>
      <ClientNavbar />
      <HomeHero
        cName="hero"
        heroImg="https://planetofhotels.com/guide/sites/default/files/styles/paragraph__text_with_image___twi_image/public/2022-03/Fushimi-Inari-taisha.jpg"

        title="Tu viaje tu Historia"
        btnClass="show"
        buttonText="Reserva Ya"
        url="/"
      />
      <Service />
      <Footer />
    </>
  );
}

export default HomeClient;
