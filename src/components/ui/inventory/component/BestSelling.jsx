import React from "react";
import TurnOver from "./TurnOver";
import "./BestSelling.css";
import data from "../../../../assets/shared/data.json";
const filterdata = data.inventory.component;
function BestSelling() {
  return (
    <div className="box">
      <div className="title">BEST SELLING PRODUCT</div>

      <table >
        <tr className="table-content1">
          <th className="heading">Category</th>
          <th className="heading">Turnover</th>
        </tr>
        <tr className="table-content2">
        {filterdata
          .sort((a, b) => b.turnover - a.turnover)
          .map((i) => (
            <TurnOver catagory={i.catagory} turnOver={i.turnOver} />
          ))}
        </tr>
      </table>
  
    </div>
  );
}

export default BestSelling;
