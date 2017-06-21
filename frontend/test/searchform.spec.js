import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import SearchForm from '../app/components/searchform';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

describe('<SearchForm />', () => {
  it('should render the typeahead search form', () => {
/*
    const props = {
      options: [
        { name: 'restaurant', camis: '123456', address: 'location'},
        { name: 'restaurant2', camis: '223456', address: 'location2'}
      ],
      renderBusinessOptions: sinon.spy(),
      handleSearch: sinon.spy()
    }
*/
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.find(AsyncTypeahead)).to.have.length(1);
  });

  it('should have props for handleSearch and renderBusinessOptions', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.props().handleSearch).to.be.defined;
    expect(wrapper.props().renderBusinessOptions).to.be.defined;
  })
/*
  it('should call handleSearch if the user inputs a query', () => {
    const handleSearchSpy = sinon.spy()
    const wrapper = mount(<SearchForm handleSearch={handleSearchSpy} />)
    //simulate user input
    wrapper.find(AsyncTypeahead).simulate('change', {target: {value: 'my query'}})
    expect(handleSearchSpy.called).to.equal(true)
  })
*/
});
