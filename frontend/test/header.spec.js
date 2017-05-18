import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from '../app/components/header';

describe('<Header />', () => {
  it('should render a heading and description', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).to.have.length(1)
    expect(wrapper.find('p')).to.have.length(1)
  });
});
