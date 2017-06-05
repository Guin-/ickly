import React from 'react';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSearch, options, renderMenuItemChildren } = this.props
    return (
        <div className="container">
          <div>
            <AsyncTypeahead
              placeholder="Search for a restaurant..."
              labelKey={(option) => option['name']}
              onSearch={handleSearch}
              options={options}
              renderMenuItemChildren={renderMenuItemChildren}
            />
          </div>
        </div>
    );
  }
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  options: PropTypes.array,
  renderMenuItemChildren: PropTypes.func.isRequired,
}

export default SearchForm;
