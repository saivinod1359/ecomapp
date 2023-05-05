import { render, screen } from "@testing-library/react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
import Label from "./label.component";

Enzyme.configure({adapter: new Adapter() })

//Write a test case for addition a+b = 2
describe("Addition of two numbers", () => {
    let a = 1;
    let b = 1;
    test("Variable a is defined", () => {
        // expect(a).toBeFalsy()
        expect(a).toBeDefined();
    });

    test("Value inside variable a", () => {
        expect(a).toBe(1);
    });

    test("Variable b is defined", () => {
        expect(b).toBeDefined();
    });

    test("Value inside variable b", () => {
        expect(b).toBe(1);
    });

    test("Result a + b is defined", () => {
        expect(a+b).toBeDefined();
    });

    test("Result should equal to", () => {
        expect(a+b).toBe(2);
    })

});


describe("dataType of variable", () => {
    const name = "Sai";

    test("Variable is defined", () => {
        expect(name).toBeDefined();
    })

    test("Value inside Variable is name", () => {
        expect(name).toBe("Sai");
    })

    test("Data type Variable shuould be String", () => {
        expect(typeof name).toBe("string");
    })

    test("Check the statement of Sai", () => {
        expect(`Hello ${name}`).toBe("Hello Sai");
    })
})

describe("Simple label component render check", () => {
    test("render label component", () => {
        render(<Label />);
        const wrap = screen.getByTestId("labelid");
        expect(wrap).toBeInTheDocument();
    })
})


describe("Simple label Component Shallow render check", () => {
    test("shallow render label component", () => {
        const wrap = shallow(<Label />);
        expect(wrap).toMatchSnapshot();
    })
})

describe("Check Props for lable component", () => {
   test("msg prop for label component", () => {
        const wrap = mount(<Label msg="Hello World!"/>);
        expect(wrap.props().msg).toEqual("Hello World!")
   })
})

describe("Test the function", () => {
    test("check the function", () => {
        const handleClick = jest.fn();
        const wrap = mount(<Label />);
        wrap.find('label').simulate('click');
        expect(wrap.find('label').text().trim()).toBe("Smith")
    })

    test("fire event of click and check the value", () => {
        const handleClick = jest.fn();
        const wrap = mount(<Label />);
        expect(wrap.find('label').text().trim()).toBe("Sai")
        wrap.find('label').simulate('click');
        expect(wrap.find('label').text().trim()).toBe("Smith")
    })
})
