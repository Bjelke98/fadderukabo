import React from 'react'
import useEnglish from '../hooks/useEnglish';
import Translate from '../Translate';
import {Link} from "react-router-dom";

const Footer = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  return (
    <>
    <footer class="text-center text-lg-start text-dark bg-light">

    {/* <!-- Section: Links  --> */}

    <div class="container text-center text-md-start pt-3">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <img src="/images/USNIkon.png" width="100"/>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold pb-4 text-sub-title">{t.footer.h1.title}</h6>
          <p>
            <a href="/program" class="text-dark text-decoration-none text-content">{t.footer.h1.subtitle1}</a>
          </p>
          <p>
            <a href="/studentmesse" class="text-dark text-decoration-none text-content">{t.footer.h1.subtitle2}</a>
          </p>

          <p>
            <a href="/fadderliste" class="text-dark text-decoration-none text-content">{t.footer.h1.subtitle3}</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold pb-4 text-sub-title text-sub-title">{t.footer.h2.title}</h6>

          <p>
            <a href="/info#faq" class="text-dark text-decoration-none text-content">{t.footer.h2.subtitle1}</a>
          </p>
          <p>
            <a href="/info#studentgrupper" class="text-dark text-decoration-none hvr-underline-reveal text-content">{t.footer.h2.subtitle2}</a>
          </p>
          <p>
            <a href="/fadder#faddergrupper" class="text-dark text-decoration-none text-content">{t.footer.h2.subtitle3}</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold pb-4 text-sub-title">{t.footer.h3.title}</h6>

          <p><i class="fa-solid fa-location-dot fa-sm me-2"></i><a href="https://www.google.com/maps/place/Gullbringvegen+36,+3800+B%C3%B8,+Norge/@59.408752,9.0598326,17z/data=!3m1!4b1!4m5!3m4!1s0x46474937aa317627:0x31bd8465aebe863c!8m2!3d59.408752!4d9.0598326" target="_blank" class="text-decoration-none text-dark text-content">Gullbringvegen 36, 3800 Bø, Norge</a></p>
          <p><i class="fa-solid fa-at fa-sm me-2"></i><a href="mailto:fadderstyretbo@gmail.com" class="text-decoration-none text-content">fadderstyretbo@gmail.com</a></p>
          <p><i class="fa-brands fa-facebook-f fa-sm me-2"></i><a href="https://www.facebook.com/fadderstyretbo" target="_blank" class="text-decoration-none text-content">facebook.com/fadderstyretbo</a></p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
    </div>
      {/* <!-- Grid row --> */}
    <div class="container">
      <div class="d-flex justify-content-center align-items-center">

        <img src="images/Instagram.png" width="100"/>
        <span class="vr me-2 ms-2"></span>
        <a href="https://www.instagram.com/fadderuka_bo/" class="text-decoration-none text-dark">
          <h5 class="f-text">@fadderuka_bo</h5>
        </a>

      </div>
    </div>
    {/* <!-- Section: Links  --> */}

    {/* <!-- Copyright --> */}
    <div class="container pb-3">
      <hr/>
      
        {/* <!-- Left --> */}
        <div class="text-nav small text-dark">
          <span> {t.footer.copyright}</span>
        </div>

    </div>
    {/* <!-- Copyright --> */}
  </footer>
  </>
  );
}

export default Footer
