import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TableRow from "../components/TableRow";
Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
      columns: [
        { id: "number", title: "Number" },
        { id: "title", title: "Movie" },
      ],
      rowEntry: {
        number: 1,
        title: "Iron Man",
      },
    },
    enzymeWrapper = shallow(<TableRow {...props} />);

  return {
    props,
    enzymeWrapper,
  };
};

describe("TableRow Component", () => {
  const { enzymeWrapper, props } = setup();

  test("should render 'tr' and 'td' elements", () => {
    expect(enzymeWrapper.find("tr")).toBeDefined();
    expect(enzymeWrapper.find("td")).toBeDefined();
  });

  test("should render td 'column length' times", () => {
    expect(enzymeWrapper.find("td")).toHaveLength(props.columns.length);
  });

  test("should render td with 'number' & 'title'", () => {
    expect(
      enzymeWrapper
        .find("td")
        .at(0)
        .text()
    ).toEqual(expect.stringContaining(props.rowEntry.number.toString()));
    expect(
      enzymeWrapper
        .find("td")
        .at(1)
        .text()
    ).toEqual(expect.stringContaining(props.rowEntry.title));
  });

  test("should not render 'td' if columns are empty", () => {
    let newProps = { ...props, columns: [] },
      newEnzymeWrapper = shallow(<TableRow {...newProps} />);

    expect(newEnzymeWrapper.find("td").length).toBe(0);
  });
});
