import React, { Component } from "react";
import { Panel, Table } from "react-bootstrap";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import FilterBar from "./FilterBar";

class TablePanel extends Component {
  render() {
    const { tableData, tableMethods } = this.props;

    return (
      <Panel>
        <Panel.Body>
          <Panel.Heading>
            <FilterBar appProps={{ ...this.props }} />
          </Panel.Heading>
          <Table striped bordered condensed hover responsive>
            <TableHeader
              columns={tableData.columns}
              sortData={tableMethods.sortData}
              sortOrder={tableData.sortOrder}
            />
            <TableBody tableData={tableData} />
          </Table>
        </Panel.Body>
      </Panel>
    );
  }
}

export default TablePanel;
