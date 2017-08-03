import { connect } from 'react-redux'
import { addVote } from '../Actions'
import  Candidates  from '../Components/Candidates'

const mapStateToProps = state => {
  return {
    candidates: state.candidates
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onVote: id => {
      dispatch(addVote(id))
    }
  }
}

const CandidateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidates)

export default CandidateContainer
