import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class FilterSearchInput extends Component {
  /**
   * Handler for input change event
   *
   * @param {Object} event
   */
  handleChange = event => {
    let val = event.target.value;
    this.props.onSearchChange(val);
  };

  render() {
    let { searchStr } = this.props;

    return (
      <FormControl
        componentClass="input"
        placeholder="search"
        value={searchStr}
        onChange={this.handleChange}
      />
    );
  }
}
export default FilterSearchInput;
