import React from 'react'
import Karusell, { KarusellTextItem } from '../../components/Karusell'

import { MajorContext } from '../../App'

const TextBox01 = ({fade, children}) => (
  <div class={"row pb-5 aos-init aos-animate "+fade} data-aos={fade} data-aos-duration="1500">
    {children}
  </div>
)

const Text01 = ({title, description}) => (
  <div class="col" id="hjelphus">
    <span class="text-red landing-text">{title}</span>
    <p class="text-content">{description}</p>
  </div>
)

const Image01a = ({image}) => (
  <div class="col">
  <img class="stepitem img-fluid rounded m-2" src={image}/>
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

const ColA01 = () => (
  <div class="col">

    <Box01 title="Hva er en fadder?"
    description="En fadder ved USN fungerer som en bro mellom de nye studentene og studentmiljøet på campus. Fadderen skal ta imot nye studenter og være med på å gi deg en god start på studiehverdagen."
    image="images/bluefadder.jpeg"/>

    <Box01 title="Hva er oppgaven til en fadder?"
    description="En fadder har som oppgave å bidra til at du som ny student skal få en god start på det kommende studentlivet. Fadderen møter nye studenter første studiestartdag, viser deg rundt på campus  og  kan gi deg noen gode tips  som kan være gode å ha med seg inn i studentlivet."
    image="images/yellowfadder2.jpeg" mirror/>

    <Box01 title="Finn din faddergruppe"
    description="Å ha et sosialt nettverk er viktig under studietiden. Ved å være med i en faddergruppe blir du  i tillegg kjent med de du skal studere sammen med."
    image="images/lillefadder (1).png"/>
    
  </div>
)

const ColB01 = () => {
  return(
    <div class="col botitem my-auto mx-5">
        <Image01b image="images/redfadder.jpeg"/>
        <Image01b image="images/pinkfadder.jpeg"/>
      </div>
  );
}

const Fadder01 = () => (
<div class="container my-5">
  <div class="row">
    <div>
      <span class="text-number text-red">01.</span>
      <span class="text-title">Fadder</span>
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
    <div class="container py-5">
      <div class="justify-content-between">
      <div class="row pt-5">
        <span class="text-number">02.</span>
        <span class="text-title text-red">Trygg fadder</span>
      </div>
      <img src="images/tryggfadder.png" class="bg-red"/>
      </div>
    </div>
  </div>
</div>
)

const Fadder03Card = ({title, description, image, link="#"}) => (
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
              <button type="button"
                class="btn btn-sm btn-dark opacity-80 program-text rounded-pill px-4 text-uppercase">
                bli med
              </button>
            </div>
          </div>
        </div>

      </div>
)

const Fadder03 = () => (
<div class=" py-5 pb-5">
  <div class="container">
    <div class="row text-center pt-5">
      <span class="text-number text-red">03.</span>
      <span class="text-title">Faddergrupper</span>
    </div>
    <div class="row gy-2 text-center justify-content-center mt-2">
      
      <Fadder03Card title="Eiendomsmegling"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/eiendomsmeglingcolor.jpg"/>
      <Fadder03Card title="Idrett, trening og ledelse"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/idrett trening ledelse.jpg (full_page)color.jpg"/>
      <Fadder03Card title="Innovasjon og entreprenørskap"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/Innovasjon-og-entrepren├©rskap_color.jpg"/>
      
      <div class="col-del"></div>
      
      <Fadder03Card title="Internasjonal markedsføring og reiseliv"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/Internasjonal markedsføring og reiseliv.png (full_page)color.png"/>
      <Fadder03Card title="IT og informasjonssystemer"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/It-og-Informasjonssystemer_color.jpg"/>
      <Fadder03Card title="Kulturledelse"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/kullturledelse.jpg (full_page)color.jpg"/>

      <div class="col-del"></div>

      <Fadder03Card title="Natur, miljø og friluftsliv"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/Natur-og-miljø.jpg (full_page)color.jpg"/>
      <Fadder03Card title="Økonomi og ledelse"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/Økonomi-og-ledelse.jpg (full_page).jpg"/>
      <Fadder03Card title="International students"
          description="Legg inn beskrivelse."
          image="images/faddergruppe/engelsk.jpg (full_page)color.jpg"/>

    </div>
  </div>
</div>
)

const Fadder04 = () => {
  const major = React.useContext(MajorContext);
  return (
    <div class="bg-light">
      <div class="container py-5">
        <div class="row">
          <div class="pt-5 pb-2 container">
            <div class="text-center">
              <span class="text-number text-muted">01.</span>
              <span class="text-title">Anmeldeser</span>
            </div>
            </div>
        </div>
        <div class="row pb-5">
          <div class="col-12 m-auto">

              <Karusell>
              <KarusellTextItem name="Sara"
                  major={major.marked}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
              <KarusellTextItem name="Sara"
                  major={major.it}
                  description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"/>
              <KarusellTextItem name="Kjetil"
                  major={major.innovasjon}
                  description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"/>
              <KarusellTextItem name="Navn"
                  major={major.eiendom}
                  description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"/>
              </Karusell>

          </div>
        </div>
    
      </div>
    </div>
  );
}

const Fadder = () => {
  
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