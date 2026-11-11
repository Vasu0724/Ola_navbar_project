import React from 'react'
import Intro_s1 from "../../assets/s1_pro_plus_banner_web_v2.webp"
import ola_logo from '../../assets/ola-logo-13042023.svg'
import hamburger from "../../assets/hamburger.png"

function Intro_s1_pro() {
  return (
    <div className='intro_s1_container'>
        <div className='into_s1_img_contain'>
            <img className='intro_s1_img'
            src={Intro_s1} alt="s1 pro plus banner v2" />
            
        </div>
        <div className='cell_navbar'>
            <img className='ola_logo' src={ola_logo} alt="ola-logo" />
            <img className='hamburger_logo' src={hamburger} alt="hamburger-logo" />
        </div>
        <div className='intro_s1_content'>
            <div className='intro_s1_heading1'>
                <h1 className='intro_s1_heading1_content'>
                Introducing S1 Pro+
                </h1>
            </div>
            <div className='intro_s1_heading2'>
                <h1 className='intro_s1_heading2_content'>
                The All-Rounder. All Pro.
                </h1>
            </div>
            <div className='intro_s1_para1'>
                <p className='intro_s1_para1_content'>
                From ₹ 1,49,999 or ₹ 2,870/month
                </p>
            </div>
            <div className='intro_s1_links'>
                <div className='intro_s1_video'>
                    <a className='intro_s1_watch_film' href="https://www.youtube.com/watch?v=gnr2vy_tMtE?loop=0&amp;mute=0&amp;controls=1&amp;modestbranding=0&amp;rel=0" 
                    onclick="return false;">Watch the film →</a>
                </div>
                <div className='intro_s1_buy_now'>
                    <a href="#" title="Buy S1 Pro"> Buy now →</a>
                </div>
            </div>
            <div className='intro_s1_feature'>
                <div className='intro_s1_kilometer'>
                    <div className='intro_s1_kilometer_top'>
                        <h2 className='intro_s1_kilometer_top_heading'>320</h2>
                        <p className='intro_s1_kilometer_top_para'>km</p>
                    </div>
                    <div className='intro_s1_kilometer_bottom'>
                        <p className='intro_s1_kilometer_bottom_para'>Range (IDC)</p>
                    </div>
                </div>
                <div className='intro_s1_power'>
                    <div className='intro_s1_power_top'>
                        <h2 className='intro_s1_power_top_heading'>13</h2>
                        <p className='intro_s1_power_top_para'>kW</p>
                    </div>
                    <div className='intro_s1_power_bottom'>
                        <p className='intro_s1_power_bottom_para'>Peak Power</p>
                    </div>
                </div>
                <div className='intro_s1_speed'>
                    <div className='intro_s1_speed_top'>
                        <h2 className='intro_s1_speed_top_heading'>130</h2>
                        <p className='intro_s1_speed_top_para'>km/h</p>
                    </div>
                    <div className='intro_s1_speed_bottom'>
                        <p className='intro_s1_speed_bottom_para'>Top Speed</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Intro_s1_pro