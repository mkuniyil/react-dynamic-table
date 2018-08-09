import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TablePanel from "../components/TablePanel";
Enzyme.configure({ adapter: new Adapter() });

const props = {
    tableData: {
      columns: [],
      sortOrder: {},
      rows: [],
    },
    tableMethods: { sortOrder: jest.fn() },
  },
  enzymeWrapper = mount(<TablePanel {...props} />);

describe("TablePanel Component", () => {
  test("should contain panel classes", () => {
    expect(enzymeWrapper.find(".panel").length).toBe(1);
    expect(enzymeWrapper.find(".panel-body").length).toBe(1);
    expect(enzymeWrapper.find(".panel-heading").length).toBe(1);
  });

  test("should contain table classes", () => {
    expect(enzymeWrapper.find(".table").length).toBe(1);
    expect(enzymeWrapper.find(".table-striped").length).toBe(1);
    expect(enzymeWrapper.find(".table-bordered").length).toBe(1);
    expect(enzymeWrapper.find(".table-condensed").length).toBe(1);
    expect(enzymeWrapper.find(".table-hover").length).toBe(1);
    expect(enzymeWrapper.find(".table-responsive").length).toBe(1);
  });
});
