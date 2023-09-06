import React, { useState } from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import WishList from '../Components/WishList';
import { Card } from '../types/index';



const WishPage:React.FC = () => {

    //const { userId } = useParams<{ userId: string }>();
    // @ts-ignore
    const [resultAPI5, setResultAPI5] = useState<Card[]>();
    // @ts-ignore
    const token = localStorage.getItem('accessToken');



    return (
        <section className=" bg-gray-800">
            <Navbar isAuthenticated={false} />
            <section className="mx-40 lg:mx-56">
                <h1 className='text-white font-bold mb-1 text-xl inline-block p-2 bg-red-700 my-5 '>Les comics que vous recherchez</h1>
                <WishList />
            </section>
            <Footer />
        </section>
    )
}

export default WishPage;