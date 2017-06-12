import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SearchForm from '../app/components/searchform';

describe('<SearchForm />', () => {
  it('should render the typeahead search form', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.find(AsyncTypeahead)).to.have.length(1)
  });
});
