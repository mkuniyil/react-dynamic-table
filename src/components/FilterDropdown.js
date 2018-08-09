import React, { Component } from "react";
import { ButtonToolbar, DropdownButton, MenuItem } from "react-bootstrap";

class FilterDropdown extends Component {
  render() {
    const { filterText, onSelect, tableHeaders } = this.props;

    return (
      <ButtonToolbar>
        <DropdownButton
          bsSize="small"
          bsStyle="primary"
          title={filterText || "none"}
          id="dropdown-size-small"
          onSelect={onSelect}
        >
          {tableHeaders.map((entry, index) => {
            return (
              <MenuItem key={index} eventKey={entry.id}>
                {entry.title}
              </MenuItem>
            );
          })}
        </DropdownButton>
      </ButtonToolbar>
    );
  }
}

export default FilterDropdown;
