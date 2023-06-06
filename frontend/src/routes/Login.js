import Navbar from "../components/Navbar";
import HomeHero from "../components/HomeHero";
import Login from "../components/Login";
import Footer from "../components/Footer";
import AboutImg from "../assets/night.jpg";

function Login() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Login"
        btnClass="hide"
      />
      <Login />
      <Footer />
    </>
  );
}

export default Login;