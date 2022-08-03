import React from 'react'
import InfoBlock from './InfoBlock'


const Fadderuka = () => (
  <div>
    <div class="container py-5 pb-5 ">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="py-5 pb-5 container">
          <span class="text-number text-blue">01.</span>
          <span class="text-title">Fadderuka</span>
          <p class="text-content mt-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
          <br/>
          <p class="text-content">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <img src="images/fadderukenforside.jpg" class="img-fluid rounded"/>
      </div>
    </div>
  </div>
  <div class="bg-dark py-5">
  <div class="container">
    <div class="row mt-5">
      <div class="text-center">
      <span class="text-number text-blue">02.</span>
        <span class="text-title text-light">Fadderuka Bø</span>
        </div>
    </div>
    <div class="row my-5 text-white">

      <InfoBlock title="200 Faddere"
          description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"
          icon={<i class="fas fa-graduation-cap fa-2xl block w-100 mb-4 text-blue"></i>}/>
      <InfoBlock title="47 Arrangementer"
          description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"
          icon={<i class="fas fa-people-group fa-2xl block w-100 mb-4 text-blue"></i>}/>
      <InfoBlock title="9 Faddergrupper"
          description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"
          icon={<i class="fas fa-hand-holding-heart fa-2xl block w-100 mb-4 text-blue"></i>}/>
                       
    </div>
  </div>
  </div>
  </div>
)

export default Fadderuka
