import React from 'react'

function Cell_Gigafactory() {
  return (
    <>
    <div className="gigafactory_container">
        <div className="gigafactory_heading">
            <p>The Cell Gigafactory</p>
        </div>
        <div className="gigafactory_content">
            <p>India’s big leap in building the future of energy</p>

            <video style={{width: '100%'}} 
            autoPlay
            loop 
            muted 
            playsInline 
            poster="https://cdn.olaelectric.com/sites/evdp/pages/bic/cell_gigafactory_web_v2.webp">
                <source 
                type="video/mp4"
                src="https://cdn.olaelectric.com/sites/evdp/pages/bic/giga-factory-built.mp4"
                />
                Your brower does not support the video tag                   
            </video>
        </div>
    </div>
    </>
  )
}

export default Cell_Gigafactory



