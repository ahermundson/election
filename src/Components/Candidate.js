import React from 'react'
import PropTypes from 'prop-types'

const Candidate = ({ onClick, name}) => {
  <div
    onClick{onClick}
    className='candidate'>
    {name}
  </div>
}

Candidate.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Candidate
