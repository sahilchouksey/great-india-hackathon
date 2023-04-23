import React from "react";
import "./TurnOver.css";
function TurnOver(props) {
  return (
    <tr className="inner">
      <td className="data">{props.catagory} </td>
      <td className="data">{props.turnOver}</td>
    </tr>
  );
}

export default TurnOver;
