import React, { useState } from 'react';
import { Card } from '../types/index';

type Props = {
  card: Card;
  owned: boolean;
  wanted: boolean;
}

const ComicsCard: React.FC<Props> = ({ card, owned = false, wanted = false }) => {
  const [isOwned, setIsOwned] = useState(owned);
  const [isWanted, setIsWanted] = useState(wanted);

  const token = localStorage.getItem('accessToken');
  const isAuthenticated = !!token; // Vérifiez si l'utilisateur est connecté

  const toggleOwned = () => {
    if (!isAuthenticated) {
      // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      window.location.href = '/login';
      return;
    }

    if (isOwned) {
      // Supprimez le comic de la collection
      fetch('https://grecoben-server.eddi.cloud/api/ownedlist/remove/' + card.id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.json());
          setIsOwned(false);
        })
        .catch((err) => console.error(err));
    } else {
      // Ajoutez le comic à la collection
      fetch('https://grecoben-server.eddi.cloud/api/ownedlist/add/' + card.id, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.json());
          setIsOwned(true);
          setIsWanted(false);
        })
        .catch((err) => console.error(err));
    }
  };

  const toggleWanted = () => {
    if (!isAuthenticated) {
      // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      window.location.href = '/login';
      return;
    }

    if (isWanted) {
      // Supprimez le comic de la wishlist
      fetch('https://grecoben-server.eddi.cloud/api/wishlist/remove/' + card.id, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.json());
          setIsWanted(false);
        })
        .catch((err) => console.error(err));
    } else {
      // Ajoutez le comic à la wishlist
      fetch('https://grecoben-server.eddi.cloud/api/wishlist/add/' + card.id, {
        method: 'POST',
        mode: 'cors',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.json());
          setIsWanted(true);
          setIsOwned(false);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="bg-slate-700 h-full w-full rounded-lg border-2 w-full border-solid border border-amber-600 rounded shadow-2xl overflow-hidden key" key={card.id}>
      <img className="w-full max-h-72 object-cover cursor-pointer" src={card.poster} alt={card.title}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{card.title}</div>
        <p className="text-gray-400 text-base text-ellipsis overflow-hidden max-h-40 text-sm italic">{card.synopsis}</p>
      </div>
      <div className="p-4 flex justify-evenly">
        {isAuthenticated && (
          <>
            {isOwned || isWanted ? (
              <button className={isOwned ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" : "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"} onClick={isOwned ? toggleOwned : toggleWanted}>
                Supprimer
              </button>
            ) : (
              <>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={toggleOwned}>
                  Je possède
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={toggleWanted}>
                  Je le veux
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ComicsCard;
