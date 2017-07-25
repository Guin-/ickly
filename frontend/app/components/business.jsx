import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 1em;
`;

const Business = ({selectedBusiness}) => (
  <Wrapper>
    <div>
      <h4>{selectedBusiness.name}</h4>
      <h5>{selectedBusiness.phone}</h5>
      <h5>{selectedBusiness.address}</h5>
      <h5>{selectedBusiness.cuisine_description}</h5>
    </div>
  </Wrapper>
)

Business.propTypes = {
  selectedBusiness: PropTypes.object.isRequired
}

export default Business;
