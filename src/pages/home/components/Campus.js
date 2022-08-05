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

      <InfoBlock title={t.home.campus.subtitle1}
          description={t.home.campus.description1}
          icon={<i class="fas fa-graduation-cap fa-2xl block w-100 mb-4 text-red"></i>}/>
      <InfoBlock title={t.home.campus.subtitle2}
          description={t.home.campus.description2}
          icon={<i class="fas fa-people-group fa-2xl block w-100 mb-4 text-red"></i>}/>
      <InfoBlock title={t.home.campus.subtitle3}
          description={t.home.campus.description3}
          icon={<i class="fas fa-hand-holding-heart fa-2xl block w-100 mb-4 text-red"></i>}/>
                       
    </div>
  </div>
  </div>
)}

export default Campus
