// Imports
// import dependencies
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import cookie from 'js-cookie'

// App Imports
// import routes
// takes us to directory, holds all routes together
// routeApi found in /setup/routes/index.js
import { routeApi } from '../../../setup/routes'

// Actions Types
// I believe we will be adding actions to allow user to update data
export const LOGIN_REQUEST = 'AUTH/LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'AUTH/LOGIN_RESPONSE'
export const SET_USER = 'AUTH/SET_USER'
export const LOGOUT = 'AUTH/LOGOUT'

// Actions

// Set a user after login or using localStorage token
// checks localStorage for user, uses that if had
export function setUser(token, user) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }

  return { type: SET_USER, user }
}

// Login a user using credentials
export function login(userCredentials, isLoading = true) {
  // run login_request action
  return dispatch => {
    dispatch({
      // point at login request, use isLoading, default true
      type: LOGIN_REQUEST,
      isLoading
    })

    // post with axios to user route
    return axios.post(routeApi, query({
      operation: 'userLogin',
      variables: userCredentials,
      fields: ['user {name, email, role}', 'token']
    }))
      // handle promise
      .then(response => {
        let error = ''

        // if there's an error, set the error message
        if (response.data.errors && response.data.errors.length > 0) {
          error = response.data.errors[0].message
        } else if (response.data.data.userLogin.token !== '') {
          // else if there's no error, generate user and local storage token
          const token = response.data.data.userLogin.token
          const user = response.data.data.userLogin.user

          // set user with token and user made
          dispatch(setUser(token, user))

          // login user and set in local storage
          loginSetUserLocalStorageAndCookie(token, user)
        }

        // check if there is an error 
        dispatch({
          type: LOGIN_RESPONSE,
          error
        })
      })
      // run error handling if login doesn't work
      .catch(error => {
        dispatch({
          type: LOGIN_RESPONSE,
          error: 'Please try again'
        })
      })
  }
}

// Set user token and info in localStorage and cookie
export function loginSetUserLocalStorageAndCookie(token, user) {
  // Update token
  // add token and user to local storage
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(user))

  // Set cookie for SSR
  // set cookie called auth with obj of token and user on home path
  cookie.set('auth', { token, user }, { path: '/' })
}

// Register a user
// fn to sign up a user
export function register(userDetails) {
  // use dispatch to run
  return dispatch => {
    // run post(mutation)
    return axios.post(routeApi, mutation({
      // set up basic fields based on given details
      operation: 'userSignup',
      variables: userDetails,
      fields: ['id', 'name', 'email']
    }))
  }
}

// Log out user and remove token from localStorage
export function logout() {
  return dispatch => {
    // remove cookie, user from local storage
    // basically just dom manipulation
    logoutUnsetUserLocalStorageAndCookie()

    // run logout action
    // database manipulation
    dispatch({
      type: LOGOUT
    })
  }
}

// Unset user token and info in localStorage and cookie
export function logoutUnsetUserLocalStorageAndCookie() {
  // Remove token
  // removes user and token from local storage
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')

  // Remove cookie
  // remove the auth cookie
  cookie.remove('auth')
}

// Get user gender
export function getGenders() {
  return dispatch => {
    // run post, query, get id and name of userGenders
    return axios.post(routeApi, query({
      operation: 'userGenders',
      fields: ['id', 'name']
    }))
  }
}

// This is where we will add actions
// actions for add photo, update email, etc.
