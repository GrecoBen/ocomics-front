import React, { useEffect, useState } from 'react';
import { Character } from '../types/index';
import CharactersCard from './CharactersCard';

const CharacterImage: React.FC = () => {

  const [resultAPI2, setResultAPI2] = useState<Character[]>();

  useEffect(() => {
    fetch('https://grecoben-server.eddi.cloud/api/character')
      .then((response) => response.json())
      .then((data) => {        
        setResultAPI2(data);
      })
      .catch((err) => console.error(err));
    }, []);
  
  return (
    <div className="flex flex-wrap grid grid-cols-2 md:grid-cols-6 place-content-center mb-10">      
      {resultAPI2?.map(post => (
        <div className="basis-1/6 h-[350px]" key={post.id}>
          <CharactersCard post={post}/>

        </div>
        
        ))}
    </div>

  );
};

export default CharacterImage;
