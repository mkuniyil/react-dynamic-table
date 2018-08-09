import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import TableBody from "../components/TableBody";
Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
      tableData: {
        columns: [],
        rows: [],
      },
    },
    enzymeWrapper = shallow(<TableBody {...props} />);

  return {
    enzymeWrapper,
  };
};

describe("TableBody Component", () => {
  const { enzymeWrapper } = setup();

  test("should render 'tbody' and 'td' elements", () => {
    expect(enzymeWrapper.find("tbody").length).toBe(1);
  });
});
