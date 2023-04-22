import React from "react";
import Stock from "./Stock";
import Overview from "./Overview";
import BestSelling from "./BestSelling";
import "./Management.css";
import Table1 from "./tables/table1";
import Over from "./tables/over";
import ApexChart from "./PieChart";
import CircularChart from "./PieChart/index2";
const category = "Laptops";
const persentage = 30;
function Management() {
  return (
    <div className="management">
      <div className="header">
        <h3 className="heading">Inventory Management </h3>
        <div className="yellow button">Manage Your Inventory</div>
      </div>
      {/* <ApexChart /> */}
      <div className="container2">
        <CircularChart></CircularChart>
        <div className="Stocks">
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
