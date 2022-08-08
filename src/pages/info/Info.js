import { Link } from '@mui/material';
import React from 'react'
import useEnglish from '../../hooks/useEnglish';
import Translate from '../../Translate';

const FadderCard = ({name, role, image}) => (
  
  <div class="col-lg-3 col-sm-6 col-xs-6">
    <div class="pb-2"><img src={image}
        alt="profil-bilde" width="150" class="img-fluid rounded-circle my-4"/>
      <h5 class="mb-0 text-sub-title fw-bold">{name}</h5>
      <hr class="border border-primary border-1 opacity-75 mt-2 mb-0 profile-line align-items-center rounded"></hr>
      <span class="small text-muted text-sub-number">{role}</span>
    </div>
  </div>
)

const USN = () => { 
  const [english] = useEnglish();
  const t = Translate(english);
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
                  <span class="text-title text-break">{t.info.usn.title}</span>
                  <p class="text-content mt-4">{t.info.usn.description1}</p>
                  <br/>
                  <p class="text-content">{t.info.usn.description2}</p>
                  <div className="text-center">
                    <a href="https://www.usn.no/"><button type="button"
                    class="btn btn-primary opacity-80 rounded-pill px-4 text-uppercase">
                    <span class="text-content text-decoration-none text-light">usn.no</span>
                    </button></a>
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
  const [english] = useEnglish();
  const t = Translate(english);
  return (
    <div>
      <div className="py-5 container">
      <div className="row m-3">
      <span class="text-number text-primary">02.</span>
          <span class="text-title text-break">Fadderstyret Bø</span>
      </div>
      
      <div class="row row-col-lg-3 text-center justify-content-left mt-2">
    
        <FadderCard name="Adrian Dahl" role={t.info.styret.role1} image="https://cdn.discordapp.com/attachments/745379181214433454/933000365685760030/unknown.png"/>
        <FadderCard name="Oda Kvammen" role={t.info.styret.role2} image="https://tonsmb.org/wp-content/uploads/2014/03/default-placeholder.png"/>
        <FadderCard name="Turid Lovise Eliassen" role={t.info.styret.role3} image="images/turid.jpg"/>
        <FadderCard name="Andrea Marie Sæter" role={t.info.styret.role3} image="images/andrea.jpg"/>
        <FadderCard name="Thomas Valderhaug" role={t.info.styret.role4} image="images/thomas.jpg"/>
        <FadderCard name="Erik Rosland" role={t.info.styret.role5} image="images/erik.jpg"/>
        <FadderCard name="Herman Simonsen" role={t.info.styret.role5} image="images/herman.jpg"/>
        <FadderCard name="Henrik Lindam" role={t.info.styret.role5} image="images/henrik.jpg"/>
        <FadderCard name="Tone Ytterbøe Nordh" role={t.info.styret.role6} image="images/tone.jpg"/>
        <FadderCard name="Albertine Ellingsen" role={t.info.styret.role6} image="images/albertine.jpg"/>
        <FadderCard name="Åsmund Haugaard" role={t.info.styret.role7} image="images/åsmund.jpg"/>
        <FadderCard name="Anders Johnsen" role={t.info.styret.role7} image="https://tonsmb.org/wp-content/uploads/2014/03/default-placeholder.png"/>
        <FadderCard name="Mohammed Abdulrahman" role={t.info.styret.role8} image="images/kanan.jpg"/>

      </div>
      
      </div>
    </div>
  );
}

const Question = ({q, a, link, urltext, id}) => (
  <div class="accordion-item border-bottom-0 bg-light">
    <h2 class="accordion-header" id={"flush-heading"+id}>
      <button class="accordion-button collapsed rounded m-2 border text-sub-title" type="button" data-bs-toggle="collapse"
        data-bs-target={"#flush-collapse"+id} aria-expanded="false" aria-controls={"flush-collapse"+id}>
        {q}
      </button>
    </h2>
    <div id={"flush-collapse"+id} class="accordion-collapse collapse text-content" aria-labelledby={"flush-heading"+id}
      data-bs-parent="#accordionFlushExample">
      <div class="accordion-body pb-5 pt-0">{a}
      <a class="mx-2" href={link}>{urltext}</a>
      </div>
    </div>
  </div>
)

const Qna = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  let id = 0;
  return (
    <div class="bg-light py-5">
      <div class="container">
        <div id='faq'>
          <span class="text-number text-primary">03.</span>
          <span class="text-title">{t.info.faq.title}</span>
        </div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <Question q={t.info.faq.q4} a={t.info.faq.a4} id={id++} link="https://www.kroaibo.no" urltext="Kroaibo.no"/>
          <Question q={t.info.faq.q1} a={t.info.faq.a1} id={id++}/>
          <Question q={t.info.faq.q5} a={t.info.faq.a5} link="https://www.fadderukabo.no/faddergrupper" urltext="Link" id={id++}/>
          <Question q={t.info.faq.q2} a={t.info.faq.a2} id={id++}/>
          <Question q={t.info.faq.q6} a={t.info.faq.a6} id={id++} link="https://www.sikresiden.no" urltext="Sikresiden.no"/>
          
          <Question q={t.info.faq.q3} a={t.info.faq.a3} id={id++}/>
        </div>
      </div>
    </div>
  );
}

const FacebookCard = ({title, description, image, link="#", bttext}) => (
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
              <a href={link}><button type="button"
                class="btn btn-sm btn-dark opacity-80 program-text rounded-pill px-4 text-uppercase">
                {bttext}
              </button></a>
            </div>
          </div>
        </div>

      </div>
)

const Facebook = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  return (
  <div class=" py-5 pb-5">
  <div class="container" id='studentgrupper'>
    <div class="row text-center">
      <span class="text-number text-primary">04.</span>
      <span class="text-title">{t.info.studentgruppe.title}</span>
    </div>
    <div class="row gy-2 text-center text-break justify-content-center mt-2">
      
      <FacebookCard title={t.info.studentgruppe.gp1}
          description={t.info.studentgruppe.gp1desc} 
          bttext={t.info.studentgruppe.gp1bt}
          image="images/USNStudenter.jpg"
          link="https://www.facebook.com/groups/141916303345323"/>
      <FacebookCard title={t.info.studentgruppe.gp2}
          description={t.info.studentgruppe.gp2desc} 
          bttext={t.info.studentgruppe.gp2bt}
          image="images/event/usn.png"
          link="https://www.facebook.com/fadderstyretbo"/>
      <FacebookCard title={t.info.studentgruppe.gp3}
          description={t.info.studentgruppe.gp3desc} 
          bttext={t.info.studentgruppe.gp3bt}
          image="images/USNCampus.jpg"
          link="https://www.facebook.com/groups/818003275681411"/>
  
    </div>
  </div>
</div>
)}

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
