import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ tableData }) => (
  <tbody>
    {tableData.rows.map((rowEntry, rowIndex) => {
      return (
        <TableRow
          columns={tableData.columns}
          rowEntry={rowEntry}
          key={rowIndex}
        />
      );
    })}
  </tbody>
);

export default TableBody;
