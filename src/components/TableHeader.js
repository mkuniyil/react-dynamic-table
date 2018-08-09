import React from "react";

const TableHeader = ({ columns, sortData, sortOrder }) => {
  return (
    <thead>
      <tr>
        {columns.map((entry, index) => {
          let sortClass = "sorting",
            sortFactor = sortOrder && sortOrder[entry.id];

          if (sortFactor) {
            sortClass += sortFactor === 1 ? " asc" : " desc";
          }

          return (
            <th
              key={index}
              onClick={() => sortData(entry.id)}
              className={sortClass}
            >
              {entry.title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
