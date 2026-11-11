import React from 'react'
import R_D from '../../assets/facility_icon_v2.svg'
import equip from '../../assets/cutting_edge_v2.svg'
import researshers from '../../assets/bic_sec_2_dweb_4.svg'
import tools from '../../assets/bic_sec_2_dweb_3.svg'
import Battery_img_vid from '../../assets/battery_innovation_center_web_img_v2.webp'

function Battery_innovation() {
  return (
    <>
    <div className='battery_container'>
        <div className='battery_content'>
            <div className='battery_heading'>
                <p>Battery</p>
                <p>Innovation Centre</p>
            </div>
            <div className='battery_para'>
                <p>Nucleus of cell revolution in India.</p>
                <p>One cutting-edge innovation at a time.</p>
            </div>
            <div className='battery_features'>
                <div>
                    <img src={R_D} alt="R&D" />
                    <p>In-house R&D facility</p>
                </div>
                <div className='equip_div'>
                    <img src={equip} alt="equipment" />
                    <p>Advanced equipments</p>
                </div>
                <div>
                    <img src={researshers} alt="researshers" />
                    <p>Leading Researchers</p>
                    <p>and Engineers</p>
                </div>
                <div className='tools_div'>
                    <img src={tools} alt="tools" />
                    <p>Engineering of Next</p>
                    <p>Generation Energy Solutions</p>
                </div>
            </div>
        </div>
        <div className='battery_img'>
            <a href="https://cdn.olaelectric.com/sites/evdp/pages/bic/bic-rnd-v1.mp4" onclick="return false;" data-type="iframe" data-main-class="sblwamb-popup"><img src={Battery_img_vid} alt="adfda" /></a>
        </div>
    </div>
    </>
  )
}

export default Battery_innovation


