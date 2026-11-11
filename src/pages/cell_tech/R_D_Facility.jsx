import React from 'react'
import R_D1 from '../../assets/section3_banner_web01_v2.webp'
import R_D2 from '../../assets/section3_banner_web03_v2.webp'
import R_D3 from '../../assets/section3_banner_web02_v2.webp'
import R_D4 from '../../assets/section3_banner_web04_v2.webp'



function R_D_Facility() {

    const facilities = [
    {
      img: R_D1,
      title: 'Material Synthesis and Science'
    },
    {
      img: R_D2,
      title: 'Cell Manufacturing Technology'
    },
    {
      img: R_D3,
      title: 'Material Characterisation'
    },
    {
      img: R_D4,
      title: 'Prototyping and Testing'
    }
  ]

  return (

    <div className='R_D_container'>
        <div className='R_D_content'>
            <div className='R_D_heading'>
                <p>In-house</p>
                <p>R&D Facility</p>
            </div>
            <div className='R_D_para'>
                <p>Driven by a hunger for innovation and technology,</p>
                <p>our in-house R&D facility leads the way in all things cell.</p>
            </div>
        </div>
        <div className='R_D_img'>
            {facilities.map((facility, index) => (
          <div className="R_D_card" key={index}>
            <img src={facility.img} alt={facility.title} />
            <div className="R_D_overlay">
                <p>{facility.title}</p>
            </div>
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default R_D_Facility