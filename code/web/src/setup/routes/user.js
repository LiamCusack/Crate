// This is where all of the routes for the user view are stored
// If we make the edit profile a separate page we will need to update this file to include that route
// Will need to import the components we create like they did below
// Then define define the route name for export, declare the path for what the url will be, then say which component to render for that path, then declare if authorization is necessary (most likely will be)
// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'

// User routes
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
  }
}
