import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TableHeader from "../components/TableHeader";
Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
      columns: [
        { id: "number", title: "Number" },
        { id: "title", title: "Movie" },
      ],
      sortData: jest.fn(),
      sortOrder: {},
    },
    enzymeWrapper = shallow(<TableHeader {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe("TableHeader Component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render 'thead', 'tr' and 'th' elements", () => {
    expect(enzymeWrapper.find("thead").length).toBe(1);
    expect(enzymeWrapper.find("tr").length).toBe(1);
    expect(enzymeWrapper.find("th").length).toBe(2);
  });

  test("should render only 'sorting' class", () => {
    expect(enzymeWrapper.find(".sorting").length).toBe(props.columns.length);
    expect(enzymeWrapper.find(".asc").length).toBe(0);
    expect(enzymeWrapper.find(".desc").length).toBe(0);
  });

  test("should render 'asc' class", () => {
    let newProps = { ...props, sortOrder: { number: 1 } },
      newEnzymeWrapper = shallow(<TableHeader {...newProps} />);

    expect(newEnzymeWrapper.find(".asc").length).toBe(1);
    expect(newEnzymeWrapper.find(".desc").length).toBe(0);
  });

  test("should render 'desc' class", () => {
    let newProps = { ...props, sortOrder: { number: -1 } },
      newEnzymeWrapper = shallow(<TableHeader {...newProps} />);

    expect(newEnzymeWrapper.find(".asc").length).toBe(0);
    expect(newEnzymeWrapper.find(".desc").length).toBe(1);
  });

  test("should not render 'th' if columns are empty", () => {
    let newProps = { ...props, columns: [] },
      newEnzymeWrapper = shallow(<TableHeader {...newProps} />);

    expect(newEnzymeWrapper.find("th").length).toBe(0);
  });

  test("should call 'sortData' method while clicking", () => {
    enzymeWrapper
      .find("th")
      .at(0)
      .simulate("click");
    expect(props.sortData).toHaveBeenCalled();
  });
});
