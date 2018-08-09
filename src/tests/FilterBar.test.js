import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilterBar from "../components/FilterBar";
Enzyme.configure({ adapter: new Adapter() });

const props = {
    appProps: {
      tableData: {
        columns: [],
      },
      tableMethods: { onFilterChange: jest.fn(), onSearchChange: jest.fn() },
      searchStr: "",
    },
  },
  enzymeWrapper = mount(<FilterBar {...props} />);

describe("TableRow Component", () => {
  test("should render 'fieldset' & '.form-group'", () => {
    expect(enzymeWrapper.find("fieldset").length).toBe(1);
    expect(enzymeWrapper.find(".form-group").length).toBe(1);
    expect(enzymeWrapper.find(".col-sm-2").length).toBe(2);
  });
});
