import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'

const Wrapper = styled.section`
  padding: 1em;
`;

const Business = ({business}) => (
  <Wrapper>
    <div>
      <h4>{business.name}</h4>
      <NumberFormat value={business.phone} displayType={'text'} format="(###) ###-####"/>
      <h5>{business.address}</h5>
      <h5>{business.cuisine_description}</h5>
    </div>
  </Wrapper>
)

Business.propTypes = {
  business: PropTypes.object.isRequired
}

export default Business;
