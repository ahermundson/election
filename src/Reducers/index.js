import { combineReducers } from 'redux'
import candidates from './candidates'

const election = combineReducers({
  candidates
});

export default election;
