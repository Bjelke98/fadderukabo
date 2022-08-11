import React from 'react'
import useEnglish from '../../hooks/useEnglish';
import Translate from '../../Translate';


const StudentmesseCard = ({image, link, bttext}) => (
    <div class="col-lg-3 col-md-4 col-sm-6">
        <div className="item box rounded my-2">
      <img src={image}/>
      <div className="box-content">
        
        
        <div className="text-center">
        <a href={link} target="_blank"><button type="button" class="btn btn-sm btn-light text-dark opacity-80 program-text rounded-pill px-4 text-uppercase">
                    {bttext}</button>
                    </a>
         </div>           
      </div>
    </div>
    </div>

  )

const Studentmesse = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  return (
    <div>
        <div>
        <div className="bg-light pb-5">
        <div className="container">
          <div class="row">
            
            <div class="col-md-6 col-sm-12">
              <div class="py-5 pb-5 container">
                  <span class="text-number text-success">01.</span>
                  <span class="text-title text-break">{t.studentmesse.title1}</span>
                  <p class="text-content mt-4">{t.studentmesse.desc1}</p><br/>
                  <p class="text-content">{t.studentmesse.desc2}</p>
                  <div className="text-center">
                    
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="py-5 pb-5 container">
               <img src="images/studentmesse.avif" class="img-fluid rounded"/>
               <span className="text-content text-muted small p-1">{t.studentmesse.foto} Bø blad, José Bakker</span>
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
                    <span class="text-title text-break">{t.studentmesse.title2}</span>
                </div>
                
                <div className="row px-2 py-5">
                    <StudentmesseCard link="https://www.instagram.com/skape_usn/" image="images/studentmesse/skape.jpg" bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.facebook.com/sigma.USN/" image="images/studentmesse/sigma.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.facebook.com/root.usn" image="images/studentmesse/root.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.facebook.com/EMUvedUSN" image="images/studentmesse/emu.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.facebook.com/fremmeusn" image="images/studentmesse/fremme.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.facebook.com/studentiusnbo" image="images/studentmesse/sdsn.png"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.kroaibo.no/" image="images/studentmesse/kroa.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.facebook.com/nitostudentenebo" image="images/studentmesse/nito.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.ssn.no/" image="images/studentmesse/ssn.png"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.gullbringtrening.no/" image="images/studentmesse/gullbring.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.nr1fitness.no/" image="images/studentmesse/nr1fitness.png"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://grovenfitness.no/" image="images/studentmesse/groven.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://boblad.no/" image="images/studentmesse/blad.png"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://midt-telemark.kommune.no/" image="images/studentmesse/telemark.png"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.rodekors.no/lokalforeninger/telemark/bo-og-sauherad/" image="images/studentmesse/rødekors.jpg"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.gullbring.no/" image="images/studentmesse/gullbring.png"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.facebook.com/klatregruppaiboe" image="images/studentmesse/klatre.png"  bttext={t.studentmesse.bttext}/>
                    <StudentmesseCard link="https://www.facebook.com/groups/bopadlegruppe/" image="images/studentmesse/padle.png"  bttext={t.studentmesse.bttext}/>
                </div>
            </div>
        </div>
    </div>
    );
  }

export default Studentmesse
