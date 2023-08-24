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
  'https://i.ibb.co/5hxqBVw/ai-generated-8098396-1280.png',
  'https://i.ibb.co/n3Ly567/ai-generated-8154910-1280.jpg',
  'https://i.ibb.co/dBQx2gM/captain-america-6789190-1280.jpg',
  "https://i.ibb.co/XyQn0zj/marvel-3165096-1280.jpg",
  "https://i.ibb.co/Y0ky8kj/spiderman-8158916-1280.png",
  "https://i.ibb.co/bJRxSCr/the-incredible-hulk-7471339-1280.jpg"
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
