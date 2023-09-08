import React from 'react';
import Navbar from '../Components/NavBar';
import Comics from '../Components/Comics';
import Footer from '../Components/Footer';


const ComicsPage: React.FC = () => {
  
  return (
    <section>
      <div className = "flex flex-col  bg-gray-800 min-h-screen " >
        <Navbar isAuthenticated={false} />
        <div className ="mx-40 lg:mx-56">
          <Comics />
        </div>
        <Footer />
        </div>
    </section>
  )
};

export default ComicsPage;