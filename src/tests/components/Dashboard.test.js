import React from 'react'
import Dashboard from '../../components/Dashboard';
import {shallow} from 'enzyme';


test('Should render dashboard correctly', () => {
  const wrapper = shallow(<Dashboard />);
  expect(wrapper).toMatchSnapshot();
}); 
