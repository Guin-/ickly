import React from 'react';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        options: []
        };
  }

  handleSearch(query) {
    if (!query) {
      return;
    }

    fetch('http://localhost:8000/api/v1/businesses/?search=' + query)
      .then(resp => resp.json())
      .then(json => this.setState({options: json.results}))
  };

  render() {
    return (
        <div className="container">
          <div>
            <AsyncTypeahead
              placeholder="Search for a restaurant..."
              labelKey={(option) => option['name']}
              onSearch={this.handleSearch.bind(this)}
              options={this.state.options}
            />
          </div>
        </div>
    );
  }
}

export default SearchForm;
