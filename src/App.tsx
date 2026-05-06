import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Work from './components/Work';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-gray-950">
      <Nav />
      <Hero />
      <Stats />
      <Work />
      <Services />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
