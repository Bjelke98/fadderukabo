import React from 'react'
import Karusell, { KarusellTextItem } from '../../components/Karusell'

import { MajorContext } from '../../App'
import useEnglish from '../../hooks/useEnglish'
import Translate from '../../Translate'

const TextBox01 = ({fade, children}) => (
  <div class={"row pb-5 aos-init aos-animate "+fade} data-aos={fade} data-aos-duration="1500">
    {children}
  </div>
)

const Text01 = ({title, description}) => (
  <div class="col-md-6">
    <span class="text-red landing-text">{title}</span>
    <p class="text-content">{description}</p>
  </div>
)

const Image01a = ({image}) => (
  <div class="col-md-6">
  <img class="stepitem img-fluid rounded" src={image}/>
  </div>
)

const Image01b = ({image}) => (
  <img class="stepitem img-fluid rounded my-2" src={image}/>
)

const Box01 = ({title, description, image, mirror}) => (
  <TextBox01 fade={mirror?"fade-left":""}>
    {!mirror && <Text01 title={title} description={description}/>}
    <Image01a image={image}/>
    {mirror && <Text01 title={title} description={description}/>}
  </TextBox01>
)

const ColA01 = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  return (
  <div class="col">

    <Box01 title={t.fadder.fadder.subtitle1}
    description={t.fadder.fadder.desc1}
    image="images/bluefadder.jpeg"/>

    <Box01 title={t.fadder.fadder.subtitle2}
    description={t.fadder.fadder.desc2} 
    image="images/yellowfadder2.jpeg" mirror/>

    <Box01 title={t.fadder.fadder.subtitle3}
    description={t.fadder.fadder.desc3}
    image="images/lillefadder (1).png"/>
    
  </div>
)}

const ColB01 = () => {
  return(
    <div class="col botitem my-auto mx-5">
        <Image01b image="images/redfadder.jpeg"/>
        <Image01b image="images/pinkfadder.jpeg"/>
      </div>
  );
}



