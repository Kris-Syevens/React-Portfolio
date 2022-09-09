import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Tech from "./components/Tech/Tech";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Tech />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
