import React from 'react';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        options: []
        };

  }

  render() {
    return (
        <div className="container">
          <AsyncTypeahead
            labelKey={(option) => option['dba'] + ' ' + option['address']}
            onSearch={ query => (
              fetch('http://localhost:8000/api/v1/businesses')
                .then(resp => resp.json())
                .then(json => json['results'])
                .then(json => this.setState({options: json}))
            )}
            options={this.state.options}
          />
        </div>
    );
  }
}

export default SearchForm;
