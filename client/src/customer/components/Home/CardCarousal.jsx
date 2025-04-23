import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Button } from '@mui/material';
import HomeCard from './HomeCard';

const CardCarousal = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);

    const syncActiveIndex = ({item}) => setActiveIndex(item);

    const items = data.slice(0,10).map((item, index) => <HomeCard key={index} product={item}/>)
  return (
    <div>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          />
        { activeIndex !== items.length - 5 && <Button onClick={slideNext} variant='contained' className='z-50' sx={{position:"absolute", top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)"}} color='white' aria-label='next'>
          <NavigateBeforeIcon sx={{transform:"rotate(90deg)"}}/>
        </Button>}
        { activeIndex !== 0 && <Button onClick={slidePrev} variant='contained' className='z-50' sx={{position:"absolute", top:"8rem", left:"0rem", transform:"translateX(-50%) rotate(90deg)"}} color='while' aria-label='next'>
          <NavigateBeforeIcon sx={{transform:"rotate(-90deg)"}}/>
        </Button>}
      </div>
    </div>
  )
}

export default CardCarousal
