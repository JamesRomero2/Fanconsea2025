import Footer from '../components/Footer';
import Header from '../components/Header';
import bgDot from '../assets/bg-dot.svg';
import ParticlesBackground from '../components/ParticlesBackground';
import About from '../sections/About';
import Offering from '../sections/Offering';
import Contact from '../sections/Contact';
import Releases from '../sections/Releases';
import Partner from '../sections/Partner';

function App() {
  return (
    <>
      <div className="min-h-screen bg-[linear-gradient(312deg,#befcff_33%,#5ccfd5_100%)] relative overflow-hidden">
        <ParticlesBackground/>
        <div className="absolute inset-0 bg-repeat opacity-50" style={{ backgroundImage: `url(${bgDot})`, maskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)" }} />
        <Header/>
        <div className="">
        </div>
      </div>
      <div className="">
        <About/>
        <Offering/>
        <Partner/>
        <Releases/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App
