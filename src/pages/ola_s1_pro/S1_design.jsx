import React from 'react'
import s1_pro_design1 from '../../assets/s1_pro_gen3_tenets_design_web_image_01.webp'
import s1_pro_design2 from '../../assets/s1_pro_gen3_tenets_design_web_image_02.webp'
import s1_pro_design3 from '../../assets/s1_pro_gen3_tenets_design_web_image_03.webp'
import s1_pro_design4 from '../../assets/s1_pro_gen3_tenets_design_web_image_04.webp'
import s1_pro_design5 from '../../assets/s1_pro_gen3_tenets_design_web_image_05.webp'

function S1_design() {
  return (
    <div className='s1_pro_design_container'>
        <div className='s1_pro_design_pics'>
            <div className='s1_pro_design_pics_column1'>    
                <div className='s1_pro_design_pics_column1_img1_content'>
                    <h2 className='s1_pro_design_top_heading'>
                        Design
                    </h2>
                    <p className='s1_pro_performance_top_para'>
                            Get used to the spotlight
                    </p>
                    <a className='s1_pro_performance_top_anchor' href="#">More about design </a>
                </div>
                <div className='performance_card s1_pro_design_pics_column1_img2'>
                    <img src={s1_pro_design1} alt="s1 pro gen3 tenets performance2" />
                    <div className='s1_pro_design_pics_column1_img2_content'>
                        <h3>
                            Body coloured mirrors
                        </h3>
                        <p>
                            One for every vibe
                        </p>
                    </div>
                </div>
            </div>
            <div className='s1_pro_design_pics_column2'>
                <div className='performance_card s1_pro_design_pics_column2_img1'>
                    <img src={s1_pro_design2} alt="s1 pro gen3 tenets performance3" />
                    <div className='s1_pro_design_pics_column2_img1_content'>
                        <h3>
                            Two tone seat
                        </h3>
                        <p>
                            Improved ergonomics and comfort
                        </p>
                    </div>
                </div>
                <div className='performance_card s1_pro_design_pics_column2_img2'>
                    <img src={s1_pro_design3} alt="s1 pro gen3 tenets performance4" />
                    <div className='s1_pro_design_pics_column2_img2_content'>
                        <h3>
                            New aluminium grab handle
                        </h3>
                        <p>
                            Hold on tight
                        </p>
                    </div>
                </div>
            </div>
            <div className=' s1_pro_design_pics_column3'>
                <div className='performance_card s1_pro_design_pics_column3_img1'>
                    <img src={s1_pro_design4} alt="s1 pro gen3 tenets performance5" />
                    <div className='s1_pro_design_pics_column3_img1_content'>
                        <h3>
                            Rim decals
                        </h3>
                        <p>
                            All eyes on you
                        </p>
                    </div>
                </div>
                <div className='performance_card s1_pro_design_pics_column3_img2'>
                    <img src={s1_pro_design5} alt="s1 pro gen3 tenets performance6" />
                    <div className='s1_pro_design_pics_column3_img2_content'>
                        <h3>
                            Full chain cover
                        </h3>
                        <p>
                            For the added mystique
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default S1_design