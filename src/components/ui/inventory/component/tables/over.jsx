import React, { useEffect } from "react";
import Table1 from "./table1";
import Table from "react-bootstrap/Table";

function Over(props) {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get("https://example.com/api/data");
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <Table>
        <thead className="">
          <tr className="">
            <th className="">No.</th>
            <th className="">First Name</th>
            <th className="">Last Name</th>
            <th className="">Username</th>
          </tr>
        </thead>
        <tbody className="">
          <Table1></Table1>
        </tbody>
      </Table>
    </div>
  );
}

export default Over;
