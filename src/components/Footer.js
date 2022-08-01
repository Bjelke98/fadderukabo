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
          <h6 class="text-uppercase fw-bold pb-4">Fadderuka</h6>
          <p>
            <a href="#!" class="text-dark text-decoration-none">Fadderprogram</a>
          </p>
          <p>
            <a href="#!" class="text-dark text-decoration-none">Studentmesse</a>
          </p>

          <p>
            <a href="#!" class="text-dark text-decoration-none">Fadderliste</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold pb-4">Ny student?</h6>

          <p>
            <a href="#!" class="text-dark text-decoration-none">Ofte stilte spørsmål</a>
          </p>
          <p>
            <a href="#!" class="text-dark text-decoration-none hvr-underline-reveal">Studentlivet</a>
          </p>
          <p>
            <a href="#!" class="text-dark text-decoration-none">Studentorganisasjoner</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold pb-4">Kontakt</h6>

          <p><i class="fa-solid fa-location-dot fa-sm me-2"></i><a href="#" class="text-decoration-none text-dark">Gullbringvegen 36, 3800 Bø, Norge</a></p>
          <p><i class="fa-solid fa-at fa-sm me-2"></i><a href="#" class="text-decoration-none text-dark">fadderstyretbo@gmail.com</a></p>
          <p><i class="fa-brands fa-facebook-f fa-sm me-2"></i><a href="#" class="text-decoration-none text-dark">facebook.com/fadderstyretbo</a></p>
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
      <div class="d-flex justify-content-between text-dark">
        {/* <!-- Left --> */}
        <div class="f-text">
          <span>@ 2022 Fadderstyret Bø</span>
        </div>
        {/* <!-- Left --> */}

        {/* <!-- Right --> */}
        <div>
          <a href="" class="text-dark m-2 small text-decoration-none f-text">
            <i class="fa-solid fa-globe"></i><span class="ms-2">English</span></a>
        </div>
        {/* <!-- Right --> */}
      </div>

    </div>
    {/* <!-- Copyright --> */}
  </footer>
  </>
  );
}

export default Footer
