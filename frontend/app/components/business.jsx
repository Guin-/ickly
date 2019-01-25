import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

const Business = ({business}) => (
    <div className='col-lg-6 offset-lg-3'>
      <h4>{business.name}</h4>
      <h5><NumberFormat value={business.phone} displayType={'text'} format="(###) ###-####"/></h5>
      <h5>{business.address}</h5>
      <h5>{business.cuisine_description}</h5>
    </div>
)

Business.propTypes = {
  business: PropTypes.object.isRequired
}

export default Business;
