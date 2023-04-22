import React from 'react'
// import {RiSendPlaneFill } from 'react-icons/fa/RiSendPlaneFill';
import './input.css'
function Input() {
  return (
    <div id='container'>
        <div className='input'><input id='type' type='text' placeholder='Type something...'></input></div>
        <button id='send'>Send</button>
        
    </div>
  )
}

export default Input