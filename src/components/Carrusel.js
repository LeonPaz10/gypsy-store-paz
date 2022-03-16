import React from 'react'



const Carrusel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://media.gucci.com/content/HeroBigStandard_3200x1520/1647264655/HeroBigStandard_Gucci-LOVE-PARADE-2022-003_001_Default.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1 className='tittle-img'>BOLSOS</h1>
        <h6> <button className='button-gold shop-the-collection'>COMPRAR</button></h6>
      </div>
    </div>
    <div className="carousel-item">
    <img src="//media.gucci.com/content/HeroBigStandard_3200x1520/1647356409/HeroBigStandard_Gucci-LOVE-PARADE-2022-022-product_001_Default.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='tittle-img'>ZAPATOS DE HOMBRE</h1>
        <h6> <button className='button-gold shop-the-collection'>COMPRAR</button></h6>
      </div>
    </div>
    <div className="carousel-item">
    <img src="//media.gucci.com/content/HeroBigStandard_3200x1520/1647256505/HeroBigStandard_Gucci-LOVE-PARADE-2022-004_001_Default.jpg" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='tittle-img2'>ZAPATOS DE MUJER</h1>
        <h6> <button className='button-gold shop-the-collection'>COMPRAR</button></h6>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default Carrusel