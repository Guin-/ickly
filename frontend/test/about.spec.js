import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import About from '../app/components/about';

describe('<About />', () => {
  it('should render the heading and description', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find('h1')).to.have.length(1)
    expect(wrapper.find('p')).to.have.length(1)
  });
});
