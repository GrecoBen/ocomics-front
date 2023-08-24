import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type Props = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

interface CustomElements extends HTMLFormControlsCollection{
  keywords?: HTMLInputElement;
}




const SearchBar: React.FC<Props> = ({ search, setSearch}) => {
  
//  Fonction qui gère l'appui sur la touche entrée
  const handleSubmit = (e:React.FormEvent) => {
    // on empêche le reload de la page
    e.preventDefault();
    // typescript nous oblige à tout typer
    const FormElements = (e.target as HTMLFormElement).elements;
    const keywords = (FormElements as CustomElements).keywords?. value;

    setSearch(keywords || "");
  };

  return(
  <form onSubmit={handleSubmit}>
    <input type="text" name="keywords" id="" value={search} onChange={(e) => setSearch(e.target.value)}  placeholder="Entrez un mot clé" />
  </form>
  );
};

export default SearchBar;