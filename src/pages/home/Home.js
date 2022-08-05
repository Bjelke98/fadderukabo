import React from 'react'

import Sponsorer from './components/Sponsorer'
import Karusell, {KarusellItem} from '../../components/Karusell'
import Campus from './components/Campus'
import CountDown from './components/CountDown'
import Fadderuka from './components/Fadderuka'
import useEnglish from '../../hooks/useEnglish'
import Translate from '../../Translate'

const StudentlivetKarusell = () => {
  const [english] = useEnglish();
  const t = Translate(english);
  return (
  <div>
      <div class="container py-5">
        <div class="row">
          <div class="pt-5 pb-2 container">
            <span class="text-number text-red">03.</span>
            <span class="text-title">{t.home.studentlivet.title}</span>
            </div>
        </div>
        <div class="row pb-5">
          <div class="col-12 m-auto">

            <Karusell>
              <KarusellItem image="images/kroakonsertbø.jpg" title={t.home.studentlivet.title1} description={t.home.studentlivet.desc1}/>
              <KarusellItem image="images/natur.jpg" title={t.home.studentlivet.title2} description={t.home.studentlivet.desc2}/>
              <KarusellItem image="images/GullbringKul.jpg" title={t.home.studentlivet.title3} description={t.home.studentlivet.desc3}/>
              <KarusellItem image="images/kroakonsertbø.jpg" title={t.home.studentlivet.title4} description={t.home.studentlivet.desc4}/>
              <KarusellItem image="images/natur.jpg" title={t.home.studentlivet.title5} description={t.home.studentlivet.desc5}/>
              <KarusellItem image="images/GullbringKul.jpg" title={t.home.studentlivet.title6} description={t.home.studentlivet.desc6}/>
              <KarusellItem image="images/kroakonsertbø.jpg" title={t.home.studentlivet.title7} description={t.home.studentlivet.desc7}/>
              <KarusellItem image="images/natur.jpg" title={t.home.studentlivet.title8} description={t.home.studentlivet.desc8}/>
              <KarusellItem image="images/GullbringKul.jpg" title={t.home.studentlivet.title9} description={t.home.studentlivet.desc9}/>
            </Karusell>

          </div>
        </div>

      </div>
    </div>
)}

const StudentorgKarusell = () => {
const [english] = useEnglish();
const t = Translate(english);
return (
  <div>
      <div class="container py-5">
        <div class="row">
          <div class="pt-5 pb-2 container">
            <span class="text-number text-red">05.</span>
            <span class="text-title text-break">{t.home.studentorg.title}</span>
            </div>
        </div>
        <div class="row">
          <div class="col-12 m-auto">

            
            <Karusell>
              <KarusellItem image="images/skape.jpg" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
              <KarusellItem image="images/sigma.jpg" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
              <KarusellItem image="images/root.jpg" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
              <KarusellItem image="images/kroa.jpg" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
              <KarusellItem image="images/fremme.jpg" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
              <KarusellItem image="images/nito.jpg" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
              <KarusellItem image="images/spire.jpg" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
              <KarusellItem image="images/emu.jpg" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
              <KarusellItem image="images/sdsn.png" title={t.home.studentorg.title1} description={t.home.studentorg.desc1}/>
            </Karusell>

            
          </div>
        </div>

      </div>
    </div>
)}


function Home() {
  return (
    <>
      <CountDown/>
      <Fadderuka/>
      <StudentlivetKarusell/>
      <Campus/>
      <StudentorgKarusell/>
      <Sponsorer/>
    </>
  )
}



export default Home
