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

  const addComicToWish = () => {
    fetch('http://localhost:8080/api/wishlist/add/' + card.id, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.json())
        setIsWanted(true)
      })
      .catch((err) => console.error(err));
  };

  const removeComicFromWish = () => {
    fetch('http://localhost:8080/api/wishlist/remove/' + card.id, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.json())
        setIsWanted(false)
      })
      .catch((err) => console.error(err));
  };

  const addComicToCollection = () => {
    fetch('http://localhost:8080/api/ownedlist/add/' + card.id, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.json())
        setIsOwned(true)
      })
      .catch((err) => console.error(err));
  };

  const removeComicFromCollection = () => {
    fetch('http://localhost:8080/api/ownedlist/remove/' + card.id, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((response) => {
        console.log(response.json())
        setIsOwned(false)
      })
      .catch((err) => console.error(err));
  };

  const removeComicFromList = () => {
    if (isOwned) {
      removeComicFromCollection();
    } else if (isWanted) {
      removeComicFromWish();
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
        {isOwned === false && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={addComicToCollection}>
            Je possède
          </button>
        )}

        {isOwned === true && (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={removeComicFromCollection}>
            Je ne le possède plus
          </button>
        )}

        {isWanted === false && (
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={addComicToWish}>
            Je le veux
          </button>
        )}

        {isWanted === true && (
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={removeComicFromWish}>
            Je ne le veux plus
          </button>
        )}

        {(isOwned || isWanted) && (
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={removeComicFromList}>
            Supprimer de la liste
          </button>
        )}
      </div>
    </div>
  );
};

export default ComicsCard;