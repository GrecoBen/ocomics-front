import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '350px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  background: '#1E3A8A',
};

const Slider = [
  'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  'http://i.annihil.us/u/prod/marvel/i/mg/1/b0/5269678709fb7.jpg',
  'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg',
  "http://i.annihil.us/u/prod/marvel/i/mg/9/30/535feab462a64.jpg",
  "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4ce18691cbf04.jpg",
  "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c00358ec7548.jpg",
];

const App: React.FC = () => (
  <div className="">
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Bienvenue Sur O'Comics</h1>
      <p className="">
        O/comics est la plateforme idéale pour les passionnés de comics. Découvrez de nouveaux comics, échangez avec d'autres membres et complétez vos collections.
      </p>
      <p>
        Rejoignez notre communauté pour partager votre passion et discuter avec d'autres fans de comics!
      </p>
    </div>
    <Carousel autoplay>
      {Slider.map((imageUrl, index) => (
        <div key={index} className="w-full">
          <img
            src={imageUrl}
            alt={`Slide-${index}`}
            style={{ ...contentStyle, width: '100%', objectFit: 'contain' }}
            className="max-h-96 mx-auto"
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default App;
