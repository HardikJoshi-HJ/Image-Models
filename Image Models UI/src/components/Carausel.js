import React from 'react'

const Carausel = () => {
  return (
    <div>
        
      <section id='caraousel'>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/02/large-1676045659-ffe90257b8e9f0337fb0b58a40d1e91e.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1680634301-2c9b0cbe924ccbda6de512c63b9c95c5.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://mediaslide-us.storage.googleapis.com/imgmodels/news_pictures/2023/04/large-1681311012-862cbc46831dddf045019284dc818509.jpg" className="d-block w-100" alt="pic" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

    </div>
  )
}

export default Carausel