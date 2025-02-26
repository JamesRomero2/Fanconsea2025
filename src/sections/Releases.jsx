import img1 from "../assets/releases/1.jpg";
import img2 from "../assets/releases/2.jpg";
import img3 from "../assets/releases/3.webp";
import img4 from "../assets/releases/4.jpg";
import img5 from "../assets/releases/5.png";
import img6 from "../assets/releases/6.jpg";
import img7 from "../assets/releases/7.jpg";
import img8 from "../assets/releases/8.jpg";
import img9 from "../assets/releases/9.jpg";
import img10 from "../assets/releases/10.jpg";
import img11 from "../assets/releases/11.jpg";
import img12 from "../assets/releases/12.jpg";
import img13 from "../assets/releases/13.jpg";
import img14 from "../assets/releases/14.jpg";
import img15 from "../assets/releases/15.webp";
import img16 from "../assets/releases/16.jpg";
import img17 from "../assets/releases/17.jpg";
import img18 from "../assets/releases/18.jpg";

const releases = [
  { Title: "ICONIC SOCKS X BT21", url: "https://www.instagram.com/p/CV-HMBaLbi_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", caption: "IT’S HERE! It’s finally here! The UNIVERSTAR just landed in the Philippines. Introducing the Iconic Socks Collection with BT21 you have been waiting for!", img_link: img1 },
  { Title: "PENSHOPPE X BT21", url: "https://www.cosmo.ph/style/trend-alert/penshoppe-bt21-street-mood-collection", caption: "You Don't Need Permission To Shop This Adorable Penshoppe x BT21 Collab", img_link: img2 },
  { Title: "PENSHOPPE X BTS Collection", url: "https://8list.ph/new-penshoppe-bts-music-theme-collection-early-access/", caption: "ARMY, Here’s How You Can Get Early Access to the New Penshoppe BTS Music Theme Collection", img_link: img3 },
  { Title: "0917 EXO COLLECTION", url: "https://www.globe.com.ph/about-us/newsroom/consumer/0917-lifestyle-exclusive-exo-collection", caption: "0917 Lifestyle Just Dropped an Exclusive EXO Collection", img_link: img4 },
  { Title: "0917 NCT COLLECTION", url: "https://www.gizguide.com/2022/04/ntc-universe-merch-globe-0917-lifestyle.html", caption: "NCT Universe merch now available on 0917 Lifestyle", img_link: img5 },
  { Title: "0917 SM TOWN COLLECTION", url: "https://www.globe.com.ph/about-us/newsroom/consumer/smcu-express-merch-0917-lifestyle", caption: "‘SMCU Express’ Merch by Globe’s 0917 Lifestyle", img_link: img6 },
  { Title: "0917 RED VELVET COLLECTION", url: "https://www.globe.com.ph/about-us/newsroom/consumer/0917-red-velvet-collection", caption: "0917 X Red Velvet Collection: The Ultimate K-pop Merch", img_link: img7 },
  { Title: "GOLDILOCKS X BT21 CAKES", url: "https://www.yummy.ph/news-trends/goldilocks-bt21-cake-a00260-20220312", caption: "Party with BTS! BT21 cakes now available at Goldilocks", img_link: img8 },
  { Title: "ACER x SANDARA PARK", url: "https://www.abs-cbn.com/entertainment/07/21/23/sandara-park-named-new-acer-ph-ambassador", caption: "Sandara Park named new Acer PH ambassador | ABS-CBN Entertainment", img_link: img9 },
  { Title: "PREDATOR LEAGUE W/ SANDARA PARK & MINZY", url: "https://www.instagram.com/p/DEM-BnXJjks/?img_index=1", caption: "Win 2x Pairs of Pro Tickets to APAC PL 2025!", img_link: img10 },
  { Title: "SAMSUNG GALAXY LAUNCH W/ SUNMI", url: "https://www.allkpop.com/article/2024/01/sunmi-performs-live-at-the-samsungs-galaxy-ai-festival-in-bgc-as-its-headliner", caption: "K-pop star Sunmi to perform at launch event in Taguig | ABS-CBN Entertainment", img_link: img11 },
  { Title: "DEW JIRAWAT FANMEETING IN MANILA", url: "https://thaimazingmanila.com/2023/10/19/presscon-dew-1st-solo-fan-meet-in-manila/", caption: "[PRESSCON] Dew 1st Solo Fan Meet in Manila", img_link: img12 },
  { Title: "BTS SEVEN PHASES EXHIBIT IN MANILA", url: "https://www.bandwagon.asia/articles/bts-james-jean-seven-phases-exhibit-sm-megamall-manila-philippines-tickets-review-2023", caption: "We visited the BTS x James Jean 'Seven Phases' exhibit in Manila and found peace", img_link: img13 },
  { Title: "KIM SEONHO X UFC", url: "https://www.rappler.com/brandrap/nutriasia-ufc-kim-seon-ho-manila-fanmeet-april-2024/", caption: "Kim Seon Ho partners with UFC Fun Chow for a ‘Color+Full’ Manila fanmeet this April", img_link: img14 },
  { Title: "YOONA FANMEETING IN MANILA", url: "https://www.abs-cbn.com/entertainment/2024/2/2/yoona-s-yoonite-in-manila-fan-meet-ticket-prices-seat-map-2204", caption: "Yoona's 'Yoonite' in Manila fan meet", img_link: img15 },
  { Title: "BT21 X MINISO", url: "https://www.instagram.com/miniso_ph/p/DAIs8Qwt2cL/?hl=en", caption: "Comfy and adorable! 💫 New BT21 Nap Pillow with hand warmer for Php 599 each!", img_link: img16 },
  { Title: "BT21 X SM STATIONERY", url: "https://www.facebook.com/share/p/1F27NK2ozy/", caption: "BT21 is now available at SM Stationery stores nationwide", img_link: img17 },
  { Title: "BT21 X TOY KINGDOM", url: "https://www.instagram.com/p/C-CI6TEvMw9/?hl=en", caption: "The newest BT21 plushies are too adorable to resist", img_link: img18 }
];


const Releases = () => {
  return (
    <section className="bg-gray-100 py-12 px-6" id="releases">
      <h2 className="text-3xl font-extrabold text-cyan-700 pl-6">Press Releases</h2>
      <p className="text-lg text-gray-700 mb-2 pl-6">Click on the card for more info.</p>
      <div className="max-w-9xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
        {releases.map((item, index) => (
          <div
            key={index}
            className="p-2 cursor-pointer h-full transform transition-transform duration-300 hover:scale-105"
            onClick={() => window.open(item.url, "_blank")}
          >
            <div className="bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl rounded-lg overflow-hidden h-full flex flex-col">
              <img src={item.img_link} alt={item.Title} className="w-full h-48 object-cover" />
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
