// Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H4 } from '../../ui/typography'
import { grey2 } from '../../ui/common/colors'

// App Imports
import { logout } from './api/actions'
import UserMenu from './common/Menu'
import Button from '../../ui/button'

// Component
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  editProfileDetails = () => {
    this.setState({
      isEditing: true
    })
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>My Profile - Crate</title>
        </Helmet>

        {/* Top menu bar */}
        <UserMenu />
        <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>
            {!this.state.isEditing &&
              <>
                <img src={this.props.user.details.image} alt='profile-pic' style={{maxWidth: 250, marginBottom: '0.5em'}}/>
                <p style={{ color: grey2, marginBottom: '2em' }}>{this.props.user.details.email}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>About Me: {this.props.user.details.description}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>Shipping Address: {this.props.user.details.shippingAddress}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>Next Delivery:</p>
                <Button theme='primary' onClick={this.editProfileDetails}>Edit Profile</Button>
              </>
            }

          </GridCell>
        </Grid>
      </div>
      )
    }
}

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
