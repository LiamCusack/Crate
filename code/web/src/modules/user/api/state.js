// This file looks to be the Redux part for setting the user's information when logged in
// These are the reducers for Redux
// Reducers are functions that need an initial/default value and an action as the second argument
// The switch will return different values based on the different type of action
// Reducers are fired when the app first starts up to give default values to the store
// When one reducers fires, ALL reducers fire (so remember to always include a default value)
// Will need to create a case that will add the new information into the store when the user changes something

// Importing the actions (different functions to make api calls)
// App Imports
import { isEmpty } from '../../../setup/helpers'
import { SET_USER, LOGIN_REQUEST, LOGIN_RESPONSE, LOGOUT } from './actions'

// Declaring the initial state, 
// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null
}

// State
export default (state = userInitialState, action) => {
  // switches the case by the action type which is defined in the actions file
  switch (action.type) {
    // Checking to see if the object has a name property, if the user has previously logged in it would have that property and set the user setting the isAuthenticated to true
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      }
    // Displaying a loading message while fetching the user information from the API
    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading
      }
    // Error handling for the Login request failing
    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    // Declaring the store to not hold the user's information once they have logged out
    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null
      }
    // Default for when there isn't a case for the action requested
    default:
      return state
  }
}