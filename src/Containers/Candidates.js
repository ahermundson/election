import React from 'react'
import PropTypes from 'prop-types'
import Candidate from './Candidate'

const Candidates = ({candidates, onCandidateClick }) => (
  <div>
    {candidates.map(candidate => (
      <Candidate key={candidate.id} {...candidate} onClick{() => onCandidateClick(candidate.id)} />
    ))}
  </div>
)

Candidate.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropType.number.isRequired,
      name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
  onCandidateClick: PropTypes.func.isRequired
}

export default Candidates
