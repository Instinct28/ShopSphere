import React from 'react'
import Carousel from './Carousel'
import CardCarousal from './CardCarousal'
import Mens_Kurta from '../../../../Data/Mens_Kurta'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <CardCarousal data={Mens_Kurta} sectionName={"Men's Kurta"}/>
        <CardCarousal data={Mens_Kurta} sectionName={"Men's Shoes"}/>
        <CardCarousal data={Mens_Kurta} sectionName={"Men's Shirt"}/>
        <CardCarousal data={Mens_Kurta} sectionName={"Women's Kurta"}/>
        <CardCarousal data={Mens_Kurta} sectionName={"Women's Saree"}/>
        <CardCarousal data={Mens_Kurta} sectionName={"Women's Dress"}/>
      </div>
    </div>
  )
}

export default Home
