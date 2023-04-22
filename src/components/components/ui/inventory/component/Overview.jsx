import React from 'react'
import './Overview.css'
function Overview(props) {
  return (
    <div className='box'>
        <div className='title'>{props.title}</div>
        <div className='innerRow'>
            <div className='colom'>
                <span className='values'>${props.totalProfit}</span>
                <span className='values'>Total Profit</span>
            </div>
            <div className='colom'>
                <span className='values'>{props.sales}$</span>
                <span className='values'>Sales </span>
            </div>
            <div className='colom'>
                <span className='values'>{props.revenue}$</span>
                <span className='values'>Ravenue</span>
            </div>
        </div>
    </div>
  )
}

export default Overview