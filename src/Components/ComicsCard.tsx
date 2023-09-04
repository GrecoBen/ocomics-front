import React from 'react';
import { Card } from '../types/index';

type Props = {
  card: Card;
}

// Fonction map qui prend le tableau des cards et de reformuler chacun de ses éléments en jsx qu'on veut utiliser
const ComicsCard: React.FC<Props> = ({ card }) => {
  return (
  <div className="h-full w-full rounded-lg border-2 w-full border-solid border border-violet-800 rounded shadow-lg overflow-hidden key" key={card.id}>
    <img className=" w-full max-h-72 object-cover cursor-pointer" src={card.poster} alt={card.title}></img>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-black">{card.title}</div>
      <p className="text-gray-400 text-base text-ellipsis overflow-hidden max-h-40 text-sm ">{card.synopsis}</p>
    </div>
    <div className=" p-4 flex justify-evenly">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">I have it</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer ">I want it</button>
    </div>
  </div>
  );

};



/*
<section> {cards.map((card: Card, key: number) => {
  return (
    <a href={card.poster} key={key}>
      <article>
        <img src="" alt="{card.title}" />
        <h3>{card.title}</h3>
        <p>{card.released_at}</p>
        <p>{card.synopsis}</p>
      </article>
    </a>
  );
})} </section>;
*/


export default ComicsCard;