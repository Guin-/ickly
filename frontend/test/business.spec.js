import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Business from '../app/components/business';

describe('<Business />', () => {
  it('should render the name of the selected business', () => {
    const wrapper = shallow(<Business />)
    expect(wrapper.find('div')).to.have.length(1)
  });
});
