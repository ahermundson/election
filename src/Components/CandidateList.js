import React, { Component } from 'react'
import PropTypes from 'prop-types'


class CandidateList extends Component {
  componentWillReceiveProps(nextProps) {
    this.setState({
      candidates: nextProps.candidates.sort((a,b) => b.votes - a.votes)
    });
  }

  constructor(props){
    super(props);

    this.state = {
      candidates: this.props.candidates
    };
  }

  render(){
    return(
      <table>
        <thead>
          <tr>
            <th>Candidate</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {this.state.candidates.map(candidate =>
          <tr key={candidate.id}>
            <td>{candidate.name}</td>
            <td>{candidate.votes}</td>
          </tr>)}
        </tbody>
      </table>
    );
  }
}



CandidateList.propTypes = {
  candidates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
}

export default CandidateList
