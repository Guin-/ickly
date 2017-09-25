import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Contact from '../app/components/contact';

describe('<Contact />', () => {
  it('should render a heading and description', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find('h1')).to.have.length(1)
    expect(wrapper.find('li')).to.have.length(2)
  });
});
