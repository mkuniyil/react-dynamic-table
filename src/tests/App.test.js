import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import tableData from "../data.json";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("App.js", () => {
  const app = new App(),
    initialState = {
      ...tableData,
      sortOrder: null,
      searchStr: "",
      filterKey: "",
      filterText: "",
    },
    enzymeWrapper = mount(<App />);

  beforeEach(() => {
    enzymeWrapper.instance().setState = jest.fn();
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test("should initialize properties added in constructor", () => {
    expect(app.state).toEqual(initialState);
    expect(app.columns).toEqual(tableData.columns);
    expect(app.initialData).toEqual(tableData.rows);
    expect(app.numericProps).toEqual([
      "number",
      "productionBudget",
      "worldwideBoxOffice",
    ]);
  });

  describe("compare", () => {
    let a, b, factor;

    beforeEach(() => {
      factor = 1;
      a = { key1: 1, key2: 2, key3: 3 };
      b = { key1: 1, key2: 3, key3: 2 };
    });

    test("should return '0' if both values are equal", () => {
      expect(app.compare("key1", factor)(a, b)).toBe(0);
    });

    test("should return '-1' if value of a < b", () => {
      expect(app.compare("key2", factor)(a, b)).toBe(-1);
    });

    test("should return '1' if value for a > b", () => {
      expect(app.compare("key3", factor)(a, b)).toBe(1);
    });

    test("should return '1' if value of a < b and factor '-1'", () => {
      factor = -1;
      expect(app.compare("key2", factor)(a, b)).toBe(1);
    });

    test("should return '-1' if value of a > b and factor '1'", () => {
      factor = -1;
      expect(app.compare("key2", factor)(a, b)).toBe(1);
    });
  });

  describe("updateSortOrder", () => {
    let sortOrder,
      key = "key";

    it("should return '1' as key value when there's no sortOrder", () => {
      expect(app.updateSortOrder(key, sortOrder)).toEqual({ [key]: 1 });
    });

    it("should return '1' as key value if key is present in sortOrder and its falsy", () => {
      sortOrder = { key: null };
      expect(app.updateSortOrder(key, sortOrder)).toEqual({ [key]: 1 });
    });

    it("should return '-1' as key value if key is present in sortOrder and its truthy", () => {
      sortOrder = { key: 1 };
      expect(app.updateSortOrder(key, sortOrder)).toEqual({ [key]: -1 });
    });
  });

  describe("sortData", () => {
    test("should call 'setState' method", () => {
      enzymeWrapper.instance().sortData();
      expect(enzymeWrapper.instance().setState).toHaveBeenCalled();
    });
  });

  describe("onFilterChange", () => {
    test("should call 'setState' method", () => {
      enzymeWrapper.instance().onFilterChange();
      expect(enzymeWrapper.instance().setState).toHaveBeenCalled();
    });
  });

  describe("setFilterText", () => {
    let oldData = app.columns;

    afterEach(() => {
      app.columns = oldData;
    });

    beforeEach(() => {
      app.columns = [
        { id: "number", title: "Number" },
        { id: "title", title: "Movie" },
      ];
    });

    test("should return title of searched filterKey", () => {
      expect(app.setFilterText("title")).toBe("Movie");
    });

    test("should return undefined if searched filterKey is not present", () => {
      expect(app.setFilterText("strange")).toBeUndefined();
    });
  });

  describe("onSearchChange", () => {
    test("should call 'setState' method", () => {
      enzymeWrapper.instance().onSearchChange();
      expect(enzymeWrapper.instance().setState).toHaveBeenCalled();
    });
  });

  describe("getFilteredData", () => {
    let oldData = app.initialData;

    beforeEach(() => {
      app.initialData = [
        {
          number: 1020,
          title: "Iron Man",
        },
        {
          number: 2011,
          title: "The Incredible Hulk",
        },
        {
          number: 1001,
          title: "Iron Man 2",
        },
      ];
    });

    afterEach(() => {
      app.initialData = oldData;
    });

    test("should return empty array if there's no matching value", () => {
      expect(app.getFilteredData("strange").length).toBe(0);
    });

    test("should return array with filtered string", () => {
      expect(app.getFilteredData("Iron").length).toBe(2);
    });

    test("should return empty array with filtered string, if filter key doesn't match", () => {
      expect(app.getFilteredData("Iron", "number").length).toBe(0);
    });

    test("should return filered array with filter key condition", () => {
      expect(app.getFilteredData("20", "number").length).toBe(2);
    });
  });
});
