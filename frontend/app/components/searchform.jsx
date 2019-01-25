import React from 'react';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSearch, options, isLoading, renderBusinessOptions } = this.props
    return (
          <div className='col-lg-8 offset-lg-2 col-xs-8 offset-xs-1'>
            <AsyncTypeahead
              placeholder="Search for a restaurant..."
              isLoading={isLoading}
              labelKey={(option) => option['name']}
              onSearch={handleSearch}
              options={options}
              renderMenuItemChildren={renderBusinessOptions}
            />
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
