import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as cheerio from 'cheerio';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface MetaData {
  url: string;
  title?: string;
  image?: string;
  loading: boolean;
}

const urls = [
  // 'https://www.instagram.com/p/CV-HMBaLbi_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  'https://www.cosmo.ph/style/trend-alert/penshoppe-bt21-street-mood-collection-a4575-20211119?s=pnu9e55mlmeq2ucb42bdsesj6r',
  // 'https://8list.ph/new-penshoppe-bts-music-theme-collection-early-access/',
  // 'https://www.globe.com.ph/about-us/newsroom/consumer/0917-lifestyle-exclusive-exo-collection#gref',
  // 'https://www.gizguide.com/2022/04/ntc-universe-merch-globe-0917-lifestyle.html',
  // 'https://www.globe.com.ph/about-us/newsroom/consumer/smcu-express-merch-0917-lifestyle#gref',
  // 'https://www.globe.com.ph/about-us/newsroom/consumer/0917-red-velvet-collection#gref',
  // 'https://www.yummy.ph/news-trends/goldilocks-bt21-cake-a00260-20220312',
  // 'https://www.abs-cbn.com/entertainment/07/21/23/sandara-park-named-new-acer-ph-ambassador',
  // 'https://www.instagram.com/p/DEM-BnXJjks/?img_index=1',
  // 'https://www.allkpop.com/article/2024/01/sunmi-performs-live-at-the-samsungs-galaxy-ai-festival-in-bgc-as-its-headliner',
  // 'https://thaimazingmanila.com/2023/10/19/presscon-dew-1st-solo-fan-meet-in-manila/',
  // 'https://www.bandwagon.asia/articles/bts-james-jean-seven-phases-exhibit-sm-megamall-manila-philippines-tickets-review-2023',
  // 'https://www.rappler.com/brandrap/nutriasia-ufc-kim-seon-ho-manila-fanmeet-april-2024/',
  // 'https://www.abs-cbn.com/entertainment/2024/2/2/yoona-s-yoonite-in-manila-fan-meet-ticket-prices-seat-map-2204',
  // 'https://www.instagram.com/miniso_ph/p/DAIs8Qwt2cL/?hl=en',
  // 'https://www.facebook.com/share/p/1F27NK2ozy/',
  // 'https://www.instagram.com/p/C-CI6TEvMw9/?hl=en',
];

const MetaCard: React.FC = () => {
  const [metaData, setMetaData] = useState<MetaData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const results = await Promise.all(
          urls.map(async (url) => {
            try {
              const response = await axios.get(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
              const html = response.data.contents;
              const $ = cheerio.load(html);

              const title = $('meta[property="og:title"]').attr('content') || $('title').text();
              const image = $('meta[property="og:image"]').attr('content');

              // Only return valid data
              if (!title || !image) return null;

              return { url, title, image };
            } catch (error) {
              console.error(`Error fetching ${url}:`, error);
              return null;
            }
          })
        );

        // Remove null values (invalid fetches)
        setMetaData(results.filter((data) => data !== null) as MetaData[]);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetadata();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">URL Metadata Carousel</h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
      ) : metaData.length === 0 ? (
        <p className="text-center text-gray-600">No valid metadata available.</p>
      ) : (
        <Slider {...sliderSettings}>
          {metaData.map((data, index) => (
            <div
              key={index}
              onClick={() => window.open(data.url, '_blank')}
              className="cursor-pointer bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition mx-2">
              <img src={data.image} alt="Thumbnail" className="w-full h-40 object-cover rounded-md" />
              <h2 className="mt-2 text-lg font-bold">{data.title}</h2>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default MetaCard;
