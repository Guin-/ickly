import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import SearchForm from '../components/searchform';
import Business from '../components/business';
import Header from '../components/header';
import Navigation from '../components/nav';
import Inspections from '../components/inspections';
import { fetchBusiness, resetError, fetchInspections } from '../actions/';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead-bs4.css';

export class BusinessSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      options: [],
      isLoading: false,
    };

    this.handleTypeAheadResultClick = this.handleTypeAheadResultClick.bind(this)
  }

  handleSearch(query) {
    this.setState({isLoading: true})
    if (!query) {
      return;
    }

    fetch('/api/v1/businesses/?search=' + query)
      .then(resp => resp.json())
      .then(json => this.setState({
                      options: json.results,
                      searchQuery: query,
                      isLoading: false}))
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
      <Alert className="col-lg-8 offset-lg-2 col-10 offset-1"
             toggle={this.handleAlertDismiss.bind(this)}
             color="danger">
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
      <>
          <section className="hero-wrapper">
            <Navigation />
            <div className="ickly-header">
              <div>
                <Header />
                <SearchForm
                  handleSearch={this.handleSearch.bind(this)}
                  options={this.state.options}
                  isLoading={this.state.isLoading}
                  renderBusinessOptions={this.renderBusinessOptions.bind(this)}
                />
              </div>
            </div>
          </section>
          <section>
            {this.renderErrorMessage()}
            <Business business={business}/>
          </section>
          <section className="section-spacing">
            <Inspections inspections={inspections}/>
          </section>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  business: state.business.selectedBusiness,
  errorMessage: state.business.error || state.inspections.error,
  inspections: state.inspections.inspections
})


export default connect(mapStateToProps)(BusinessSearch);

