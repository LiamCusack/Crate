// confident the majority of our work will go here

// Imports
// imports from dependencies
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
// imports from other UI elements, components, styling
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
// imports from App, routes and logout action
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
// beginning of actual component, takes props
const Profile = (props) => (
  <div>
    {/* SEO */}
    {/* Adjusts text in tab of app through use of React-Helmet */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    {/* text, in-line styling, uses Grid, GridCell, H3, for My profile bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>

    {/* render info */}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        {/* render user name */}
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>

        {/* render email */}
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>

        {/* render subscription button */}
        <Link to={userRoutes.subscriptions.path}>
          <Button theme="primary">Subscriptions</Button>
        </Link>

        {/* render logout button */}
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
// check prop typing, ensure is required
// user comes from redux
// logout comes from logout action
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
// gives state from redux to component, the props passed, just user
// logout comes from actions
function profileState(state) {
  return {
    user: state.user
  }
}

// export Profile, give state.user from profileState
// give logout from logout action
// all to Profile as props using connect
export default connect(profileState, { logout })(Profile)
