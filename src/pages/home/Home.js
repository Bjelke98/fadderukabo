import React from 'react'

import Sponsorer from './components/Sponsorer'
import Karusell, {KarusellItem} from '../../components/Karusell'
import Campus from './components/Campus'
import CountDown from './components/CountDown'
import Fadderuka from './components/Fadderuka'

const StudentlivetKarusell = () => (
  <div>
      <div class="container py-5">
        <div class="row">
          <div class="pt-5 pb-2 container">
            <span class="text-number text-red">03.</span>
            <span class="text-title">Studentlivet</span>
            </div>
        </div>
        <div class="row pb-5">
          <div class="col-12 m-auto">

            
            <Karusell>
              <KarusellItem image="images/kroakonsertbø.jpg"/>
              <KarusellItem image="images/natur.jpg"/>
              <KarusellItem image="images/GullbringKul.jpg"/>
              <KarusellItem image="images/kroakonsertbø.jpg"/>
              <KarusellItem image="images/natur.jpg"/>
              <KarusellItem image="images/GullbringKul.jpg"/>
              <KarusellItem image="images/kroakonsertbø.jpg"/>
              <KarusellItem image="images/natur.jpg"/>
              <KarusellItem image="images/GullbringKul.jpg"/>
            </Karusell>

            
          </div>
        </div>

      </div>
    </div>
)

const StudentorgKarusell = () => (
  <div>
      <div class="container py-5">
        <div class="row">
          <div class="pt-5 pb-2 container">
            <span class="text-number text-red">05.</span>
            <span class="text-title text-break">Studentorganisasjoner</span>
            </div>
        </div>
        <div class="row pb-5">
          <div class="col-12 m-auto">

            
            <Karusell>
              <KarusellItem image="images/kroakonsertbø.jpg"/>
              <KarusellItem image="images/natur.jpg"/>
              <KarusellItem image="images/GullbringKul.jpg"/>
              <KarusellItem image="images/kroakonsertbø.jpg"/>
              <KarusellItem image="images/natur.jpg"/>
              <KarusellItem image="images/GullbringKul.jpg"/>
              <KarusellItem image="images/kroakonsertbø.jpg"/>
              <KarusellItem image="images/natur.jpg"/>
              <KarusellItem image="images/GullbringKul.jpg"/>
            </Karusell>

            
          </div>
        </div>

      </div>
    </div>
)


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
