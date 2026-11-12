import React from 'react'
import Ola_S1_pro_plus_menu_img from '../../assets/menu_image_s1pro_plus_gen3_v2.webp'
import Ola_S1_pro_menu_img from '../../assets/menu_image_s1pro_gen3_v2.webp'
import Ola_S1_x_menu_img from '../../assets/menu_image_s1x_gen3_v2.webp'

function Navbar_ola_end() {
  return (
    <div className='navbar_container_end'>
        <div className='navbar_content'>
            <div className='navbar_product_page'>
                <div className='menu_card navbar_s1_pro+_menu'>
                    <a className='menu_card_a1 end1' href="">
                        <img src={Ola_S1_pro_plus_menu_img} alt="Ola S1 pro plus" />
                        <span>Ola S1 Pro+</span>
                        <span className='menu_card_a1_gen'>Gen3</span>
                    </a>
                </div>
                <div className='menu_card navbar_s1_pro_menu'>
                    <a className='menu_card_a1 end1' href="">
                        <img src={Ola_S1_pro_menu_img} alt="Ola S1 pro"/>
                        <span>Ola S1 Pro</span>
                        <span className='menu_card_a1_gen'>Gen3</span>
                    </a>
                </div>
                <div className='menu_card navbar_s1x_menu'>
                    <a className='menu_card_a1 end1' href="">
                        <img src={Ola_S1_x_menu_img} alt="Ola S1 x" />
                        <span>Ola S1 X</span>
                        <span className='menu_card_a1_gen'>Gen3</span>
                    </a>
                </div>
            </div>
            <div className='navbar_link_info_page'>
                <div className='navbar_link_heading_tech'>
                    <h2>Tech & Design</h2>
                </div>
                <div className='navbar_link_para_tech'>
                    <p>Cell Tech</p>
                    <p>Manufacturing</p>
                    <p>Design</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar_ola_end