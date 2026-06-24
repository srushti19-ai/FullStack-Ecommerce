// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import {MaincarouselData} from '../../data/MaincarouselData';

// const Maincarousel = () => (
//     const items=MaincarouselData.map((item)=> <img className='cursor-pointer' src={item.image} alt="" />)
   
//     return (
//         <AliceCarousel
//         items={items}
//         />
//     )
// }
// export default Maincarousel;

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MaincarouselData } from './Maincarouseldata';

const Maincarousel = () => {

  const items = MaincarouselData.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer w-full h-[500px] object-cover"
      src={item.image}
      alt="carousel"
    />
  ));

  return (
    <AliceCarousel
      items={items}
      autoPlay
      autoPlayInterval={3000}
      infinite
      disableButtonsControls
      disableDotsControls
      mouseTracking
    />
  );
};

export default Maincarousel;