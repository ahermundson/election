import React from 'react'
import PropTypes from 'prop-types'
import Candidate from './Candidate'

const Candidates = ({ candidates, onVote, removeCandidate }) => (
  <div>
    {candidates.map(candidate => (
      // <div key={candidate.id} className="candidate">
      //   {candidate.name} - {candidate.votes} - {candidate.id}
      //   <button onClick={() => onVote(candidate.id)}>
      //     Vote
      //   </button>
      // </div>

      <Candidate
        key={candidate.id}
        {...candidate}
        onVote={() => onVote(candidate.id)}
        remove={() => removeCandidate(candidate.id)}/>
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
