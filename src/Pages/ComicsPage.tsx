import React from 'react';
import Navbar from '../Components/NavBar';
import Comics from '../Components/Comics';
import Footer from '../Components/Footer';
import SearchBar from '../Components/SearchBar';

type Props = {};

const ComicsPage: React.FC = () => {
  return (
    <section>
        <Navbar />
        <SearchBar />
        <Comics />
        <Footer />
    </section>
  )
};

export default ComicsPage;