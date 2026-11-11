import React from 'react'
import s1_pro_performance1 from '../../assets/s1_pro_gen3_tenets_performance_web_image_01.webp'
import s1_pro_performance2 from '../../assets/s1_pro_gen3_tenets_performance_web_image_02.webp'
import s1_pro_performance3 from '../../assets/s1_pro_gen3_tenets_performance_web_image_03.webp'
import s1_pro_performance4 from '../../assets/s1_pro_gen3_tenets_performance_web_image_04.webp'
import s1_pro_performance5 from '../../assets/s1_pro_gen3_tenets_performance_web_image_05.webp'
import s1_pro_performance6 from '../../assets/s1_pro_gen3_tenets_performance_web_image_06.webp'

function S1_pro_performance_plus() {
  return (
    <div className='s1_pro_performance_container'>
        <div className='s1_pro_performance_top'>
            <h2 className='s1_pro_performance_top_heading'>
                Performance
            </h2>
            <p className='s1_pro_performance_top_para'>
                Ready. Set. Thrill.
            </p>
        </div>
        <div className='s1_pro_performance_pics'>
            <div className='s1_pro_performance_pics_column1'>
                <div className='performance_card s1_pro_performance_pics_column1_img1'>
                    <img src={s1_pro_performance1} alt="s1 pro gen3 tenets performance1" />
                    <div className='s1_pro_performance_pics_column1_img1_content'>
                        <h3>
                            11 kW Peak power.
                        </h3>
                        <p>
                            Feel the adrenaline.
                        </p>
                    </div>
                </div>
                <div className='performance_card s1_pro_performance_pics_column1_img2'>
                    <img src={s1_pro_performance2} alt="s1 pro gen3 tenets performance2" />
                    <div className='s1_pro_performance_pics_column1_img2_content'>
                        <h3>
                            Range (IDC)
                        </h3>
                        <p>
                            242 km range (IDC). Go far. and then some.
                        </p>
                    </div>
                </div>
            </div>
            <div className='s1_pro_performance_pics_column2'>
                <div className='performance_card s1_pro_performance_pics_column2_img1'>
                    <img src={s1_pro_performance3} alt="s1 pro gen3 tenets performance3" />
                    <div className='s1_pro_performance_pics_column2_img1_content'>
                        <h3>
                            Top-Speed
                        </h3>
                        <p>
                            125 kmph Top Speed Got a racing suit?
                        </p>
                    </div>
                </div>
                <div className='performance_card s1_pro_performance_pics_column2_img2'>
                    <img src={s1_pro_performance4} alt="s1 pro gen3 tenets performance4" />
                    <div className='s1_pro_performance_pics_column2_img2_content'>
                        <h3>
                            Dual disc brakes
                        </h3>
                        <p>
                            No slipping. No sliding.
                        </p>
                    </div>
                </div>
            </div>
            <div className=' s1_pro_performance_pics_column3'>
                <div className='performance_card s1_pro_performance_pics_column3_img1'>
                    <img src={s1_pro_performance5} alt="s1 pro gen3 tenets performance5" />
                    <div className='s1_pro_performance_pics_column3_img1_content'>
                        <h3>
                            Hyper Mode
                        </h3>
                        <p>
                            Turbocharge with a tap of a button
                        </p>
                    </div>
                </div>
                <div className='performance_card s1_pro_performance_pics_column3_img2'>
                    <img src={s1_pro_performance6} alt="s1 pro gen3 tenets performance6" />
                    <div className='s1_pro_performance_pics_column3_img2_content'>
                        <h3>
                            Acceleration
                        </h3>
                        <p>
                            0-40 km in 2.7sec Go fast, faster.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='s1_pro_performance_bottom'>
            <p>
                *Specs mentioned above apply to S1 Pro+ 5.2kWh
            </p>
        </div>
    </div>
  )
}

export default S1_pro_performance_plus