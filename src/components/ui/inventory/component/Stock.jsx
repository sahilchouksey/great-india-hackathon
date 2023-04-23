import React from 'react'
import './Stock.css';
export default function Stock(props) {
  return (
   <div id='top'>
        <div className='info'>
      <div className='m'  id='number'>1</div>      
      <div className='m' id='category'>{props.category} </div>
      <div className='m' id='persentage'>{props.persentage} %</div>
    </div>
   </div>
  )
}
