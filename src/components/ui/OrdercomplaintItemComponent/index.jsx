import React from 'react'
import styles from "./OrderComlaint.module.scss"
function YourOrderInner() {
  return (
    <div className={styles['Container']}>
      <div className={styles["conatiner-body"]}>
        <span><img src="./images/image 13.png"
          className={styles["product-image"]} /></span>

        <span>
          <p className={styles["ParaGraphs"]}>ASUS Ryzen 7 Quad Core - 16</p>
          <p className={styles["ParaGraphs"]}>GB/1 TB SSD/Windows 11 Home/4</p>
          <p className={styles["ParaGraphs"]}>GB Graphics</p>
        </span>

        <div className={styles["Price"]}>&#8377;800</div>
      </div>
    </div>
  )
}

export default YourOrderInner