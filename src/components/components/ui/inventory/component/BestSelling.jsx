import React from 'react'
import TurnOver from './TurnOver'
import './BestSelling.css';
function BestSelling() {
  return (
    <div className='box'>
        <div className='title'>BEST SELLING PRODUCT</div>
        <div className='table'>
            <div className='headingss'>
                <div className='m'>Category</div>
                <div className='m'>TurnOver</div>
            </div>
            <div>
                <TurnOver category={'laptop'} sold={2000}/>
                <TurnOver category={'laptop'} sold={2000}/>
                <TurnOver category={'laptop'} sold={2000}/>
                <TurnOver category={'laptop'} sold={2000}/>
                <TurnOver category={'laptop'} sold={2000}/>
                <TurnOver category={'laptop'} sold={2000}/>
                
            </div>
        </div>
    </div>
  )
}

export default BestSelling