import React, { useEffect, useState } from 'react';
import Character from '../Components/Characters';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


type Character = {
  id: number;
  name: string;
  description: string;
  imageURL: string; 
}

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
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
            <img src={character.imageURL} alt={character.name} /> {/* Affiche l'image */}
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </div>
  );
};

export default CharactersList;
