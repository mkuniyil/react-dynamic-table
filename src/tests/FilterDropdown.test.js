import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilterDropdown from "../components/FilterDropdown";
Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
      filterKey: "title",
      tableHeaders: ["number", "title"],
      onSelect: jest.fn(),
    },
    enzymeWrapper = mount(<FilterDropdown {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe("FilterDropdown Component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render 'button' and 'li' elements & have '.btn-toolbar' class", () => {
    expect(enzymeWrapper.find(".btn-toolbar").length).toBe(1);
    expect(enzymeWrapper.find("button").length).toBe(1);
    expect(enzymeWrapper.find("li").length).toBe(2);
  });

  test("should not render 'li' if there's no tableHeaders", () => {
    let newProps = { ...props, tableHeaders: [] },
      newEnzymeWrapper = mount(<FilterDropdown {...newProps} />);

    expect(newEnzymeWrapper.find("li").length).toBe(0);
  });

  test("should call select handler while selecting the dropdoen", () => {
    enzymeWrapper
      .find("li")
      .at(0)
      .find("a")
      .simulate("click");
    expect(props.onSelect).toHaveBeenCalled();
  });
});
