import React, { Component } from "react";
import { Form, FormGroup, Col } from "react-bootstrap";
import FilterSearchInput from "./FilterSearchInput";
import FilterDropdown from "./FilterDropdown";

class FilterBar extends Component {
  render() {
    let { tableData, tableMethods, searchStr } = this.props.appProps;

    return (
      <Form componentClass="fieldset">
        <FormGroup>
          <Col sm={2}>
            <FilterSearchInput
              searchStr={searchStr}
              onSearchChange={tableMethods.onSearchChange}
            />
          </Col>
          <Col sm={2}>
            <FilterDropdown
              tableHeaders={tableData.columns}
              filterText={tableData.filterText}
              onSelect={tableMethods.onFilterChange}
            />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}
export default FilterBar;
