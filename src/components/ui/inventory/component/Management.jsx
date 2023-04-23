import React from "react";
import Stock from "./Stock";
import Overview from "./Overview";
import BestSelling from "./BestSelling";
import styles from "./Management.module.scss";
import Table1 from "./tables/Table1";
import Over from "./tables/over";
import ApexChart from "./PieChart";
import CircularChart from "./PieChart/index2";
const category = "Laptops";
const persentage = 30;
function Management() {
  return (
    <div className={`${styles["management"]}`}>
      <div className={`${styles["header"]}`}>
        <h3 className={`${styles["heading"]}`}>Inventory Management </h3>
        <div className={`${styles["yellow-button"]}`}>Manage Your Inventory</div>
      </div>
      {/* <ApexChart /> */}
      <div className={`${styles["container2"]}`}>
        <CircularChart></CircularChart>
        <div className={`${styles["Stocks"]}`}>
          <div>
            <Stock category={category} persentage={persentage}></Stock>
          </div>
          <div>
            <Stock category={category} persentage={persentage}></Stock>
          </div>
          <div>
            <Stock category={category} persentage={persentage}></Stock>
          </div>
          <div>
            <Stock category={category} persentage={persentage}></Stock>
          </div>
          <div>
            <Stock category={category} persentage={persentage}></Stock>
          </div>
          <div>
            <Stock category={category} persentage={persentage}></Stock>
          </div>
        </div>
      </div>
      <div style={{ margin: "5px -0px" }}>
        {/* <Overview title='OVERVIEW' sales={8888} totalProfit={10000} revenue={9999}></Overview> */}
        <Over></Over>
        <BestSelling title="Best Selling Products"></BestSelling>
      </div>
    </div>
  );
}

export default Management;
