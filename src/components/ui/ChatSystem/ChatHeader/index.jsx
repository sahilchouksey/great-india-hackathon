import React from 'react'
import styles from './Header.module.scss'
function IsResolved() {
  return (
    <div className={s}>
        <h3 className={`${styles['seller']}`}>
            Seller
        </h3>
        <div className={`${styles['isResolved']}`}>
            <span className={`${styles['text']}`}><h3>is Your complaint Resolved</h3>
            </span>
            <div className={`${styles['buttons']}`}>
                <button className={`${styles['yes']}`}>Yes</button>
                <button className={`${styles['No']}`} onClick={()=>{
                    window.alert(" We will do our best");
                }}>No</button>
            </div>
        </div>
        
    </div>
  )
}

export default IsResolved