import React, { useEffect, useState } from 'react';
import ComicsCard from './ComicsCard';
import SearchBar from './SearchBar';
import { Card, ResultAPI } from '../types/index';
import CharactersCard from './CharactersCard';
/* type Props = {} */

const Comics: React.FC = () => {
  // State de synchro de l'input
  const [search, setSearch] = useState('');
 // State de stockage du resultat de l'API
  const [resultAPI, setResultAPI] = useState<ResultAPI[]>();
  const [resultAPI2, setResultAPI2] = useState<ResultAPI[]>();
  // console.log(search);
  useEffect(() => {
    fetch('http://localhost:8080/api/comics')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultAPI(data);
      })
      .catch((err) => console.error(err));
  }, [search]);
  
  useEffect(() => {
    fetch('http://localhost:8080/api/character')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultAPI2(data);
      })
      .catch((err) => console.error(err)); 
  },); 

  // Fonction qui gère les props de ComicsCard
  // ".message" est le message d'erreur dans l'API
  /*const cardPicker = (): Card[]  => {
    if (!resultAPI || resultAPI.message === "le message d'erreur d'API") return [];
    return resultAPI.items;
    }; */

  return (
    <div className="flex flex-wrap place-content-center mx-56">
      {/* <SearchBar search={search} setSearch={setSearch}/>
      <ComicsCard cards={cardPicker()}/> */}
      {resultAPI?.map(item => (
        
        <div className="basis-1/3 p-5">
          <ComicsCard card={item}/>

        </div>
        
        ))}
        {resultAPI2?.map(item => (
        
        <div className="basis-1/3 p-5">
          
          <CharactersCard post={post}/>
        </div>
        
        ))}
    </div>
  );
};
//<CharactersCard post={post}/> 
export default Comics;