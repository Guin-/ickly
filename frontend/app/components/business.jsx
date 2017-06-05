import React from 'react'
import PropTypes from 'prop-types';

const Business = ({item}) => (
  <div>
    <h1>{item.name}</h1>
  </div>
)

Business.propTypes = {
  item: PropTypes.object.isRequired
}

export default Business;
