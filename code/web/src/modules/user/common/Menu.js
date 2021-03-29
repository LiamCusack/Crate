// Imports
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// UI Imports
import { Grid, GridCell } from '../../../ui/grid'
import { black, grey } from "../../../ui/common/colors"
import Button from '../../../ui/button'

// App Imports
import userRoutes from '../../../setup/routes/user'
import Menu from '../../common/header/Menu'
import MenuItem from '../../common/header/MenuItem'
import { logout } from '../api/actions'

// Component
const UserMenu = (props) => (
  <Grid style={{ backgroundColor: grey }}>
    <GridCell style={{ padding: '2em', textAlign: 'center' }}>
      <Menu>
        <MenuItem to={userRoutes.profile.path} type="primary" style={{ color: black }}>My Info</MenuItem>

        <MenuItem to={userRoutes.orders.path} type="primary" style={{ color: black }}>My Orders</MenuItem>

        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </Menu>
    </GridCell>
  </Grid>
)

// Component Properties
UserMenu.propTypes = {
    logout: PropTypes.func.isRequired
}

// Component State
function userMenuState(state) {
    return {
      user: state.user
    }
  }

export default connect(userMenuState, { logout })(UserMenu)