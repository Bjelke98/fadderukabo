import React from 'react'

import Sponsorer from './components/Sponsorer'
import Karusell, {KarusellItem} from '../../components/Karusell'
import Campus from './components/Campus'

const StudentlivetKarusell = () => (
  <div>
      <div class="container py-5">
        <div class="row">
          <div class="pt-5 pb-2 container">
            <span class="text-number text-red">01.</span>
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

function Home() {
  return (
    <>
      <StudentlivetKarusell/>
      <Campus/>
      <Sponsorer/>
    </>
  )
}



export default Home
