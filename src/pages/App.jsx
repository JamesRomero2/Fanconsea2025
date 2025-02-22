import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bgDot from "../assets/bg-dot.svg";
import ParticlesBackground from "../components/ParticlesBackground";
import About from "../sections/About";
import Offering from "../sections/Offering";
import Contact from "../sections/Contact";
import Releases from "../sections/Releases";
import Partner from "../sections/Partner";
import heroImage from "../assets/hero.png";
import { Link } from "react-scroll";

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <div className="min-h-screen bg-[linear-gradient(312deg,#befcff_33%,#5ccfd5_100%)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-16">
          <ParticlesBackground />
          <div
            className="absolute inset-0 bg-repeat opacity-50"
            style={{
              backgroundImage: `url(${bgDot})`,
              maskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "radial-gradient(circle, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="text-black max-w-2xl text-left z-10">
            <h1 className="text-4xl md:text-6xl font-bold leading-loose">
              Bridging <span className="text-[#03989E]">Talent & Passion</span> Across Southeast Asia
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Connecting <span className="text-[#03989E]">artists</span>, <span className="text-[#03989E]">brands</span>, and <span className="text-[#03989E]">fan communities</span> to create
              unforgettable experiences. Let’s make every moment count!
            </p>
            <Link
              to={'contact'}
              smooth={true}
              duration={500}
              className="mt-6 cursor-pointer inline-block bg-[#FF8945] text-white font-medium py-3 px-6 rounded-full shadow-lg hover:bg-orange-500 transition"
            >
              Get Started
            </Link>
            
            <div className="flex gap-4 mt-6 text-black text-2xl">
              <a
                href="https://www.linkedin.com/company/fan-connection-sea/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#03989E]"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/fanconsea/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#03989E]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/FanConSEA/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#03989E]"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/fanconsea"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#03989E]"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <img
            src={heroImage}
            alt="Connecting artists and brands"
            className="w-full max-w-md md:max-w-3xl z-10"
          />
        </div>
      </section>
      <div>
        <About />
        <Offering />
        <Partner />
        <Releases />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;