import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "../../components/LoginPage"
import { startLogin } from "../../actions/auth";

test ('Should show login page', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
})

test ("Should call startLogout on button click", () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={ startLogin()} />);
    wrapper.find('button').simulate('Click');
    expect(startLogin).toHaveBeenCalled();
})