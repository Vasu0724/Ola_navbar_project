import React from 'react'
import cell from '../../assets/bic_banner_web_image_161123.webp'
import ola_logo from '../../assets/ola-logo-13042023.svg'
import hamburger from "../../assets/hamburger.png"

function Cell() {
  return (
    <>
    <div className='cell_container'>

      <img className="cell_bg_img"
        src={cell} alt="cell img" 
      />
      <div className='cell_navbar'>
        <img className='ola_logo' src={ola_logo} alt="ola-logo" />
        <img className='hamburger_logo' src={hamburger} alt="hamburger-logo" />
      </div>
      <div className='cell_content'>
        <div className='cell_heading'>
          <h1>Charging Ahead</h1>
          <h1>In Cell Technology</h1>
        </div>
        <div className='cell_para'>
          <p>Transforming the global energy landscape.</p>
          <p>Through core cell technology development, right here in India.</p>
        </div>
      </div>
    </div>
    
    </>
  ) 
}

export default Cell