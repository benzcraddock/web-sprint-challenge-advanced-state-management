// export and create action creators
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_ERROR = "ADD_ERROR";

// import axios
import axios from 'axios';

// add thunk fetchSmurfs
export const fetchSmurfs = () => {
  return() => {
    
  }
}

export const fetchStart = () => {
  return ({type: FETCH_START});
}

export const fetchSuccess = () => {
  return ({type: FETCH_SUCCESS, payload: smurfs});
}

export const fetchFail = () => {
  return ({type: FETCH_FAIL, payload: error});
}

export const addSmurf = () => {
  return ({type: ADD_SMURF, payload: smurfs});
}

export const addError = () => {
  return ({type: ADD_ERROR, payload: error});
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.