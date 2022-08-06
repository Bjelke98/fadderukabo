import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const KarusellTextItem = ({name, major, description}) => {
  return(
    <div class="item">
      <div class="container">
        <div class="my-4">
          <span class="text-sub-title">{name}</span>
          <span class={"text-sub-number small f-text-"+major.color}>{major.name}</span>
        </div>
        <div>
          <i class={"fas fa-quote-left  f-text-"+major.color}></i>
          <p class="text-content small mb-0">{description}</p>
          <i class={"fa-solid fa-quote-right w-100 text-end f-text-"+major.color}></i>
          
        </div>
      </div>
    </div>
  )
}

export const KarusellItem = ({image, title=" ", description=" ", link="", bttext}) => {
  
  return (
    
      <div className="item box rounded">
      <img src={image}/>
      <div className="box-content">
        <span className="text-sub-title fs-4">{title}</span>
        <p className="text-content">{description}</p>
        <div className="text-center">
        <a href={link}><button type="button" class="btn btn-sm btn-light text-dark opacity-80 program-text rounded-pill px-4 text-uppercase">
                    {bttext}</button>
                    </a>
         </div>           
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
      autoplayHoverPause
      responsive={
         {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
      }>
    {children}
  </OwlCarousel>
  );
}

export default Karusell
