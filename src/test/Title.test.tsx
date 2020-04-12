 import React from "react";
 import { shallow } from 'enzyme';
 import Title from '../components/Title';
 
 describe('Title', () => {
   it('Renders correct title', () => {
     const title = shallow(<Title title="featured products"/>);
     expect(title.find("h4").text()).toEqual('featured products')
   });
 });