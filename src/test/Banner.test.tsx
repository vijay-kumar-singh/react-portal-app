 import React from "react";
 import { shallow } from 'enzyme';
 import Banner from '../components/Banner';
 
 describe('Banner', () => {
   it('Renders correct title', () => {
     const banner = shallow(<Banner title='Insurance Products' />);
     expect(banner.find("h1").text()).toEqual('Insurance Products')
   });
 });