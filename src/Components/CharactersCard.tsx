import React from 'react'
import { Character } from '../types'

type Props = {
    post : Character;
};

const CharactersCard: React.FC<Props> = ({post}) => {
  return (
    <div>
        <img src={post.poster} alt={post.name}></img>
        <div>{post.name}</div>
    </div>
  );
  
};
//<div>{post.name}</div>
//        <div>{post.released_at}</div>
export default CharactersCard;