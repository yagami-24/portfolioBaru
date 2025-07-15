import About from "./componentNope/About";
import Contact from "./componentNope/Contact";
import Footer from "./componentNope/Footer";
import Header from "./componentNope/Header";
import Navbar from "./componentNope/Navbar";
import Service from "./componentNope/Service"
import Work from "./componentNope/Work";

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
