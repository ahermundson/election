import React from 'react'
import PropTypes from 'prop-types'

const Candidate = ({ onVote, remove, name, votes}) => (
  <div
    className='candidate'>
    {name} - {votes}
    <button
      onClick={onVote}>
      Vote
    </button>
    <button onClick={remove}>
      Delete
    </button>
  </div>
)

Candidate.propTypes = {
  onVote: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
}

export default Candidate
