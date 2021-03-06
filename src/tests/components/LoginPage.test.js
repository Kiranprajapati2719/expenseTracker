import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import {shallow} from 'enzyme';

test('Should render LoginPage correctly', () => {
	const wrapper = shallow(<LoginPage/>);
	expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
	const startLogin = jest.fn();
	const wrapper = shallow(<LoginPage startLogin = {startLogin}/>);
	wrapper.find('Button').simulate('click');
	expect(startLogin).toHaveBeenCalled(); 
}); 