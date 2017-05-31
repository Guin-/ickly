import React from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/searchform';
import store from '../index';
import { fetchBusiness, receiveBusinessDetail } from '../actions/';

class BusinessSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      options: []
    };

    this.handleTypeAheadResultClick = this.handleTypeAheadResultClick.bind(this)
  }

  handleSearch(query) {
    if (!query) {
      return;
    }

    fetch('/api/v1/businesses/?search=' + query)
      .then(resp => resp.json())
      .then(json => this.setState({options: json.results, searchQuery: query}))
      .catch(err => console.error('Business Search: handleSearch failed', err))
  };


  renderMenuItemChildren(option, props, index) {
    return (
      <div key={option.camis} onClick={(e) => this.handleTypeAheadResultClick(option)}>
        <strong>{option.name}</strong>
        <p>{option.address}</p>
      </div>
    );
  }

  handleTypeAheadResultClick(option) {
    const { dispatch } = this.props
    dispatch(fetchBusiness(option));
  }


  render() {
    return (
      <div className='container'>
        <SearchForm
          handleSearch={this.handleSearch.bind(this)}
          options={this.state.options}
          renderMenuItemChildren={this.renderMenuItemChildren.bind(this)}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { fetchBusiness, receiveBusinessDetail } = state
  const { isFetching, item } =  fetchBusiness ||
    { isFetching: true, item: []}
  return {
    item,
    isFetching,
  }
}


export default connect()(BusinessSearch)

