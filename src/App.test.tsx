import React from 'react';
import {shallow} from 'enzyme'
import App from './App'

describe('We are doing test oone on jest',() =>{
  it('should render <div>' ,() =>{
    const container=shallow(<App/>)
    expect(container.find('div').length).toEqual(1)
  });
});