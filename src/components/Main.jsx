import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Services from "./views/Services";
import Vision from "./views/Vision";
import Footer from "./Footer";

function Main() {
  return (
    <div>
      <Home />
      <About />
      <Vision />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
