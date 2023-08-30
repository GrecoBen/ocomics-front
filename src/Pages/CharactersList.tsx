import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

type Character = {
  id: number;
  name: string;
  description: string;
  Poster: string;
  comics: Comic[];
};

type Comic = {
  id: number;
  title: string;
  poster: string;
};

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacterComics, setSelectedCharacterComics] = useState<Comic[]>([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/character')
      .then((response) => {
        if (!response.ok) {
          throw new Error('');
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className="characters-list">
        <h1>Liste des Personnages</h1>
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <img src={character.Poster} alt={character.name} />
              <h2>{character.name}</h2>
              <p>{character.description}</p>
              <Link to={`/comics/${character.id}`}>Voir les Comics</Link>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default CharactersList;
