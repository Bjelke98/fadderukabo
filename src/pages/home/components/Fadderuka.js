import React from 'react'
import useEnglish from '../../../hooks/useEnglish'
import Translate from '../../../Translate';
import InfoBlock from './InfoBlock'

const Fadderuka = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  return(
  <div>
    <div class="container py-5 pb-5 ">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="py-5 pb-5 container">
          <span class="text-number text-blue">01.</span>
          <span class="text-title">{t.home.fadderuka.title}</span>
          <p class="text-content mt-4">{t.home.fadderuka.description1}</p>
          <br/>
          <p class="text-content">{t.home.fadderuka.description2}</p>
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
        <span class="text-title text-light">{t.home.fadderukabo.title}</span>
        </div>
    </div>
    <div class="row my-5 text-white">

      <InfoBlock title={t.home.fadderukabo.subtitle1}
          description={t.home.fadderukabo.description1}
          icon={<i class="fas fa-graduation-cap fa-2xl block w-100 mb-4 text-blue"></i>}/>
      <InfoBlock title={t.home.fadderukabo.subtitle2}
          description={t.home.fadderukabo.description2}
          icon={<i class="fas fa-people-group fa-2xl block w-100 mb-4 text-blue"></i>}/>
      <InfoBlock title={t.home.fadderukabo.subtitle3}
          description={t.home.fadderukabo.description3}
          icon={<i class="fas fa-hand-holding-heart fa-2xl block w-100 mb-4 text-blue"></i>}/>
                       
    </div>
  </div>
  </div>
  </div>
)}

export default Fadderuka
