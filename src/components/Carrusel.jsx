import React from 'react'
import { Carousel } from 'react-bootstrap'

const Carrusel = () => {
  return (
    <div className='carrusel'>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1649777485/HeroRegularStandard_Gucci-LOVE-PARADE-2022-063_001_Default.jpg"
      alt="Moda"
    />
   
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1648484126/HeroRegularStandard_Gucci-LOVE-PARADE-2022-028_001_Default.jpg"
      alt="Frescura"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1647264675/HeroRegularStandard_Gucci-LOVE-PARADE-2022-016_001_Default.jpg"
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default Carrusel