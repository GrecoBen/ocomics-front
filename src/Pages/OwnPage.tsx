import React, {  useState } from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import OwnList from '../Components/OwnList';
import { Card } from '../types/index';



const OwnPage: React.FC = () => {

  //const { userId } = useParams<{ userId: string }>();
  // @ts-ignore
  const [resultAPI3, setResultAPI3] = useState<Card[]>();
  // @ts-ignore
  const token = localStorage.getItem('accessToken');



  return (
    <section className=" bg-gray-800">
      <Navbar isAuthenticated={false} />
      <section className="mx-40 lg:mx-56">
        <h1 className='text-white font-bold mb-1 text-xl inline-block p-2 bg-red-700 my-5 '>Vos comics</h1>
        <OwnList />
      </section>
      <Footer />
    </section>
  )
}

export default OwnPage;

