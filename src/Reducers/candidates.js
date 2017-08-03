const initialCandidates = {
  candidates: [
    {
      name: 'Alex',
      id: 1000,
      votes: 0
    },
    {
      name: 'Katie',
      id: 1001,
      votes: 0
    }
  ]
};

const candidates = (state = initialCandidates.candidates, action) => {
  switch(action.type) {
    case 'ADD_CANDIDATE':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          votes: 0
        }
      ]
    case 'ADD_VOTE':
      return state.map(candidate =>
        (candidate.id === action.id) ? {...candidate, votes: candidate.votes + 1} : candidate
      )
    case 'REMOVE_CANDIDATE':
      return state.filter(candidate => candidate.id !== action.id)
    default:
      return state;
  }
};


export default candidates;
