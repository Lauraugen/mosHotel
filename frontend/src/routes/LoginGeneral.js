import DefaultNavbar from "../components/Navbar/DefaultNavbar";
import HomeHero from "../components/Home/HomeHero";
import Login from "../components/LoginComponets/Login";
import Footer from "../components/Footer/Footer";
import AboutImg from "../assets/night.jpg";

function LoginGeneral() {
  return (
    <>
      <DefaultNavbar />
      <HomeHero
        cName="hero-little"
        heroImg={AboutImg}
        title="Login"
        btnClass="hide"
      />
      <Login />
      <Footer />
    </>
  );
}

export default LoginGeneral;