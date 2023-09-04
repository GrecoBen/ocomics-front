import React from 'react'
import { Card } from '../types/index';

type Props = {
    own: Card;
};

const OwnCard: React.FC<Props> = ({own}) => {
  return (
    <div key={own.id}>
        <img src={own.poster} alt={own.title}></img>
    </div>
  )
};

export default OwnCard;