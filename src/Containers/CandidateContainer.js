import { connect } from 'react-redux'
import { addVote, removeCandidate } from '../Actions'
import  Candidates  from '../Components/Candidates'

const mapStateToProps = state => {
  return {
    candidates: state.candidates.sort((a,b) => a.id - b.id)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVote: id => {
      dispatch(addVote(id))
    },
    removeCandidate: id => {
      dispatch(removeCandidate(id))
    }
  }
}

const CandidateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidates)

export default CandidateContainer
