import React, { Component } from 'react';
import '../App.css';
import CandidateContainer from '../Containers/CandidateContainer'
import CandidateInput from '../Containers/CandidateInput'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CandidateContainer />
        <CandidateInput />
      </div>
    );
  }
}

export default App;
