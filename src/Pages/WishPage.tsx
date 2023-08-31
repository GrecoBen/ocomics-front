import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';



const WishPage = () => {
  return (
    <section>
        <Navbar />
        <h1>Voici les comics que tu souhaiterais obtenir !</h1>
        <p>Comics à afficher</p>
        <Footer />
    </section>
  )
}

export default WishPage;