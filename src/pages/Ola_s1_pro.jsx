import React from 'react'
import Intro_s1_pro from './ola_s1_pro/intro_s1_pro'
import S1_profile from './ola_s1_pro/S1_profile'
import S1_pro_performance from './ola_s1_pro/S1_pro_performance'
import S1_design from './ola_s1_pro/S1_design'
import S1_technology from './ola_s1_pro/S1_technology'

function Ola_s1_pro() {
  return (
    <div>
        <Intro_s1_pro/>
        <S1_profile/>
        <S1_pro_performance />
        <S1_design/>
        <S1_technology/>
    </div>
  )
}

export default Ola_s1_pro