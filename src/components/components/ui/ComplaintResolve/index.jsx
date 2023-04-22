import React from 'react'
import YourOrderInner from '../OrdercomplaintItemComponent';

import styles from "./Resolve.module.scss"
function Complaints() {
  return (
    <div className={styles["Main-container"]}>
      <div className={styles["inner-conatiner"]}>
      <div ><YourOrderInner></YourOrderInner></div>
        <div className={styles["Complaint"]}>
            <span className={styles["Text"]}>is Your complaint Resolved
            </span>
            <div className={styles["buttons"]}>
                <button className={styles["yes"]}>Yes</button>
                <button onClick={()=>{
                    window.alert(" We will do our best");
                }} className={styles["no"]}>No</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Complaints