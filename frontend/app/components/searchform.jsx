import React from 'react';
import { AsyncTypeahead }  from 'react-bootstrap-typeahead';
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderBusinessOptions(option, props, index) {
    return (
      <div key={option.camis} onClick={this.handleSelectClick.bind(this)}>
        <strong>{option.name}</strong>
        <p>{option.address}</p>
      </div>
    );
  }

  onFocus(event) {
    this.typeahead.getInstance().clear()
  }

  onKeyDown(event) {
    if (event.key === "Enter") {
        this.typeahead.getInstance().blur();
      }
  }

  handleSelectClick(event) {
   this.typeahead.getInstance().blur();
  }

  render() {
    const { handleSearch, options, isLoading, onChange } = this.props
    return (
          <div className='col-lg-8 offset-lg-2'>
            <form>
              <AsyncTypeahead
                ref={(typeahead) => this.typeahead = typeahead}
                placeholder="Search for a restaurant..."
                isLoading={isLoading}
                labelKey={(option) => option['name']}
                onSearch={handleSearch}
                options={options}
                renderMenuItemChildren={this.renderBusinessOptions.bind(this)}
                onChange={onChange}
                onKeyDown={this.onKeyDown.bind(this)}
                onFocus={this.onFocus.bind(this)}
              />
            </form>
          </div>
    );
  }
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  options: PropTypes.array,
}

export default SearchForm;
