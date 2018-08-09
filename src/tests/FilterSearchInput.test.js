import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilterSearchInput from "../components/FilterSearchInput";
Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
      searchStr: "",
      onSearchChange: jest.fn(),
    },
    enzymeWrapper = mount(<FilterSearchInput {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe("FilterSearchInput Component", () => {
  const { enzymeWrapper, props } = setup();

  test("should contain 'form'control' & 'placeholder'", () => {
    expect(enzymeWrapper.find("input").hasClass("form-control")).toBe(true);
    expect(enzymeWrapper.find("input").prop("placeholder")).toBe("search");
  });

  test("should call change handler while changing input", () => {
    enzymeWrapper.simulate("change");
    expect(props.onSearchChange).toHaveBeenCalled();
  });
});
