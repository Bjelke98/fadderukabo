import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const KarusellTextItem = ({name, major, description}) => {
  return(
    <div class="item">
      <div class="container">
        <div class="my-4">
          <span class="text-title lead">{name}</span>
          <span class={"text-number small quote-"+major.color}>{major.name}</span>
        </div>
        <div>
          <i class={"fas fa-quote-left text-number quote-"+major.color}></i>
          <p class="text-content">{description}</p>
          <i class={"fas fa-quote-right text-number text-end quote-"+major.color}></i>
        </div>
      </div>
    </div>
  )
}

export const KarusellItem = ({image, title=" ", description=" "}) => {
  
  return (
    <div className="item box rounded">
      <img src={image}/>
      <div className="box-content">
        <span className="text-title lead">{title}</span>
        <p className="text-content">{description}</p>
      </div>
    </div>
  );
}

const Karusell = ({children}) => {
  return (
    <OwlCarousel className='owl-theme'
      loop
      margin={20}
      autoplay
      autoplayHoverPause>
    {children}
  </OwlCarousel>
  );
}

export default Karusell
