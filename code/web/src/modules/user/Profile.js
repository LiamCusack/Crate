// Features to add:
  // upload/change profile image
    // add a default image (below the user's name?)
    // button for user to upload a new image
  // create/edit profile description
    // display description on profile page below email
  // edit email and shipping address
  // view product history
  // view/change next delivery date

// Could add a button to edit profile. Opens a form with inputs to edit email, address, and add description.
// Could add a button that links to an Orders page to view product history and next delivery.


// Imports
  // Helmet is a library that helps manage changes to the document head.
  // Connect is a function that comes from Redux that allows us to connect a component to the store.
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
  // Importing styled-jsx components.
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
  // Importing paths for Links on profile page.
  // Importing logout action creator / functionality for logout button.
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
  // This is the component for the profile page.
  // Functional component that takes in props.
  // Inline styling is used.
  // Minimal content.
  // Includes a title, username, email, a button that links to the subscriptions page, and a logout button.
const Profile = (props) => (
  <div>
    {/* SEO */}
    // Using Helmet to change the page title (text in browser tab).
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    // This is the container for the top section of the profile page.
    // Inline style is added for background color.
    <Grid style={{ backgroundColor: grey }}>
      // This is the container for the H3 (main title) of the profile page.
      // Inline style is added to center the text on the page.
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        // Displays a title on the profile page.
        // H3 component sets the style for the text.
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    // This is the container for the main section of the profile page.
    // It holds an H4, paragraph, and two buttons.
    // Inline styles are added for each of these items on the profile page.
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        // Displaying and styling the user's name on the page.
        // The user's name is pulled from the user object in props.
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
        // Displaying and styling the user's email address on the page.
        // The user's email is pulled from the user object in props.
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        // Button links to the subscriptions page.
        // The button has a primary theme (different gradient).
        // The path comes from the subscriptions object within userRoutes.
        // React router links to this path on button click.
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        // Button logs a user out and directs them to the login page.
        // The button has a secondary theme (different gradient).
        // On button click, the logout action is handled.
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
  // Type checking for props. User is an object / logout is a function.
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
  // Redux state
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
