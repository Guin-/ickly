import React from 'react';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSearch, options, renderBusinessOptions } = this.props
    return (
        <div className="container">
          <div>
            <AsyncTypeahead
              placeholder="Search for a restaurant..."
              labelKey={(option) => option['name']}
              onSearch={handleSearch}
              options={options}
              renderMenuItemChildren={renderBusinessOptions}
            />
          </div>
        </div>
    );
  }
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  options: PropTypes.array,
  renderBusinessOptions: PropTypes.func.isRequired,
}

export default SearchForm;
