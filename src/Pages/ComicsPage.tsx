import React from 'react';
import Navbar from '../Components/NavBar';
import Comics from '../Components/Comics';
import Footer from '../Components/Footer';

type Props = {};

const ComicsPage: React.FC = () => {
  return (
    <section>
        <Navbar />
        <Comics />
        <Footer />
    </section>
  )
};

export default ComicsPage;