import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '350px',
  color: '#fff',
  lineHeight: '350px',
  textAlign: 'center',
  background: 'grey',
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
  <Carousel autoplay>
    {Slider.map((imageUrl, index) => (
      <div key={index}>
        <img src={imageUrl} alt={`Slide-${index}`} style={{ ...contentStyle, width: '100%' }} />
      </div>
    ))}
  </Carousel>
);

export default App;
