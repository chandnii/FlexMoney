import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import flexMoneyPayment from "./flexMoneyPayment";

describe("MyComponent", () => {
  it("should render my component", () => {
    const wrapper = shallow(<flexMoneyPayment />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should take all the params and submit detail", () => {
    const submitDetails = jest.fn();
    const component = shallow(
      <flexMoneyPayment submitDetails={submitDetails} />
    );
    expect(submitDetails).toBeCalledTimes(1);
  });
});
