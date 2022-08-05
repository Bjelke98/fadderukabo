import React from 'react'

const FadderCard = ({name, role, image, color}) => (
  <div class="col-lg-2 col-sm-6 col-xs-6">
    <div class="pb-2"><img src={image}
        alt="profil-bilde" width="150" class="img-fluid rounded-circle my-4"/>
      <h5 class="mb-0 navfont-text text-uppercase fw-bold">{name}</h5>
      <hr class={"border border-1 opacity-75 mt-2 mb-0 profile-line align-items-center rounded "+color}/>
      <span class="small text-muted">{role}</span>
    </div>
  </div>
)

const USN = () => {
  return (
    <div>
      <div className="bg-light pb-5">
        <div className="container">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="py-5 pb-5 container">
               <img src="images/usnrektor.jpeg" class="img-fluid rounded"/>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="py-5 pb-5 container">
                  <span class="text-number text-primary">01.</span>
                  <span class="text-title text-break">Universitetet i Sørøst-Norge</span>
                  <p class="text-content mt-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <br/>
                  <p class="text-content">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                  <div className="text-center">
                    <button type="button"
                    class="btn btn-primary opacity-80 rounded-pill px-4 text-uppercase">
                    <span class="text-content"><a href="#" class="text-decoration-none text-light">usn.no</a></span>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FadderStyret = () => {

  return (
    <div>
      <div className="py-5 container">
      <div className="row m-3">
      <span class="text-number text-primary">02.</span>
          <span class="text-title text-break">Fadderstyret Bø</span>
          <p className="text-content mt-4">Hei</p>
      </div>
      
      <div class="row row-cols-lg-5 text-center justify-content-between mt-2">
    
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>
        <FadderCard name="Adrian Dahl" role="Leder" image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png" color="border-primary"/>


        {/* <div class="col col-sm-6 col-xs-6 mb-4"></div>
        <div class="col-lg-2 col-sm-6 col-xs-6 mb-4"></div> */}

      </div>
      
      </div>
    </div>
  );
}

const Question = ({q, a, id}) => (
  <div class="accordion-item border-bottom-0 bg-light">
    <h2 class="accordion-header" id={"flush-heading"+id}>
      <button class="accordion-button collapsed rounded m-2 border text-sub-title" type="button" data-bs-toggle="collapse"
        data-bs-target={"#flush-collapse"+id} aria-expanded="false" aria-controls={"flush-collapse"+id}>
        {q}
      </button>
    </h2>
    <div id={"flush-collapse"+id} class="accordion-collapse collapse text-content" aria-labelledby={"flush-heading"+id}
      data-bs-parent="#accordionFlushExample">
      <div class="accordion-body pb-5 pt-0">{a}</div>
    </div>
  </div>
)

const Qna = () => {
  let id = 0;
  return (
    <div class="bg-light py-5">
      <div class="container">
        <div className="">
          <span class="text-number text-primary">03.</span>
          <span class="text-title">Ofte stilte spørsmål</span>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">

          <Question q="sm1" a="A1etrwetwet" id={id++}/>
          <Question q="SPM2" a="A2" id={id++}/>
          <Question q="SPM3" a="A3" id={id++}/>
          <Question q="SPM4" a="A4" id={id++}/>

        </div>
      </div>
    </div>
  );
}

const FacebookCard = ({title, description, image, link="#"}) => (
  <div class="col-lg-3 col-md-6 col-sm-8 col-xs-8 pt-2 pb-2">
        <div class="card rounded bg-light border border-light shadow-sm hvr-float h-100 faddergrupper">
          <div class="bg-image hover-overlay">
            <img src={image} class="img-fluid rounded-top"/>
            
          </div>

          <div class="card-body">

            <h5 class="card-title text-center text-uppercase landing-text pt-2">
              {title}
            </h5>
            <p class="card-text program-text">
              {description}
            </p>
            
          </div>
          <div class="card-footer border-light bg-light ">
            <div class="mx-auto text-center">
              <button type="button"
                class="btn btn-sm btn-dark opacity-80 program-text rounded-pill px-4 text-uppercase">
                bli med
              </button>
            </div>
          </div>
        </div>

      </div>
)

const Facebook = () => (
  <div class=" py-5 pb-5">
  <div class="container">
    <div class="row text-center pt-5">
      <span class="text-number text-primary">04.</span>
      <span class="text-title">Studentgrupper</span>
    </div>
    <div class="row gy-2 text-center text-break justify-content-center mt-2">
      
      <FacebookCard title="USN-studenter Campus Bø"
          description="Offentlig gruppe for alle studenter ved USN Campus Bø med over 2300 medlemmer, alt fra selge / kjøpe pensumbøker, utleie av hybel, søknader osv. "
          image="images/USNStudenter.jpg"/>
      <FacebookCard title="Fadderuken i Bø"
          description="Offentlig side for Fadderuka i Bø styrt av Fadderstyret. Her finner du arragamenteter, billettslipp, faddergrupper osv. som er relatert til fadderuka."
          image="images/event/usn.png"/>
      <FacebookCard title="Campus Bø Studentboliger"
          description="Offentlig gruppe for alle studenter som bor på Gullbring, Campus Bø studentbolig. Her legges det alltid ut info relevant for de 270 studentene som befinner seg i bygget."
          image="images/USNCampus.jpg"/>
  
    </div>
  </div>
</div>
)

const Info = () => {
  
  return (
    <>
      <USN/>
      <FadderStyret/>
      <Qna/>
      <Facebook/>
    </>
  );
}

/*


  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send">
      </div>
    </form>
  </div>

*/

export default Info
