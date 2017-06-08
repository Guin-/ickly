import React from 'react'
import PropTypes from 'prop-types';

const Business = ({selectedBusiness}) => (
  <div>
    <h1>{selectedBusiness.name}</h1>
  </div>
)

Business.propTypes = {
  selectedBusiness: PropTypes.object.isRequired
}

export default Business;
