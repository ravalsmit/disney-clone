import React from 'react';
import disney from './../assets/Images/disney.png';
import marvel from './../assets/Images/marvel.png';
import nationalG from './../assets/Images/nationalG.png';
import pixar from './../assets/Images/pixar.png';
import starwar from './../assets/Images/starwar.png';

import disneyV from './../assets/Videos/disney.mp4';
import marvelV from './../assets/Videos/marvel.mp4';
import nationalGeographicV from './../assets/Videos/national-geographic.mp4';
import pixarV from './../assets/Videos/pixar.mp4';
import starwarV from './../assets/Videos/star-wars.mp4';

function ProductionHouse() {
     const productionHouseList = [
          {
               id: 1,
               image: disney,
               video: disneyV
          },
          {
               id: 2,
               image: pixar,
               video: pixarV
          },
          {
               id: 3,
               image: marvel,
               video: marvelV
          },
          {
               id: 4,
               image: starwar,
               video: starwarV
          },
          {
               id: 5,
               image: nationalG,
               video: nationalGeographicV
          },

     ]
     return (
          <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
               {productionHouseList.map((item) => (
                    <div className='relative border-[2px] border-gray-400 
                    rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer 
                    shadow-gray-800 shadow-xl'>
                         <video
                              src={item.video}
                              autoPlay
                              loop
                              playsInline
                              muted
                              className='absolute top-0 left-0 w-full h-full object-cover rounded-md 
                         z-[0] opacity-0 hover:opacity-50 transition-opacity duration-300'
                         />

                         <img
                              src={item.image}
                              className='w-full rounded-md z-[1]'
                         />
                    </div>
               ))}
          </div>
     );
}
export default ProductionHouse;