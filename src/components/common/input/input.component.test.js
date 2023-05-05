import React, { useState } from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import InputComponent from "./input_component";

Enzyme.configure({ adapter: new Adapter() })

describe("useState hook testing", () => {
    test("Should update state on input change", () => {
        const setState = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation((initialState) => [initialState, setState]);
        const newInputValue = "New Value";
        const wrapper = shallow(<InputComponent />);
        wrapper
            .find("input")
            .simulate("change", { target: { value: newInputValue } });
        expect(setState).toHaveBeenCalledWith(newInputValue);
    })
})