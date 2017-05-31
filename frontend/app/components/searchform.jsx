import React from 'react';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container">
          <div>
            <AsyncTypeahead
              placeholder="Search for a restaurant..."
              labelKey={(option) => option['name']}
              onSearch={this.props.handleSearch}
              options={this.props.options}
              renderMenuItemChildren={this.props.renderMenuItemChildren}
            />
          </div>
        </div>
    );
  }
}

export default SearchForm;
