import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';



const OwnPage = () => {


  return (
    <section>
        <Navbar />
        <h1>Voici les comics en ta possession</h1>
        <p>Comics à afficher</p>
        <Footer />
    </section>
  )
}

export default OwnPage;