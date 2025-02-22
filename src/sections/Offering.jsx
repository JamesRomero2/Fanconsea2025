import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const offerings = [
  {
    title: "Endorsements",
    image: "/assets/logo.png", // Update with your actual image path
    description:
      "Looking for that perfect celebrity ambassador to take your brand to the next level? Our endorsement services connect your brand with the right artists to deliver authentic, impactful campaigns.",
  },
  {
    title: "Event Appearances",
    image: "/assets/logo.png",
    description:
      "Want to generate buzz? Our event appearances service connects your company with top artists for exclusive one-off events like fan meetings, product launches, or festival performances.",
  },
  {
    title: "Product Licensing",
    image: "/assets/logo.png",
    description:
      "Create products that fans will love! We partner your brand with the hottest IPs to bring exclusive, fan-favorite merchandise into the market, helping your brand tap into a highly engaged fanbase.",
  },
];

const Offering = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <section className="py-12 px-6 bg-gray-100" id="offerings">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-cyan-700 mb-6">Our Offerings</h2>
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-bold text-cyan-900">Fan Connection SEA</span>, we offer premium services designed to help brands engage, excite, and grow their presence through strategic partnerships with artists and influencers.
        </p>
        
        <Slider {...settings}>
          {offerings.map((offer, index) => (
            <div key={index} className="p-4">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <h3 className="text-2xl font-bold text-cyan-800 mt-4">{offer.title}</h3>
              <p className="text-gray-700 mt-2">{offer.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Offering