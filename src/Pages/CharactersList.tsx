import React, { useEffect, useState } from 'react';
import Character from '../Components/Characters'; 
import NavBar from '../Components/NavBar'; 
import Footer from '../Components/Footer'; 

// Définition du type Character
type Character = {
  id: number;
  name: string;
  description: string;
  Poster: string; 
}

// Définition du composant CharactersList
const CharactersList: React.FC = () => {
  // État local pour stocker les données des personnages
  const [characters, setCharacters] = useState<Character[]>([]);

  // Effet de côté utilisant useEffect pour charger les données des personnages depuis l'API
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

  // Rendu du composant
  return (
    <div>
      <NavBar />
      <div className="characters-list">
        <h1>Liste des Personnages</h1>
        <ul>
          {/* Mapping à travers les données des personnages et affichage */}
          {characters.map((character) => (
            <li key={character.id}>
              <img src={character.Poster} alt={character.name} /> 
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

export default CharactersList; // Export du composant CharactersList
