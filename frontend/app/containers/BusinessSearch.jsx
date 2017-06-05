import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../components/searchform';
import Business from '../components/business';
import { fetchBusiness } from '../actions/';

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
    const { item } = this.props
    return (
      <div className='container'>
        <SearchForm
          handleSearch={this.handleSearch.bind(this)}
          options={this.state.options}
          renderMenuItemChildren={this.renderMenuItemChildren.bind(this)}
        />
        <Business item={item}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { item } = state
  return {
    item
  }
}

BusinessSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleTypeAheadResultClick: PropTypes.func,
}

export default connect(mapStateToProps)(BusinessSearch);

