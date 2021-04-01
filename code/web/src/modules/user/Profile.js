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
import { upload } from '../common/api/actions'

// Component
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      email: this.props.user.details.email,
      description: this.props.user.details.description,
      shippingAddress: this.props.user.details.shippingAddress
    }
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  onChange = (event) => {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onUpload = (event) => {
    let profileImage = new FormData()
    profileImage.append('imageFile', event.target.files[0])

    this.props.upload(profileImage)
      .then(response => {console.log('response', response)})
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
                <img src={this.state.image} alt='profile-pic' style={{maxWidth: 250, marginBottom: '0.5em'}}/>
                <p style={{ color: grey2, marginBottom: '2em' }}>{this.state.email}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>About Me: {this.state.description}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>Shipping Address: {this.state.shippingAddress}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>Next Delivery:</p>
                <Button theme='primary' onClick={this.toggleEdit}>Edit Profile</Button>
              </>
            }
            {this.state.isEditing &&
              <>
                <label>Image:
                  <input
                    type='file'
                    name='image'
                    accept='image/*'
                    onChange={this.onUpload}
                  />
                </label>
                <label>Email:
                <input
                  type='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
                </label>
                <label>About Me:
                <input
                  type='text'
                  name='description'
                  value={this.state.description}
                  onChange={this.onChange}
                />
                </label>
                <label>Shipping Address:
                <input
                  type='text'
                  name='shippingAddress'
                  value={this.state.shippingAddress}
                  onChange={this.onChange}
                />
                </label>
                <Button theme='primary' onClick={this.toggleEdit}>Submit</Button>
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

export default connect(profileState, { logout, upload })(Profile)
