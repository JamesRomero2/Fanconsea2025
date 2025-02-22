import releases from "../assets/releases.json"; // Adjust path to your JSON file

const Releases = () => {
  return (
    <section className="bg-gray-100 py-12 px-6" id="releases">
      <h2 className="text-3xl font-extrabold text-cyan-700 pl-6">Press Releases</h2>
      <p className="text-lg text-gray-700 mb-2 pl-6">Click on the card for more info. </p>
      <div className="max-w-9xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {releases.map((item, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer h-full transform transition-transform duration-300 hover:scale-105"
            onClick={() => window.open(item.url, "_blank")}
          >
            <div className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl rounded-lg overflow-hidden h-full flex flex-col">
              <img
                src={item.img_link}
                alt={item.Title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold line-clamp-2 overflow-hidden text-ellipsis h-[3rem] mb-4">
                  {item.Title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 overflow-hidden text-ellipsis h-[4rem]">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Releases;
