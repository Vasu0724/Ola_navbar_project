import React from 'react'
import lab_coat1 from '../../assets/lab_coats_web_img1.webp'
import lab_coat2 from '../../assets/lab_coats_web_img3.webp'
import lab_coat3 from '../../assets/lab_coats_web_img2.webp'
import lab_coat4 from '../../assets/lab_coats_web_img4.webp'



function Skilled_talent() {

    const facilities = [
    {
      img: lab_coat1,
    },
    {
      img: lab_coat2,
    },
    {
      img: lab_coat3,
    },
    {
      img: lab_coat4,
    }
  ]

  return (

    <div className='S_T_container'>
        <div className='S_T_content'>
            <div className='S_T_heading'>
                <p>Not all superheroes wear capes.</p>
                <p>Some prefer lab coats.</p>
            </div>
            <div className='S_T_para'>
                <p>Our highly skilled talent develops future proof cell technology.</p>
            </div>
        </div>
        <div className='S_T_img'>
            {facilities.map((facility, index) => (
          <div className="S_T_card" key={index}>
            <img src={facility.img} alt={facility.title} />
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default Skilled_talent