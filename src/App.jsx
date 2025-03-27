import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import AISection from './together-ai/AISection';

function App() {
  return (
    <>
      <Header/>
      <Hero />
      <Projects />
      <Skills />
      <AISection />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
