import React, { useEffect, useState } from 'react';
import { Card } from '../types/index';
import ComicsCard from './ComicsCard';


const WishList: React.FC = () => {

    const [resultAPI, setResultAPI] = useState<Card[]>();

  const token = localStorage.getItem('accessToken');
  // console.log(search);
  useEffect(() => {
    fetch('https://grecoben-server.eddi.cloud/api/wishlist'
      , {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => response.json())
      .then((data) => {        
        setResultAPI(data[0].comics);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 my-10 md:my-16 gap-5">
        {resultAPI?.map(item => (

        <div className="basis-1/4" key={item.id}>
         <ComicsCard key={item.id} card={item} wanted={true} owned={false} />

    </div>

))}
    </div>
  )
};

export default WishList;