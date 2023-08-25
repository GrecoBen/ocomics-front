
import React, { useEffect, useState } from 'react';
import { Image, Button } from 'antd';
import { ResultAPI } from '../types';
import CharactersCard from './CharactersCard';

const CharacterImage: React.FC = () => {

  const [resultAPI2, setResultAPI2] = useState<ResultAPI[]>();

  useEffect(() => {
    fetch('http://localhost:8080/api/character')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultAPI2(data);
      })
      .catch((err) => console.error(err)); 
  },); 
  /*const characters = [

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
  );*/
  return (
    <div className="flex flex-wrap place-content-center mx-56">
      {/* <SearchBar search={search} setSearch={setSearch}/>
      <ComicsCard cards={cardPicker()}/> */}
      {resultAPI2?.map(post => (
        
        <div className="basis-1/3 p-5">
          <CharactersCard post={post}/>

        </div>
        
        ))}
    </div>

  );
};


export default CharacterImage;

function setResultAPI2(data: any) {
  throw new Error('Function not implemented.');
}

