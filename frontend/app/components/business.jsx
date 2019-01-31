import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'

const Business = ({business}) => (
    <div className='business-detail col-lg-8 offset-lg-2 col-10 offset-1'>
      <h4 className="business-name">{business.name}</h4>
      <p><NumberFormat value={business.phone} displayType={'text'} format="(###) ###-####"/></p>
      <p>{business.address}</p>
      <p>{business.cuisine_description}</p>
    </div>
)

Business.propTypes = {
  business: PropTypes.object.isRequired
}

export default Business;
