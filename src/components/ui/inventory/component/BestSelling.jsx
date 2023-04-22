import React from "react";
import TurnOver from "./TurnOver";
import "./BestSelling.css";
import data from "../../../../assets/shared/data.json";
const filterdata = data.inventory.component;
function BestSelling() {
  return (
    <div className="box">
      <div className="title">BEST SELLING PRODUCT</div>
      {/* <div className="table">
        <div className="headingss">
          <div className="m">Category</div>
          <div className="m">TurnOver</div>
        </div>
        <div>
          {filterdata
            .sort((a, b) => b.turnover - a.turnover)
            .map((i) => (
              <TurnOver catagory={i.catagory} turnover={i.turnOver} />
            ))}
        </div>
      </div> */}
      <table>
        <th>
          <td>Category</td>
          <td>Turnover</td>
        </th>
        {filterdata
          .sort((a, b) => b.turnover - a.turnover)
          .map((i) => (
            <TurnOver catagory={i.catagory} turnOver={i.turnOver} />
          ))}
      </table>
    </div>
  );
}

export default BestSelling;
