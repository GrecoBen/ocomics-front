import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ComicsCard from '../Components/ComicsCard';
import { Card } from '../types/index';

const CharacterComicsPage: React.FC = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const [comics, setComics] = useState<Card[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/character/${characterId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des comics');
        }
        return response.json();
      })
      .then((data) => {
        const comicsWithOwnershipStatus = data.comics.map((comic: Card) => ({
          ...comic,
          ownershipStatus: null,
        }));
        setComics(comicsWithOwnershipStatus);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des comics:', error);
      });
  }, [characterId]);

  return (
    <div>
      <Link to="/Personnages">Retour à la liste des personnages</Link>

      <h1>Comics associés au personnage</h1>
      <div className="grid grid-cols-2 gap-4">
        {comics.map((comic) => (
          <div key={comic.id}>
            <ComicsCard card={comic} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterComicsPage;
