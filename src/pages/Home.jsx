import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = ({ dark, setDark }) => {
  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Hero dark={dark} />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;