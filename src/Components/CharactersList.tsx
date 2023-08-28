import React, { useEffect, useState } from 'react';
import { ResultAPI } from '../types';
import CharactersCard from './CharactersCard';
import Navbar from './NavBar';
import Footer from './Footer';

const CharacterImage: React.FC = () => {
<Navbar/>
  const [resultAPI2, setResultAPI2] = useState<ResultAPI[]>();

  useEffect(() => {
    fetch('http://localhost:8080/api/character')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultAPI2(data);
      })
      .catch((err) => console.error(err)); 
  },); 
  
  return (
    <div>
        <Navbar/> 
    <div className="flex flex-wrap grid grid-cols-2 md:grid-cols-6 place-content-center mb-10">
      {/* <SearchBar search={search} setSearch={setSearch}/>
      <ComicsCard cards={cardPicker()}/> */}
      {resultAPI2?.map(post => (
        
        <div className="basis-1/6 h-[350px]">
          <CharactersCard post={post}/>
        </div>        
        ))}
    </div>
    <Footer /> 
    </div>
  );
};


export default CharacterImage;

function setResultAPI2(data: any) {
  throw new Error('Function not implemented.');
}

