import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CandidateDiv = styled.div`
  height: 200px;
  width: 200px;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Candidate = ({ onVote, remove, name, votes}) => (
  <CandidateDiv>
    {name} - {votes}
    <button
      onClick={onVote}>
      Vote
    </button>
    <button onClick={remove}>
      Delete
    </button>
  </CandidateDiv>
)

Candidate.propTypes = {
  onVote: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
}

export default Candidate
