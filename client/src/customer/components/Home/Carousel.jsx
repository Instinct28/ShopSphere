import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarousalData } from './CarousalData';

const Carousel = () => {
    const items = CarousalData.map((item) => <img className='cursor-pointer' src={item.image} alt='image'/>)
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
    </div>
  )
}

export default Carousel
