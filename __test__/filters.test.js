import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../component/filters/index";

describe("Filter title", () => {
    it('App shows "Filters"', () => {
        const app = shallow(<App />);

        expect(app.find("h4").text()).toEqual("Filters");
    });
});

describe("With Snapshot Testing", () => {
    it('App shows "Filters"', () => {
        const component = renderer.create(<App />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('Test Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<button onClick={mockCallBack}>Ok!</button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});