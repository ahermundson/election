import React from 'react'
import PropTypes from 'prop-types'
import Candidate from './Candidate'
import styled from 'styled-components'

const CandidatesContainerDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Candidates = ({ candidates, onVote, removeCandidate }) => (
  <CandidatesContainerDiv>
    {candidates.map(candidate => (
      <Candidate
        key={candidate.id}
        {...candidate}
        onVote={() => onVote(candidate.id)}
        remove={() => removeCandidate(candidate.id)}/>
    ))}
  </CandidatesContainerDiv>
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
