import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Services from "./views/Services";
import Vision from "./views/Vision";
import Footer from "./Footer";
import Header from "./Header";

function Main() {
  return (
    <div>
      <Header />
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
