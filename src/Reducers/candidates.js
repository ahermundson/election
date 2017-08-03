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
          name: action.name
        }
      ]
    case 'ADD_VOTE':
      return state.map(candidate =>
        (candidate.id === action.id) ? {...candidate, votes: candidate.votes++} : candidate
      )
    default:
      return state;
  }
};


export default candidates;
