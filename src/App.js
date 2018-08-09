import React, { Component } from "react";
import TablePanel from "./components/TablePanel";
import tableData from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...tableData,
      sortOrder: null,
      searchStr: "",
      filterKey: "",
      filterText: "",
    };
    this.columns = tableData.columns;
    this.initialData = tableData.rows;
    this.numericProps = ["number", "productionBudget", "worldwideBoxOffice"];
  }

  /**
   * Array compare method used to sort the passed array
   */
  compare = (key, factor) => (a, b) => {
    if (a[key] < b[key]) return -1 * factor;
    if (a[key] > b[key]) return 1 * factor;
    return 0;
  };

  /**
   * Method which update the sort order value
   *
   * @param {string} key
   * @param {Object} sortOrder
   *
   * @returns {Object}
   */
  updateSortOrder = (key, sortOrder) => {
    return { [key]: !sortOrder || !sortOrder[key] ? 1 : -sortOrder[key] };
  };

  /**
   * Method for sorting the column data
   */
  sortData = key => {
    this.setState(({ rows, sortOrder }) => {
      let newSortOrder = this.updateSortOrder(key, sortOrder);

      return {
        ...this.state,
        sortOrder: { ...newSortOrder },
        rows: rows.slice(0).sort(this.compare(key, newSortOrder[key])),
      };
    });
  };

  /**
   * Handler for dropdown filter change event
   *
   * @param {string} key
   */
  onFilterChange = key => {
    this.setState(({ searchStr }) => {
      return {
        ...this.state,
        filterKey: key,
        filterText: this.setFilterText(key),
        rows: this.getFilteredData(searchStr, key),
      };
    });
  };

  /**
   * Method for getting the header text based on filterKey
   *
   * @param {string} key
   * @returns {string}
   */
  setFilterText = key => {
    let filteredArray = this.columns.filter(entry => entry.id === key);

    if (filteredArray.length > 0) return filteredArray[0].title;
  };

  /**
   * Handler for search input change event
   *
   * @param {string} searchStr
   */
  onSearchChange = searchStr => {
    this.setState(({ filterKey }) => {
      return {
        ...this.state,
        searchStr,
        rows: this.getFilteredData(searchStr, filterKey),
      };
    });
  };

  /**
   * Method for filtering the data based on search string and filterKey
   *
   * @param {string} searchStr
   * @param {string} filterKey
   *
   * @returns {Array}
   */
  getFilteredData = (searchStr, filterKey) => {
    return this.initialData.filter(obj => {
      for (let entry in obj) {
        if (filterKey && entry !== filterKey) {
          continue;
        }

        let entryVal = obj[entry];

        if (this.numericProps.indexOf(entry) > -1 && !isNaN(obj[entry])) {
          entryVal = entryVal.toString();
        }

        if (entryVal.toLowerCase().indexOf(searchStr.toLowerCase()) > -1) {
          return true;
        }
      }

      return false;
    });
  };

  render() {
    return (
      <div className="app-container">
        <TablePanel
          tableData={{ ...this.state }}
          tableMethods={{
            sortData: this.sortData,
            onFilterChange: this.onFilterChange,
            onSearchChange: this.onSearchChange,
          }}
        />
      </div>
    );
  }
}

export default App;
