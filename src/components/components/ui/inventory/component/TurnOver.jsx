import React from 'react'
import './TurnOver.css';
function TurnOver(props) {
  return (
    <div className='inner'>
        <span>{props.category}</span>
        <span>${props.sold}</span>
    </div>
  )
}

export default TurnOver