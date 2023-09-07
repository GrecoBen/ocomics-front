import React, { useState } from 'react';
import { Card } from '../types/index';

type Props = {
  card: Card;
  owned: boolean;
  wanted: boolean;
}

const ComicsCard: React.FC<Props> = ({ card, owned = false, wanted = false }) => {
  const [ ,setIsOwned] = useState(owned);
  const [, setIsWanted] = useState(wanted);
  const [actionTaken, setActionTaken] = useState('');

  const token = localStorage.getItem('accessToken');
  const isAuthenticated = !!token; // Vérifiez si l'utilisateur est connecté

  const addAction = (action: string) => {
    setActionTaken(action);
    if (action === 'owned') {
      setIsOwned(true);
      setIsWanted(false);
    } else if (action === 'wanted') {
      setIsOwned(false);
      setIsWanted(true);
    }
  };

  const removeAction = () => {
    setActionTaken('');
    setIsOwned(false);
    setIsWanted(false);
  };

  const addComicToWish = () => {
    if (!isAuthenticated) {
      // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      window.location.href = '/login';
      return;
    }

    fetch('http://localhost:8080/api/wishlist/add/' + card.id, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.json());
        addAction('wanted');
      })
      .catch((err) => console.error(err));
  };

  const removeComicFromWish = () => {
    if (!isAuthenticated) {
      // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      window.location.href = '/login';
      return;
    }

    fetch('http://localhost:8080/api/wishlist/remove/' + card.id, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.json());
        removeAction();
      })
      .catch((err) => console.error(err));
  };

  const addComicToCollection = () => {
    if (!isAuthenticated) {
      // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      window.location.href = '/login';
      return;
    }

    fetch('http://localhost:8080/api/ownedlist/add/' + card.id, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.json());
        addAction('owned');
      })
      .catch((err) => console.error(err));
  };

  const removeComicFromCollection = () => {
    if (!isAuthenticated) {
      // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      window.location.href = '/login';
      return;
    }

    fetch('http://localhost:8080/api/ownedlist/remove/' + card.id, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.json());
        removeAction();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className=" bg-slate-700 h-full w-full rounded-lg border-2 w-full border-solid border border-amber-600 rounded shadow-2xl overflow-hidden key" key={card.id}>
      <img className=" w-full max-h-72 object-cover cursor-pointer" src={card.poster} alt={card.title}></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black">{card.title}</div>
        <p className="text-gray-400 text-base text-ellipsis overflow-hidden max-h-40 text-sm italic">{card.synopsis}</p>
      </div>
      <div className=" p-4 flex justify-evenly">
        {/* / Condition pour les utilisateurs non connectés / */}
        {!isAuthenticated ? (
          <>
            <a href="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Je possède</a>
            <a href="/login" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Je le veux</a>
          </>
        ) : (
          <>
            {actionTaken === 'owned' ? (
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={removeComicFromCollection}>
                Je ne le possède plus
              </button>
            ) : actionTaken === 'wanted' ? (
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={removeComicFromWish}>
                Je ne le veux plus
              </button>
            ) : (
              <>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={addComicToCollection}>
                  Je possède
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={addComicToWish}>
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
