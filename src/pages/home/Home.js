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
              <KarusellItem image="images/kroakonsertbø.jpg" title={t.home.studentlivet.title1} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/bullinn.jpeg" title={t.home.studentlivet.title2} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/dattebayo.jpg" title={t.home.studentlivet.title3} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/pizza.jpeg" title={t.home.studentlivet.title4} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/bøsenter.jpg" title={t.home.studentlivet.title5} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/bøtunet.jpg" title={t.home.studentlivet.title6} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/GullbringKul.jpg" title={t.home.studentlivet.title7} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/gullbringtrening.jpg" title={t.home.studentlivet.title8} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/nr1fitness.jpg" title={t.home.studentlivet.title9} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/sporty.jpg" title={t.home.studentlivet.title10} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/grovenfitness.jpg" title={t.home.studentlivet.title11} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/lifjell.jpg" title={t.home.studentlivet.title13} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/høytoglavt.jpg" title={t.home.studentlivet.title14} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/sommarlandbø.jpg" title={t.home.studentlivet.title15} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>
              <KarusellItem image="images/natur.jpg" title={t.home.studentlivet.title16} description={t.home.studentlivet.desc1} link="" bttext={t.home.studentlivet.bttext}/>

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
              <KarusellItem image="images/skape.jpg" link="https://www.instagram.com/skape_usn/" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/sigma.jpg"link="https://www.facebook.com/sigma.USN/" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/root.jpg" link="https://www.facebook.com/root.usn" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/kroa.jpg" link="https://www.kroaibo.no/" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/fremme.jpg" link="https://www.facebook.com/fremmeusn" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/nito.jpg" link="https://www.facebook.com/nitostudentenebo" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/spire.jpg"link="https://www.facebook.com/spirebo" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/emu.jpg" link="https://www.facebook.com/EMUvedUSN" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/sdsn.png" link="https://www.facebook.com/studentiusnbo" bttext={t.home.studentorg.bttext}/>
              <KarusellItem image="images/usnil.png" link="https://www.facebook.com/bostudentidrett" bttext={t.home.studentorg.bttext}/>
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
