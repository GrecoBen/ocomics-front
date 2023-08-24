import React, { useState } from 'react'; 
import Carousel from './Carousel';
import { Card } from 'antd';
import Comics from './/Comics'; 
import Footer from './Footer';

interface HomeProps {
  initialCount: number;
  totalCharacters: number;
}

const Home: React.FC = () => {
  const [initialCharacterCount, setInitialCharacterCount] = useState(6);
  const totalCharacterCount = 20; 

  const gridStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
  };

  const handleShowMoreCharacters = () => {
    setInitialCharacterCount(totalCharacterCount);
  };
  
  return (
    <div className="home">
      <div className="top-section">
        <SearchBar onSearch={(query: string) => { /* Gérez la recherche ici */ }} />
      </div>
      <h1>Bienvenue Sur O'Comics</h1>
      <p>
        O/comics est la plateforme idéale pour les passionnés de comics. Découvrez de nouveaux comics, échangez avec d'autres membres et complétez vos collections.
      </p>
      <p>
        Rejoignez notre communauté pour partager votre passion et discuter avec d'autres fans de comics!
      </p>
      <Carousel /> 
      <CharacterList initialCount={initialCharacterCount} totalCharacters={totalCharacterCount} />
      <Card title="Nos Comics">
        <Card.Grid style={gridStyle}>
          <Comics /> 
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card>
      <button onClick={handleShowMoreCharacters}>Plus de personnages</button>
      <Footer /> 
    </div>
  );
};

export default Home;
