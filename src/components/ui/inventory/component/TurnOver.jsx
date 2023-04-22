import React from "react";
import "./TurnOver.css";
function TurnOver(props) {
  return (
    <tr>
      <td>{props.catagory} </td>
      <td>{props.turnOver}</td>
    </tr>
  );
}

export default TurnOver;
