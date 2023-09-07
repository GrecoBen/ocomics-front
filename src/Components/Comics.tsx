import React, { useEffect, useState } from 'react';
import ComicsCard from './ComicsCard';
import SearchBar from './SearchBar';
import { Card } from '../types/index';
import CharactersCard from './CharactersCard';
/* type Props = {} */

const Comics: React.FC = () => {
  // State de synchro de l'input
  const [search, setSearch] = useState('');
  // State de stockage du resultat de l'API
  const [resultAPI, setResultAPI] = useState<Card[]>();

  // console.log(search);
  useEffect(() => {
    fetch(`http://localhost:8080/api/comics?title=${search}`)
      .then((response) => response.json())
      .then((data) => {        
        setResultAPI(data);
      })
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-10 md:my-16 gap-5">
           {resultAPI?.map(item => (
        <div className="basis-1/4" key={item.id}>
          <ComicsCard key={item.id} card={item} />
        </div>

      ))}
    </div>

  );

};

export default Comics;