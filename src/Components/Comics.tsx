import React, { useEffect, useState } from 'react';
import ComicsCard from './ComicsCard';
import SearchBar from './SearchBar';

import { Card, ResultAPI } from '../types/index';
/* type Props = {} */

const Comics: React.FC = () => {
  // State de synchro de l'input
  const [search, setSearch] = useState('');
 // State de stockage du resultat de l'API
  const [resultAPI, setResultAPI] = useState<ResultAPI[]>();

  useEffect(() => {
    fetch('http://localhost:8080/api/comics${search}')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultAPI(data);
      })
      .catch((err) => console.error(err));
  }, [search]); 

  // Fonction qui gère les props de ComicsCard
  // ".message" est le message d'erreur dans l'API
  const cardPicker = (): Card[]  => {
    //si le tableau resultAPI est rempli on retourne soit une collection de Card soit un tableau vide
    resultAPI?.map((resultat:ResultAPI) => {
      return resultat?.message ? [] : resultat?.items
    })
    //sinon (ou par defaut) on retourne un tableau vide
    return [];
  };

  return (
    <main>
      <SearchBar search={search} setSearch={setSearch}/>
      <ComicsCard cards={cardPicker()}/>
    </main>
  );
};

export default Comics;