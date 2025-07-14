import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Service from "./components/Service"
import Work from "./components/Work";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header/>
    <About />
    <Service />
    <Work  />   
    <Contact  /> 
    <Footer  />
    </>
  );
}
