import React from 'react'
import './index.css'
function IsResolved() {
  return (
    <div className='headder'>
        <h3 className='seller'>
            Seller
        </h3>
        <div className='isResolved'>
            <span className='text'><h3>is Your complaint Resolved</h3>
            </span>
            <div className='buttons'>
                <button className='yes'>Yes</button>
                <button className='No' onClick={()=>{
                    window.alert(" We will do our best");
                }}>No</button>
            </div>
        </div>
        
    </div>
  )
}

export default IsResolved