import React from "react";

const TableRow = ({ columns, rowEntry }) => (
  <tr>
    {columns.map((columnEntry, columnIndex) => {
      return <td key={columnIndex}> {rowEntry[columnEntry.id]} </td>;
    })}
  </tr>
);

export default TableRow;
