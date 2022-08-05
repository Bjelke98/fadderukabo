import React from 'react'
import useEnglish from '../../../hooks/useEnglish'
import Translate from '../../../Translate';
import InfoBlock from './InfoBlock'

const Campus = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  return (
  <div class="bg-beige py-5">
  <div class="container">
    <div class="row mt-5">
      <div class="text-center">
      <span class="text-number text-red">04.</span>
        <span class="text-title">Campus Bø</span>
        </div>
    </div>
    <div class="row my-5">

      <InfoBlock title="37 Studietilbud"
          description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"
          icon={<i class="fas fa-graduation-cap fa-2xl block w-100 mb-4 text-red"></i>}/>
      <InfoBlock title="3000 Studenter"
          description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"
          icon={<i class="fas fa-people-group fa-2xl block w-100 mb-4 text-red"></i>}/>
      <InfoBlock title="17 Student organisasjoner"
          description="I vårt kart kan du eneklt og elegant lete etter boliger der du ønsker å bo"
          icon={<i class="fas fa-hand-holding-heart fa-2xl block w-100 mb-4 text-red"></i>}/>
                       
    </div>
  </div>
  </div>
)}

export default Campus
