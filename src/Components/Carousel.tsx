import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '500px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  background: '#F8BE26',
  border: '#5B21B5',
};

const Slider = [
  'https://i.ibb.co/YhBmSZF/deadpool-4070071-1920.jpg',
  'https://i.ibb.co/xG0tdTd/erik-mclean-8-Se-JUmfahu0-unsplash.jpg',
  'https://i.ibb.co/WxBMgvj/comic-books-382534-1920.jpg',
  "https://i.ibb.co/HxQrhgn/the-wasp-7275216-1920.jpg",
  "https://i.ibb.co/HpJy9Mx/pexels-stanislav-kondratiev-5883534.jpg",
  "https://i.ibb.co/vB0JnTF/pexels-erik-mclean-7524998.jpg"

];

const Carou: React.FC = () => (

  <div className="flex flex-col my-5 md:h-[500px]">
  
    <Carousel autoplay>
      {Slider.map((imageUrl, index) => (
        <div key={index} className="w-full relative  h-full">
            <div className="absolute flex flex-col top-10 left-14 mx-auto p-8 justify-center text-center">
                <div><h1 className="rounded-lg bg-black bg-opacity-50 px-2 py-1 text-center text-4xl font-stencil font-semibold text-white inline-block">Bienvenue Sur O'Comics</h1></div>
                <div>
                  <p className="rounded-lg bg-black bg-opacity-50 px-2 py-1 text-center text-xl font-stencil font-semibold text-white mt-40 inline-block">
                   O'comics est la plateforme idéale pour les passionnés de comics. Découvrez de nouveaux comics, échangez avec d'autres membres et complétez vos collections.
                   </p>        
                    <p className="rounded-lg bg-black bg-opacity-50 px-2 py-1 text-center text-xl font-stencil font-semibold text-white mt-5 inline-block">
                   Rejoignez notre communauté pour partager votre passion et discuter avec d'autres fans de comics!
                    </p>
                </div>
              </div>
          <img
            src={imageUrl}
            alt={`Slide-${index}`}
            style={{ ...contentStyle, width: '100%', objectFit: 'cover'  }}
            className="h-full"
          />
        </div>
      ))}
    </Carousel>
  </div>
);


export default Carou;