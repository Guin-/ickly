import React from 'react';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        options: [],
        selected: []
        };
  }

  handleSearch(query) {
    if (!query) {
      return;
    }

    fetch('/api/v1/businesses/?search=' + query)
      .then(resp => resp.json())
      .then(json => this.setState({options: json.results}))
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
   fetch('/api/v1/businesses/' + option['camis'])
    .then(resp => resp.json())
    .then(json => this.setState({selected: json}))
 }

  render() {
    return (
        <div className="container">
          <div>
            <AsyncTypeahead
              placeholder="Search for a restaurant..."
              labelKey={(option) => option['name']}
              onSearch={this.handleSearch.bind(this)}
              options={this.state.options}
              renderMenuItemChildren={this.renderMenuItemChildren.bind(this)}
            />
          </div>
          <div>
            <strong>{this.state.selected.name}</strong>
            <p>{this.state.selected.address}</p>
            <p>{this.state.selected.phone}</p>
            <p>{this.state.selected.cuisine_description}</p>
          </div>
        </div>
    );
  }
}

export default SearchForm;
