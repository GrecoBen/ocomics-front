import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '350px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  background: '#F8BE26',
  border: '#5B21B5',
};

const Slider = [
  'https://i.ibb.co/5hxqBVw/ai-generated-8098396-1280.png',
  'https://i.ibb.co/n3Ly567/ai-generated-8154910-1280.jpg',
  'https://i.ibb.co/dBQx2gM/captain-america-6789190-1280.jpg',
  "https://i.ibb.co/XyQn0zj/marvel-3165096-1280.jpg",
  "https://i.ibb.co/Y0ky8kj/spiderman-8158916-1280.png",
  "https://i.ibb.co/bJRxSCr/the-incredible-hulk-7471339-1280.jpg"

];

const Carou: React.FC = () => (
  <div className="flex flex-col h-scream ">
    <div className="container mx auto p-8 text-center">
      <h1 className="rounded-lg bg-black bg-opacity-20 px-2 py-1 text-center text-3xl font-stencil font-semibold text-white">Bienvenue Sur O'Comics</h1>
      <p className="rounded-lg bg-black bg-opacity-20 px-2 py-1 text-center text-1xl font-stencil font-semibold text-white">
        O'comics est la plateforme idéale pour les passionnés de comics. Découvrez de nouveaux comics, échangez avec d'autres membres et complétez vos collections.        
        Rejoignez notre communauté pour partager votre passion et discuter avec d'autres fans de comics!
      </p>
    </div>
    <Carousel autoplay>
      {Slider.map((imageUrl, index) => (
        <div key={index} className="w-full">
          <img
            src={imageUrl}
            alt={`Slide-${index}`}
            style={{ ...contentStyle, width: '100%', objectFit: 'contain'  }}
            className="max-h-96 mx-auto"
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default Carou;