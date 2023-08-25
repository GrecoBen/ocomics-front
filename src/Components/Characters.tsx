import { Image } from 'antd';

const CharactersImg: React.FC = () => {
  const characters = [
    'https://i.ibb.co/5hxqBVw/ai-generated-8098396-1280.png',
    'https://i.ibb.co/n3Ly567/ai-generated-8154910-1280.jpg',
    'https://i.ibb.co/dBQx2gM/captain-america-6789190-1280.jpg',
    "https://i.ibb.co/XyQn0zj/marvel-3165096-1280.jpg",
    "https://i.ibb.co/Y0ky8kj/spiderman-8158916-1280.png",
    "https://i.ibb.co/bJRxSCr/the-incredible-hulk-7471339-1280.jpg"
  ];
  const Hero = [
    "Iron-Man",
    "Deadpool",
    "Captain America",               
    "Cyclope",
    "Spider-man",
    "Hulk",
    
  ];

  return (
    <div className="flex">
            {characters.map((imageUrl, index) => (
        <div key={index} className="mr-4">
          <Image.PreviewGroup items={characters}>
            <Image className="w-48 h-48" src={imageUrl} />
            <a href="/Personnages" className="nav-link">{Hero[index]}</a>
           
          </Image.PreviewGroup>
        </div>
      ))}
    </div>
  );
};

export default CharactersImg;