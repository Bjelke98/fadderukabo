import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const KarusellItem = ({image, title="Title", text="Text"}) => {
  
  return (
    <div className="item box rounded">
      <img src={image}/>
      <div className="box-content">
        <span className="text-title lead">{title}</span>
        <p className="text-content">{text}</p>
      </div>
    </div>
  );
}

const KarusellDemo = () => {
  
  return (
  <OwlCarousel className='owl-theme'
      loop
      margin={20}
      autoplay
      autoplayHoverPause>
    <KarusellItem image="images/kroakonsertbø.jpg"/>
    <KarusellItem image="images/natur.jpg"/>
    <KarusellItem image="images/GullbringKul.jpg"/>
    <KarusellItem image="images/kroakonsertbø.jpg"/>
    <KarusellItem image="images/natur.jpg"/>
    <KarusellItem image="images/GullbringKul.jpg"/>
    <KarusellItem image="images/kroakonsertbø.jpg"/>
    <KarusellItem image="images/natur.jpg"/>
    <KarusellItem image="images/GullbringKul.jpg"/>
  </OwlCarousel>
  );
}

const Karusell = () => {
  return (
    <div>
      <div class="container py-5">
        <div class="row">
          <div class="pt-5 pb-2 container">
            <span class="text-number text-red">01.</span>
            <span class="text-title">Studentlivet</span>
            </div>
        </div>
        <div class="row pb-5">
          <div class="col-12 m-auto">
            <KarusellDemo/>

            {/* <div class="owl-carousel owl-theme">
              <div class="item box rounded">
                <a href="#">
                  <img src="images/kroakonsertbø.jpg"/>
                  <div class="box-content">
                    <span class="text-title lead">Kroa</span>
                    <p class="text-content">Studentens samfunshus! Her er det mye spenning og morro, konserter og lek.</p>
                  </div>
                </a>
              </div>
              <div class="item box rounded">
                <a href="#">
                  <img src="images/natur.jpg"/>
                  <div class="box-content">
                    <span class="text-title lead">Kroa</span>
                    <p class="text-content">Studentens samfunshus! Her er det mye spenning og morro, konserter og lek.</p>
                  </div>
                </a>
              </div>
              <div class="item box rounded">
                <a href="#">
                  <img src="images/GullbringKul.jpg"/>
                  <div class="box-content">
                    <span class="text-title lead">Kroa</span>
                    <p class="text-content">Studentens samfunshus! Her er det mye spenning og morro, konserter og lek.</p>
                  </div>
                </a>
              </div> 
              </div>
              */}
              
          </div>
        </div>

      </div>
    </div>
  );
}

export default Karusell
