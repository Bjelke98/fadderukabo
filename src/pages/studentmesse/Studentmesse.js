import React from 'react'


const StudentmesseCard = ({image, name, url}) => (
    <div class="col-lg-3 col-md-4 col-sm-6 p-2">
    <a href={url}>
        <div className="card border-0">
      <img src={image}
          alt="bilde" class="img-fluid rounded card-img-top"/>
        <span class="bg-dark text-sub-title fs-4 text-light position-absolute fixed-bottom ps-2">{name}</span>
      </div>
      </a>
    </div>

  )

const Studentmesse = () => {
    return (
    <div>
        <div>
        <div className="bg-light pb-5">
        <div className="container">
          <div class="row">
            
            <div class="col-md-6 col-sm-12">
              <div class="py-5 pb-5 container">
                  <span class="text-number text-success">01.</span>
                  <span class="text-title text-break">Studentmesse</span>
                  <p class="text-content mt-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <br/>
                  <p class="text-content">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <div className="text-center">
                    
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="py-5 pb-5 container">
               <img src="images/studentmesse.avif" class="img-fluid rounded"/>
               <span className="text-content text-muted small p-1">FOTO: Bø blad, José Bakker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        <div class="">
            <div className="container">
                <div className="text-center pt-5">
                    <span class="text-number text-success">02.</span>
                    <span class="text-title text-break">Aktørene</span>
                </div>
                
                <div className="row px-2 py-5">
                    <StudentmesseCard url="Leder" image="images/event/Gullbring.jpg" name="Rek-Tor"/>
                    <StudentmesseCard url="Leder" image="images/sporty.png" name="Rek-Tor"/>
                    <StudentmesseCard url="Leder" image="images/GullbringMesse.png" name="Rek-Tor"/>
                    <StudentmesseCard url="Leder" image="images/nr1fitness.jpg" name="Rek-Tor"/>
                    <StudentmesseCard url="Leder" image="images/RødekorsMesse.jpeg" name="Rek-Tor"/>
                </div>
            </div>
        </div>
    </div>
    );
  }

export default Studentmesse
