import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import styles from "./Over.module.scss";

function Over(props) {
  return (
    <div>
      <Table>
        <thead className={`${styles["header"]}`}>
          <tr className="">
            <th>No.</th>
            <th >First Name</th>
            <th >Last Name</th>
            <th >Username</th>
          </tr>
        </thead>
        <tbody className={`${styles["header"]}`}>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Over;
