import React from 'react';
import { Card } from '../types/index';

type Props = {
  cards: Card[];
}

// Fonction map qui prend le tableau des cards et de reformuler chacun de ses éléments en jsx qu'on veut utiliser
const ComicsCard: React.FC<Props> = ({ cards }) => {
  return (
  <section>
    <h1>Comics</h1>
  </section>
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