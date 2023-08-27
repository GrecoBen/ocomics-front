import React from 'react'
import { Character } from '../types'


type Props = {
    post : Character;
};

const CharactersCard: React.FC<Props> = ({post}) => {
  return (
    
        
      <div className='relative h-full w-full cursor-pointer'>
        <div className='absolute bottom-0 text-center w-full font-extrabold text-white z-10 p-2'>{post.name}</div>
        <img
          src={post.poster}
          alt="Image"
          className="object-cover h-full w-full" 
        />
      </div>
    
  );
  
};


/* A AJOUTER EN CSS dans le className de l'image au dessus pour les rendre beaucoup plus beau
.charactersIMG {
  background: linear-gradient(180deg, rgba(2,0,36,0) 6%, rgb(0, 0, 0) 93%);
};

*/

export default CharactersCard;