const About = () => {
  return (
    <section
      id="about"
      className="relative py-12 px-6 text-gray-900 bg-gradient-to-r from-cyan-100 to-cyan-300"
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-y-0 right-0 w-1/2"
        style={{
          backgroundImage: "url('src/assets/cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      ></div>

      {/* Content Section */}
      <div className="relative max-w-3xl pl-6">
        <h2 className="text-3xl font-extrabold text-cyan-700">
          What is <span className="text-cyan-900">Fan Connection SEA?</span>
        </h2>

        <p className="mt-4 text-lg leading-relaxed">
          <span className="font-bold text-cyan-900">Fan Connection SEA</span> is more than just a 
          <span className="font-semibold text-cyan-700"> celebrity licensing</span> and 
          <span className="font-semibold text-cyan-700"> booking agency</span>—we are the 
          <span className="font-bold text-cyan-800"> bridge</span> between 
          <span className="font-bold text-cyan-900"> brands</span> and the world of 
          <span className="font-bold text-cyan-900"> fandom</span>.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          📍 <span className="font-semibold text-cyan-900">Based in the heart of Manila</span>, we specialize in creating connections that blend 
          <span className="font-semibold text-cyan-700"> pop culture</span>, 
          <span className="font-semibold text-cyan-700"> creativity</span>, and 
          <span className="font-semibold text-cyan-700"> business strategy</span>.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          We help businesses across <span className="font-bold text-cyan-900">Southeast Asia</span> harness the undeniable influence of 
          <span className="font-bold text-cyan-900"> fandoms</span>, bringing together 
          <span className="text-cyan-800 font-bold"> the right artists</span>, 
          <span className="text-cyan-800 font-bold"> the right brands</span>, and 
          <span className="text-cyan-800 font-bold"> the right audience</span> for unforgettable campaigns.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          Whether it&apos;s through <span className="font-semibold text-cyan-700">exclusive endorsements</span>, 
          <span className="font-semibold text-cyan-700"> event appearances</span>, or 
          <span className="font-semibold text-cyan-700"> licensing deals</span>, we bring your brand to life in the most 
          <span className="font-extrabold text-cyan-900"> exciting way possible</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
