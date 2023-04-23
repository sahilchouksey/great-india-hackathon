import React from 'react'
import YourOrderInner from '../OrdercomplaintItemComponent';
import styles from "./Resolve.module.scss"
import CrossIcon from '../../../assets/icons/cross';
import TickIcon from '../../../assets/icons/Tick';
import OrderHeader from '../ChatSystem/isRsolved/isResolvedHeader';

function Complaints() {
  return (
    <div className={`${styles["Main-container"]}`}>
      <div><OrderHeader></OrderHeader></div>
      <div className={`${styles["inner-conatiner"]}`}>
      <div ><YourOrderInner></YourOrderInner></div>
        <div className={`${styles["Complaint"]}`}>
            <span className={`${styles["Text"]}`}>is Your complaint Resolved
            </span>
            <div className={`${styles["buttons"]}`}>
                <button className={`${styles["yes"]}`}> <TickIcon></TickIcon> </button>
                <button onClick={()=>{
                    window.alert(" We will do our best");
            }}className={`${styles["no"]}`}> <CrossIcon></CrossIcon> </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Complaints