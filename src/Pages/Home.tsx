
import React, { useState, useEffect } from 'react';
import Characters from '../Components/Characters';
import Carousel from '../Components/Carousel';
import Comics from '../Components/Comics';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Home: React.FC = () => {
  // @ts-ignore
  const [loading, setLoading] = useState(true);

  // @ts-ignore
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    // Effectue une requête pour obtenir les données de l'utilisateur connecté
    fetch('https://grecoben-server.eddi.cloud/api/home-comics', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ${token}',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResultAPI(data); // Mettre à jour resultAPI avec les données reçues
        setLoading(false); // Indiquer que le chargement est terminé
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); // Indiquer que le chargement est terminé en cas d'erreur
      });
  }, [token]);

  // Vous pouvez maintenant utiliser resultAPI dans votre JSX
  return (
  <div>

    <div className="flex flex-col bg-gray-800 min-h-screen ">

      <div className=''>
        <NavBar isAuthenticated={false} />
      </div>

      <div><Carousel /></div>
      <section className="mx-40 lg:mx-56">
        <h1 className='text-white  font-bold mb-1 text-xl inline-block p-2 bg-red-700 my-5'>LES NOUVEAUTÉS</h1>
        <Comics />
        <h1 className='text-white font-bold mb-5 text-xl inline-block p-2 bg-red-700 my-5 '>LES PERSONNAGES</h1>
        <Characters />
        <h1 className='text-white text-center mt-20'>Tony Stark (Iron Man) : "Je préfère être un génie en herbe que l'homme le plus intelligent du cimetière."</h1>
        <div className='flex justify-center text-center m-4 md:my-16 text-white'>
          <p>
            "Tant que subsiste un souffle d'air dans mes poumons, je continuerai de vous défendre, quoi qu'il en coûte."
          </p>
        </div>
      </section>


      <section className=''>
      <Footer />
      </section>
      
    </div>
    
  </div>

  );
};

export default Home;
