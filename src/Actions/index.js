let candidateID = 0

export const addCandidate = name => {
  return {
    type: 'ADD_CANDIDATE',
    id: candidateID++,
    name
  }
}

export const addVote = id => {
  return {
    type: 'ADD_VOTE',
    id
  }
}

export const removeCandidate = id => {
  return {
    type: 'REMOVE_CANDIDATE',
    id
  }
}
