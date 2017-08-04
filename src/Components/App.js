import React, { Component } from 'react';
import '../App.css';
import CandidateContainer from '../Containers/CandidateContainer'
import CandidateInput from '../Containers/CandidateInput'
import CandidateListContainer from '../Containers/CandidateListContainer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CandidateContainer />
        <CandidateInput />
        <CandidateListContainer />
      </div>
    );
  }
}

export default App;
