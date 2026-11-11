import React from 'react'
import Cell from './cell_tech/Cell'
import Battery_innovation from './cell_tech/Battery_innovation'
import R_D_Facility from './cell_tech/R_D_Facility'
import Cell_Gigafactory from './cell_tech/Cell_Gigafactory'
import Skilled_talent from './cell_tech/Skilled_talent'

function Cell_tech() {
  return (
    <>
    <div className='contain_main'>
      <Cell/>
      <Battery_innovation/>
      <R_D_Facility/>
      <Cell_Gigafactory/>
      <Skilled_talent/>
    </div>
    </>
  )
}

export default Cell_tech