import Loading from '../../components/Loading';
import React from 'react';
import {shallow} from 'enzyme'; 

test('should render header correctly', () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper).toMatchSnapshot();
});