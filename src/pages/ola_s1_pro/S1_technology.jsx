import React from 'react'
import s1_pro_tech1 from '../../assets/s1_pro_gen3_tenets_tech_web_image_01_v2.webp'
import s1_pro_tech2 from '../../assets/s1_pro_gen3_tenets_tech_web_image_02_v2.webp'
import s1_pro_tech3 from '../../assets/s1_pro_gen3_tenets_tech_web_image_03_v2.webp'
import s1_pro_tech4 from '../../assets/s1_pro_gen3_tenets_tech_web_image_04_v2.webp'

function S1_technology() {
  return (
    <div className='s1_pro_tech_container'>
            <div className='s1_pro_tech_top'>
                <h2 className='s1_pro_performance_top_heading'>
                    Technology
                </h2>
                <p className='s1_pro_performance_top_para'>
                    Features that will redefine your ride.
                </p>
            </div>
            <div className='s1_pro_tech_pics'>
                <div className='s1_pro_tech_pics_column1'>
                    <div className='tech_card s1_pro_tech_pics_column1_img1'>
                        <img src={s1_pro_tech1} alt="s1 pro gen3 tenets performance1" />
                        <div className='s1_pro_tech_pics_column1_img1_content'>
                            <h3>
                                ABS
                            </h3>
                            <p>
                                Advanced electronics and software led anti-lock braking for better safety
                            </p>
                        </div>
                    </div>
                    <div className='tech_card s1_pro_tech_pics_column1_img2'>
                        <img src={s1_pro_tech3} alt="s1 pro gen3 tenets performance2" />
                        <div className='s1_pro_tech_pics_column1_img2_content'>
                            <h3>
                                Mid drive motor
                            </h3>
                            <p>
                                With integrated MCU and chain drive
                            </p>
                        </div>
                    </div>
                </div>
                <div className='s1_pro_tech_pics_column2'>
                    <div className='tech_card s1_pro_tech_pics_column2_img1'>
                        <img src={s1_pro_tech2} alt="s1 pro gen3 tenets performance3" />
                        <div className='s1_pro_tech_pics_column2_img1_content'>
                            <h3>
                                Brake by wire
                            </h3>
                            <p>
                                Patented braking system for better range and control
                            </p>
                        </div>
                    </div>
                    <div className='tech_card s1_pro_tech_pics_column2_img2'>
                        <img src={s1_pro_tech4} alt="s1 pro gen3 tenets performance4" />
                        <div className='s1_pro_tech_pics_column2_img2_content'>
                            <h3>
                                MoveOS5 features
                            </h3>
                            <p>
                                Features like SOS Alerts, Road Trip, Bharat Mood, Multi-mode Traction Control and much more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default S1_technology