const Fadder = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  const Fadder01 = () => (
    <div class="container my-5">
      <div class="row">
        <div>
          <span class="text-number text-red">01.</span>
          <span class="text-title">{t.fadder.fadder.title}</span>
        </div>
      </div>
    
      <div class="row justify-content-center">
        
        <ColA01/>
    
        <ColB01/>
    
      </div>
    </div>
    )
    
    const Fadder02 = () => (
    <div>
    <div class="bg-light">
        <div class="container">
          <div class="row pt-5">
            
            <div class="col-md-6 col-xs-12 text-center">
              <img src="images/tryggfadder.png" class="bg-red m-3"/>
            </div>
            <div class="col-md-6 col-xs-12">
              <div class="p-3">
              <span class="text-number">02.</span>
              <span class="text-title text-red text-uppercase">{t.fadder.tryggfadder.title}</span>
              <p class="text-content">{t.fadder.tryggfadder.desc}</p>
              </div>
            </div>
            </div>
            <div class="row pb-5 text-center">
              <div class="p-3">
                <a href="https://www.sikresiden.no/"><button type="button"
                      class="btn btn-dark opacity-80 rounded-pill px-4 text-uppercase">
                      <span class="text-content"><span class="text-decoration-none text-light">sikresiden.no</span></span>
                    </button></a>
              </div>
            </div>
        </div>
      </div>
    </div>
    )
    
    const Fadder03Card = ({title, description, image,text, link="#"}) => (
      <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 pt-2 pb-2">
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
                    {text}
                  </button></a>
                </div>
              </div>
            </div>
    
          </div>
    )
    
    const Fadder03 = () => (
    <div class=" py-5 pb-5">
      <div class="container" id='faddergrupper'>
        <div class="row text-center pt-5">
          <span class="text-number text-red">03.</span>
          <span class="text-title">{t.fadder.faddergrupper.title}</span>
        </div>
        <div class="row gy-2 text-center text-break justify-content-center mt-2">
          
          <Fadder03Card title="Eiendomsmegling"
              description={t.fadder.faddergrupper.group1}
              image="images/faddergruppe/eiendomsmeglingcolor.jpg"
              link="https://www.facebook.com/groups/2816079458536275"
              text={t.fadder.faddergrupper.groupbtn}
              />
              
          <Fadder03Card title="Idrett, trening og ledelse"
              description={t.fadder.faddergrupper.group2}
              image="images/faddergruppe/idrett trening ledelse.jpg (full_page)color.jpg"
              link="https://www.facebook.com/groups/734399761138627"
              text={t.fadder.faddergrupper.groupbtn}/>
          <Fadder03Card title="Innovasjon og entreprenørskap"
              description={t.fadder.faddergrupper.group3}
              image="images/faddergruppe/Innovasjon-og-entrepren├©rskap_color.jpg"
              link="https://www.facebook.com/groups/579572243585481"
              text={t.fadder.faddergrupper.groupbtn}/>
          
          <div class="col-del"></div>
          
          <Fadder03Card title="Internasjonal markedsføring og reiseliv"
              description={t.fadder.faddergrupper.group4}
              image="images/faddergruppe/Internasjonal markedsføring og reiseliv.png (full_page)color.png"
              link="https://www.facebook.com/groups/1142608506307231"
              text={t.fadder.faddergrupper.groupbtn}/>
          <Fadder03Card title="IT og informasjonssystemer"
              description={t.fadder.faddergrupper.group5}
              image="images/faddergruppe/It-og-Informasjonssystemer_color.jpg"
              link="https://www.facebook.com/groups/514857417062061"
              text={t.fadder.faddergrupper.groupbtn}/>
          <Fadder03Card title="Kulturledelse, forfatter, litteratur og historie"
              description={t.fadder.faddergrupper.group6}
              image="images/faddergruppe/kullturledelse.jpg (full_page)color.jpg"
              link="https://www.facebook.com/groups/435167774797320"
              text={t.fadder.faddergrupper.groupbtn}/>
    
          <div class="col-del"></div>
    
          <Fadder03Card title="Natur, miljø og friluftsliv"
              description={t.fadder.faddergrupper.group7}
              image="images/faddergruppe/Natur-og-miljø.jpg (full_page)color.jpg"
              link="https://www.facebook.com/groups/558155475874968"
              text={t.fadder.faddergrupper.groupbtn}/>
          <Fadder03Card title="Økonomi og ledelse"
              description={t.fadder.faddergrupper.group8}
              image="images/faddergruppe/Økonomi-og-ledelse.jpg (full_page).jpg"
              link="https://www.facebook.com/groups/536206928164428"
              text={t.fadder.faddergrupper.groupbtn}/>
          <Fadder03Card title="International"
              description={t.fadder.faddergrupper.group9}
              image="images/faddergruppe/engelsk.jpg (full_page)color.jpg"
              link="https://www.facebook.com/groups/2457601637712853"
              text={t.fadder.faddergrupper.groupbtn}/>
    
        </div>
      </div>
    </div>
    )
    
    const Fadder04 = () => {
      const major = React.useContext(MajorContext);
      return (
        <div class="bg-beige">
          <div class="container py-5">
            <div class="row">
              <div class="pt-5 pb-2 container">
                <div class="text-center">
                  <span class="text-number text-muted">04.</span>
                  <span class="text-title">{t.fadder.quote.title}</span>
                </div>
                </div>
            </div>
            <div class="row pb-5">
              <div class="col-12 m-auto">
    
                  <Karusell>
                  <KarusellTextItem name="Sara Snapa"
                      major={major.marked}
                      description={t.fadder.quote.q1}/>
                  
                  <KarusellTextItem name="Aleksandra"
                      major={major.international}
                      description={t.fadder.quote.q2}/>
                  
                  <KarusellTextItem name="Kjetil Alsen"
                      major={major.innovasjon}
                      description={t.fadder.quote.q3}/>
                  
                  <KarusellTextItem name="Sara Wang"
                      major={major.kultur}
                      description={t.fadder.quote.q4}/>
                  
                  <KarusellTextItem name="Andris Høiseth"
                      major={major.it}
                      description={t.fadder.quote.q5} />
                  
                  <KarusellTextItem name="Stine"
                      major={major.økonomi}
                      description={t.fadder.quote.q6} />

                  </Karusell>

                  
    
    
    
              </div>
            </div>
        
          </div>
        </div>
      );
    }
  return (
    <>
      <Fadder01/>
      <Fadder02/>
      <Fadder03/>
      <Fadder04/>
    </>
  );
}

export default Fadder;
