import partner1 from '../assets/partner/0917.png';
import partner2 from '../assets/partner/acer.png';
import partner3 from '../assets/partner/acerpred.png';
import partner4 from '../assets/partner/catalog.png';
import partner5 from '../assets/partner/cheil.png';
import partner6 from '../assets/partner/goldilocks.png';
import partner7 from '../assets/partner/iconic.png';
import partner8 from '../assets/partner/miniso.png';
import partner9 from '../assets/partner/nutriasia.png';
import partner10 from '../assets/partner/penshoppe.png';
import partner11 from '../assets/partner/samsung.png';
import partner12 from '../assets/partner/sm.png';
import partner13 from '../assets/partner/toykingdom.png';
import partner14 from '../assets/partner/ufc.png';

const partners = [
  { src: partner1, alt: "0917" },
  { src: partner2, alt: "Acer" },
  { src: partner3, alt: "Acer Predator" },
  { src: partner4, alt: "Catalog" },
  { src: partner5, alt: "Cheil" },
  { src: partner6, alt: "Goldilocks" },
  { src: partner7, alt: "Iconic" },
  { src: partner8, alt: "Miniso" },
  { src: partner9, alt: "Nutriasia" },
  { src: partner10, alt: "Penshoppe" },
  { src: partner11, alt: "Samsung" },
  { src: partner12, alt: "SM" },
  { src: partner13, alt: "Toy Kingdom" },
  { src: partner14, alt: "UFC" }
];

const Partner = () => {
  return (
    <section id="partners" className="flex items-center w-full py-10 px-6">
      {/* Left Section */}
      <div className="w-1/4 text-3xl text-gray-800 pl-6">
        Past and Current <span className="text-cyan-700 font-extrabold">Partners</span>
      </div>
      
      {/* Divider */}
      <div className="w-1 bg-cyan-300 h-72 mx-6"></div>
      
      {/* Right Section */}
      <div className="w-3/4 grid grid-cols-7 gap-10">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner.src}
            alt={partner.alt}
            className="w-32 h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};

export default Partner;
