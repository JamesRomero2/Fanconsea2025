const partners = [
  "0917.png",
  "acer.png",
  "acerpred.png",
  "catalog.png",
  "cheil.png",
  "goldilocks.png",
  "iconic.png",
  "miniso.png",
  "nutriasia.png",
  "penshoppe.png",
  "samsung.png",
  "sm.png",
  "toykingdom.png",
  "ufc.png",
];

const Partner = () => {
  return (
    <section id="partners" className="flex items-center w-full py-10 px-6">
      {/* Left Section */}
      <div className="w-1/4 text-3xl  text-gray-800 pl-6">
        Past and Current <span className="text-cyan-700 font-extrabold">Partners</span>
      </div>
      
      {/* Divider */}
      <div className="w-1 bg-cyan-300 h-72 mx-6"></div>
      
      {/* Right Section */}
      <div className="w-3/4 grid grid-cols-7 gap-10">
        {partners.map((logo, index) => (
          <img
            key={index}
            src={`src/assets/partner/${logo}`}
            alt={`Partner ${index + 1}`}
            className="w-32 h-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};

export default Partner;
