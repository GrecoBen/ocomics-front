import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import OwnCard from '../Components/OwnCard';
import { Card } from '../types/index';



const OwnPage = () => {

  const [resultAPI3, setResultAPI3] = useState<Card[]>();
  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    fetch('http://localhost:8080/api/ownedlist'
    , {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResultAPI3(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
        <Navbar />
        <h1>Voici les comics en ta possession</h1>

        {resultAPI3?.map(own => (
          <div className="basis-1/6 h-[350px]" key={own.id}>
          <OwnCard own={own}/>

          </div>
        ))}
        <Footer />
    </section>
  )
}

export default OwnPage;

