import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../components/searchform';
import Business from '../components/business';
import InspectionsList from '../components/inspectionsList';
import { fetchBusiness, resetError, fetchInspections } from '../actions/';
import { Alert } from 'react-bootstrap';

export class BusinessSearch extends React.Component {
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
    dispatch(fetchBusiness(option))
    dispatch(fetchInspections(option))
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
    const { business, inspections } = this.props
    return (
      <div className='container'>
        <SearchForm
          handleSearch={this.handleSearch.bind(this)}
          options={this.state.options}
          renderBusinessOptions={this.renderBusinessOptions.bind(this)}
        />
        <Business business={business}/>
        {this.renderErrorMessage()}
        <InspectionsList inspections={inspections}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  business: state.business.selectedBusiness,
  errorMessage: state.business.error || state.inspections.error,
  inspections: state.inspections.inspections
})

BusinessSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleTypeAheadResultClick: PropTypes.func,
}

export default connect(mapStateToProps)(BusinessSearch);

