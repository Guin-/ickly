import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { BusinessSearch } from '../app/containers/BusinessSearch';
import SearchForm from '../app/components/searchform';
import Business from '../app/components/business';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';

describe('<BusinessSearch />', () => {
  it('should render the SearchForm and Business components', () => {
    const props = {
      handleTypeAheadResultClick : () => {},
      dispatch: () => {},
      business: {}
    }
    const wrapper = shallow(<BusinessSearch {...props} />)
    expect(wrapper.find(SearchForm)).to.have.length(1)
    expect(wrapper.find(Business)).to.have.length(1)
    expect(wrapper.find('h1').exists()).to.be.false;
  });

  it('should render the selected business name when it exists', () => {
    const props = {
      business: {name: 'restaurant'}
    }
    const wrapper = mount(<BusinessSearch {...props} />)
    const businessName = wrapper.find('h4')
    expect(businessName.text()).to.equal('restaurant')
  });

  it('can update state with options', () => {
    const wrapper = shallow(<BusinessSearch />)
    expect(wrapper.state().options).to.eql([]);
    wrapper.setState({
      options: [
        { name: 'restaurant', camis: '123456', address: 'location'},
        { name: 'restaurant2', camis: '223456', address: 'location2'}
      ]
    });
    expect(wrapper.state().options).to.have.length(2);
  })
});
