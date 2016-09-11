import { types } from '../actions';

const initialState = {
  loggedIn: false,
  error: false,
  errorMessage: '',
}

module.exports = (state, action) => {
  if (!state) return initialState
  
  console.log("[reducer] state", state);
  
  switch (action.type) {
    
    case types.LOG_IN:
      // Do AJAX Request
      if (action.payload.username === "admin" && action.payload.password === "admin") {
        return Object.assign({}, state, {
          loggedIn: true,
          error: false,
          errorMessage: ''
        });
      } else {
        return Object.assign({}, state, {
          error: true,
          errorMessage: 'Incorrect username/password'
        });
      }
    default:
      return state
  }
}
