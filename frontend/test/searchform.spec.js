import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import SearchForm from '../app/components/searchform';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

describe('<SearchForm />', () => {
  it('should render the typeahead search form', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.find(AsyncTypeahead)).to.have.length(1);
  });

  it('should have props for handleSearch and renderBusinessOptions', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.props().handleSearch).to.be.defined;
    expect(wrapper.props().renderBusinessOptions).to.be.defined;
  })
});
