import { connect } from 'react-redux'
import  CandidateList  from '../Components/CandidateList'

const mapStateToProps = state => {
  return {
    candidates: state.candidates
  }
}

const CandidateListContainer = connect(
  mapStateToProps
)(CandidateList)

export default CandidateListContainer
