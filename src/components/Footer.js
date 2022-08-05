import React from 'react'

const Footer = () => {
  
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
          <h6 class="text-uppercase fw-bold pb-4 text-sub-title">Fadderuka</h6>
          <p>
            <a href="#!" class="text-dark text-decoration-none text-content">Fadderprogram</a>
          </p>
          <p>
            <a href="#!" class="text-dark text-decoration-none text-content">Studentmesse</a>
          </p>

          <p>
            <a href="#!" class="text-dark text-decoration-none text-content">Fadderliste</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold pb-4 text-sub-title text-sub-title">Ny student?</h6>

          <p>
            <a href="#!" class="text-dark text-decoration-none text-content">Ofte stilte spørsmål</a>
          </p>
          <p>
            <a href="#!" class="text-dark text-decoration-none hvr-underline-reveal text-content">Faddergrupper</a>
          </p>
          <p>
            <a href="#!" class="text-dark text-decoration-none text-content">Studentgrupper</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold pb-4 text-sub-title">Kontakt</h6>

          <p><i class="fa-solid fa-location-dot fa-sm me-2"></i><a href="#" class="text-decoration-none text-dark text-content">Gullbringvegen 36, 3800 Bø, Norge</a></p>
          <p><i class="fa-solid fa-at fa-sm me-2"></i><a href="#" class="text-decoration-none text-content">fadderstyretbo@gmail.com</a></p>
          <p><i class="fa-brands fa-facebook-f fa-sm me-2"></i><a href="#" class="text-decoration-none text-content">facebook.com/fadderstyretbo</a></p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
    </div>
      {/* <!-- Grid row --> */}
    <div class="container">
      <div class="d-flex justify-content-center align-items-center hvr-pulse">

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
          <span> 2022 @ Laget av Adrian Dahl & Krister Iversen</span>
        </div>

    </div>
    {/* <!-- Copyright --> */}
  </footer>
  </>
  );
}

export default Footer
