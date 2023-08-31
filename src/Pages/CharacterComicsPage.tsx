import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Comic = {
  id: number;
  title: string;
  poster: string;
};

const CharacterComicsPage: React.FC = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/character/${characterId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des comics');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.comics);
        setComics(data.comics); 
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des comics:', error);
      });
  }, [characterId]);

  return (
    <div>
         <Link to="/Personnages">Retour à la liste des personnages</Link>
      <h1>Comics associés au personnage</h1>
      <ul>
        {comics.map((comic) => (
          <li key={comic.id}>
            <img src={comic.poster} alt={comic.title} />            
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default CharacterComicsPage;
