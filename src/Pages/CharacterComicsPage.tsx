import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ComicsCard from '../Components/ComicsCard';
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import { Card } from '../types/index';

const CharacterComicsPage: React.FC = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const [comics, setComics] = useState<Card[]>([]);

  useEffect(() => {
    fetch(`https://grecoben-server.eddi.cloud/api/character/${characterId}`)
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
    
    <div className="flex flex-col bg-gray-800 min-h-screen">
      <Navbar isAuthenticated={false} />
      <Link to="/Personnages" className="text-blue-500 hover:underline">Retour à la liste des personnages</Link>
      
      <h1 className="text-white font-bold mb-5 text-xl my-5">
        <span className="inline-block p-2 bg-red-700">Comics associés au personnage</span>
      </h1>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {comics.map((comic) => (
        <div key={comic.id}>
          <ComicsCard card={comic} owned={false} wanted={false} />
        </div>
      ))}
      </div>
      <Footer />
</div>


  );
};

export default CharacterComicsPage;
