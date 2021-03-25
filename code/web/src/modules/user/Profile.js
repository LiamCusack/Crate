// Features to add:
  // upload/change profile image
  // create/edit profile description
  // edit email and shipping address
  // view product history
  // view/change next delivery date


// Imports
  // Helmet is a library that helps manage changes to the document head.
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
  // Importing paths for Links and functionality for logout button.
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
  // This is the component for the profile page.
  // It includes a title, username, email, a button that links to the subscriptions page, and a logout button.
const Profile = (props) => (
  <div>
    {/* SEO */}
    // Using Helmet to change the page title (text in browser tab).
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    // Rendering Grid component and adding inline styles.
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        // Displays a title on the profile page.
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    // Rendering Grid component and adding inline styles for items on the profile page.
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        // Displaying the user's name on the page.
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
        // Displaying the user's email address on the page.
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        // Rendering a button that links to the subscriptions page.
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>
        // Rendering a button that logs a user out and directs them to the login page.
        // On button click, logout action is handled.
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
