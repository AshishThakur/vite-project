import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Company from "./components/Company";
import Aos from "aos";
import 'aos/dist/aos.css';
import Services from "./components/Services";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Company /> 
      <Services/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  );
};

export default App;