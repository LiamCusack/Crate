// This is where we will display or routes/links to all the new features
// I believe the next delivery should be shown here at all times with maybe a button to edit the delivery date
// This component should have an image tag with a default image that we will need to store and give each user by default
// Should display the address, email address and their description. Should include default messages if they haven't defined these areas yet. 
// I think we should include a button to take the user to another page with a form to change their address, email, and user description
// Should display the next delivery (same date each month based on the date of subscription). Display a default message for when they don't have any subscriptions yet
// Should display the items previously ordered. Display a default message for when they have not ordered anything yet

// Below are the imports for the core functionality in making the react app
// Import React in order to create the component
// Import PropTypes for typechecking which can help catch bugs especially as the app grows. Ensures the use of correct data type and pass the right data through props
// Import connect in order to connect the component to the store by adding items from the store to our component props
// Import Helmet is a library that helps manage the document head, used to dynamically set the page title, language, and metadata.
// Import Link in order to Link to different defined routes through the React Router
// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// Import Grid, Gridcell creates visual consistency between layouts while allowing flexibility across a wide variety of designs. The grid system is implemented with the Grid Component. Grid is the whole grid and Gridcell is a portion inside of the Grid I believe. 
// Import H3, H4 are h3 and h4 tags that are already styled, creates consistency across the whole application
// Import Button is a button tag that is already styled, creates consistency across the whole application
// Import grey, grey2 are predefined colors used for styling (hex codes)
// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// Import userRoutes are the routes already laid out for when a user is logging in, signing up, on their profile, looking at their subscriptions
// Import logout function defined to interact with the API to log out the user and remove token from localStorage
// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Functional component named Profile which is receiving props
// Component
const Profile = (props) => (
  <div>
    {/* Calling the Helmet and setting the head title */}
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Setting the styling for the Grid and then the Gridcell(the page title), calling the H3 for the h3 tag and setting it to have a title of My profile at the top, setting the styling for the h3 */}
    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    {/* Setting the styling for the Gridcell (the user information), calling the H4 for the h4 tag and setting the styling and defining as the user name retrieved from props, giving a p tag to display the user email retrieved from props, calling Link to give a route to the Subscriptions which is through a Button, the route is defined from userRoutes, calling a Button tag which on click will call the props function to logout the user */}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Defining the propTypes, stating that the user needs to be an object and is required, the logout needs to be a function and is required in order for the component to be validated
// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Function that is called when the component is created, used to retrieve the user information from the store and set it as user for props
// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

// Exporting the Profile component so that it can be called and displayed, connecting to the store using the profileState to get the user information from the store, and having the ability to call the logout function which will update the store
export default connect(profileState, { logout })(Profile)
