import React from 'react';
import { Typeahead }  from 'react-bootstrap-typeahead';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data: ['these', 'will', 'be' ,'restaurants']
    };
  }

  render() {
    return (
        <div className="container">
          <Typeahead
            placeholder='Restaurant name'
            options={this.state.data}
          />
        </div>
    );
  }
}

export default SearchForm;
