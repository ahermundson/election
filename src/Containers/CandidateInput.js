import React from 'react'
import { connect } from 'react-redux'
import { addCandidate } from '../Actions'

let CandidateInput = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          dispatch(addCandidate(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }} />
        <button type="submit">
          Add Candidate
        </button>
      </form>
    </div>
  )
};

CandidateInput = connect()(CandidateInput);

export default CandidateInput;
