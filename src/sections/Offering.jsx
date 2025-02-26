import endorsement from '../assets/endorsement.png';
import event from '../assets/event_appearance.png';
import product from '../assets/product_licensing.png';

const offerings = [
  {
    title: "Endorsements",
    image: endorsement, // Update with actual image path
    description:
      "Looking for that <span class='font-bold text-cyan-900'>perfect celebrity ambassador</span> to take your brand to the next level? Our endorsement services connect your brand with the right artists to deliver <span class='font-bold text-cyan-900'>authentic, impactful campaigns</span>.",
  },
  {
    title: "Event Appearances",
    image: event,
    description:
      "Want to <span class='font-bold text-cyan-900'>generate buzz</span>? Our event appearances service connects your company with <span class='font-bold text-cyan-900'>top artists</span> for exclusive one-off events like fan meetings, product launches, or festival performances.",
  },
  {
    title: "Product Licensing",
    image: product,
    description:
      "Create products that <span class='font-bold text-cyan-900'>fans will love</span>! We partner your brand with the hottest IPs to bring <span class='font-bold text-cyan-900'>exclusive, fan-favorite merchandise</span> into the market, helping your brand tap into a <span class='font-bold text-cyan-900'>highly engaged fanbase</span>.",
  },
];

const Offering = () => {
  return (
    <section className="py-12 px-6 bg-gray-100" id="offerings">
      <div className="ml-6">
        <h2 className="text-3xl font-extrabold text-cyan-700 mb-6">Our Offerings</h2>
        <p className="text-lg text-gray-700 mb-8">
          At <span className="font-bold text-cyan-900">Fan Connection SEA</span>, we offer premium services designed to help brands engage, excite, and grow their presence through strategic partnerships with artists and influencers.
        </p>
      </div>
      
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {offerings.map((offer, index) => (
          <div key={index} className="flex flex-col bg-white p-6 rounded-2xl shadow-md">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-2xl font-bold text-cyan-800 mt-4">{offer.title}</h3>
            <p className="text-gray-700 mt-2" dangerouslySetInnerHTML={{ __html: offer.description }}></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offering;