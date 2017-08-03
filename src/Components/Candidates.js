import React from 'react'
import PropTypes from 'prop-types'
import Candidate from './Candidate'

const Candidates = ({ candidates, addVote }) => (
  <div>
    {candidates.map(candidate => (
      <Candidate key={candidate.id} {...candidate} onVote{() => addVote(candidate.id)} />
    ))}
  </div>
)

Candidates.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onVote: PropTypes.func.isRequired
}

export default Candidates
