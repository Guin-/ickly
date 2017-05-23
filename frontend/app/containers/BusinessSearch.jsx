import React from 'react';
import SearchForm from '../components/searchform';

class BusinessSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <SearchForm />
      </div>
    )
  }
}

export default BusinessSearch;
