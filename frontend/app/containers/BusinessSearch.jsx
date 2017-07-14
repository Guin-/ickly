import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../components/searchform';
import Business from '../components/business';
import { fetchBusiness, resetError } from '../actions/';
import { Alert } from 'react-bootstrap';

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


  renderBusinessOptions(option, props, index) {
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

  renderErrorMessage() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return null;
    }

    return (
      <Alert bsStyle='danger' onDismiss={this.handleAlertDismiss.bind(this)}>
        { errorMessage }
      </Alert>
    )
  }

  handleAlertDismiss() {
    const { dispatch } = this.props
    dispatch(resetError())
  }

  render() {
    const { selectedBusiness } = this.props
    return (
      <div className='container'>
        <SearchForm
          handleSearch={this.handleSearch.bind(this)}
          options={this.state.options}
          renderBusinessOptions={this.renderBusinessOptions.bind(this)}
        />
        <Business selectedBusiness={selectedBusiness}/>
        {this.renderErrorMessage()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedBusiness: state.selectedBusiness,
  errorMessage: state.error
})

BusinessSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleTypeAheadResultClick: PropTypes.func,
}

export default connect(mapStateToProps)(BusinessSearch);

