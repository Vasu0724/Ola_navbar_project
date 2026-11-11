import React from 'react'
import s1_profile_img from '../../assets/gen3_s1pro_plus_product_web_image.webp'
import red_star from '../../assets/star_icon_red.svg'
import s1_X from '../../assets/s1_x_plus_strip_banner_web_v2.webp'

function S1_profile_plus() {
  return (
    <>
    <div className='s1_profile_container'>
        <div className='s1_profile_img'>
            <img
              className='s1_profile_img_pic'
              src={s1_profile_img}
              alt="gen3 s1pro plus product"
            />
        </div>
        <div className='s1_profile_content'>
            <h2 className='s1_profile_heading'>The all new S1 Pro+</h2>
            <div className='S1_profile_features'>
                <div className='s1_profile_feature1'>
                    <div className='s1_profile_feature1_img'>
                        <img src={red_star} alt="red star" />
                    </div>
                    <div className='s1_profile_feature1_heading'>
                        <h3>
                            ABS
                        </h3>
                    </div>
                </div>
                <div className='s1_profile_feature2'>
                    <div className='s1_profile_feature2_img'>
                        <img src={red_star} alt="red star" />
                    </div>
                    <div className='s1_profile_feature2_heading'>
                        <h3>
                            Multi-mode
                        </h3>
                        <h3>
                            traction control
                        </h3>
                    </div>
                </div>
                <div className='s1_profile_feature3'>
                    <div className='s1_profile_feature3_img'>
                        <img src={red_star} alt="red star" />
                    </div>
                    <div className='s1_profile_feature2_heading'>
                        <h3>
                            Brake by wire tech with
                        </h3>
                        <h3>
                            patented sensors
                        </h3>
                    </div>
                </div>
                <div className='s1_profile_feature4'>
                    <div className='s1_profile_feature4_img'>
                        <img src={red_star} alt="red star" />
                    </div>
                    <div className='s1_profile_feature2_heading'>
                        <h3>
                            Available exclusively
                        </h3>
                        <h3>
                            in Passion Red
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='s1_X_banner__contain'>
        <div className='s1_X_banner_img'>
            <a href="">
                <img src={s1_X} alt="s1 x plus strip banner" />
            </a>
        </div>
    </div>
    </>
  )
}

export default S1_profile_plus