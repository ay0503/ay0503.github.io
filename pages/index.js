import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="section-divider"><hr /></div>
        <About />
        <div className="section-divider"><hr /></div>
        <Experience />
        <div className="section-divider"><hr /></div>
        <Projects />
        <div className="section-divider"><hr /></div>
        <Skills />
        <div className="section-divider"><hr /></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
