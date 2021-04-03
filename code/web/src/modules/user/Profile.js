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
import Input from '../../ui/input/Input'
import File from '../../ui/input/File'
import { upload } from '../common/api/actions'
import { updateProfile } from './api/actions'

// Component
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userDetails: {
        id: 0,
        email: this.props.user.details.email,
        description: this.props.user.details.description,
        shippingAddress: this.props.user.details.shippingAddress,
        image: ''
      },
      isEditing: false,
    }
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  onChange = (event) => {
    event.preventDefault()
    let userDetails = this.state.userDetails
    userDetails[event.target.name] = event.target.value
    this.setState({
      userDetails
    })
  }

  onUpload = (event) => {
    let profileImage = new FormData()
    profileImage.append('imageFile', event.target.files[0])

    this.props.upload(profileImage)
      .then(response => {
        if (response.status === 200) {
          console.log('image response', response)
          let userDetails = this.state.userDetails
          userDetails.image = `/images/uploads/${ response.data.file }`

          this.setState({
           userDetails
          })
        }
      })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.toggleEdit()

    this.props.updateProfile(this.state.userDetails)
      .then(response => {
          console.log('update profile response', response)
      })
      .catch(error => {console.log('profile error', error)})
  }

  render() {
    console.log(this.state)
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
                <p style={{ color: grey2, marginBottom: '2em' }}>{this.state.userDetails.email}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>About Me: {this.state.userDetails.description || "Edit to add some personal info!"}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>Shipping Address: {this.state.userDetails.shippingAddress || "Edit to add your shipping address!"}</p>
                <p style={{ color: grey2, marginBottom: '2em' }}>Next Delivery:</p>
                <Button theme='primary' onClick={this.toggleEdit}>Edit Profile</Button>
              </>
            }
            {this.state.isEditing &&
              <form >
                <label>Image:
                  <Input
                    type='file'
                    name='image'
                    accept='image/*'
                    onChange={this.onUpload}
                    style={{ margin: '1em' }}/>
                </label>
                <label>Email:
                <Input
                  type='email'
                  name='email'
                  value={this.state.userDetails.email}
                  onChange={this.onChange}
                  style={{ margin: '1em' }}
                />
                </label>
                <label>About Me:
                <Input
                  type='text'
                  name='description'
                  value={this.state.userDetails.description}
                  onChange={this.onChange}
                  style={{ margin: '1em' }}
                />
                </label>
                <label>Shipping Address:
                <Input
                  type='text'
                  name='shippingAddress'
                  value={this.state.userDetails.shippingAddress}
                  onChange={this.onChange}
                  style={{ margin: '1em' }}
                />
                </label>
                <Button type="submit" theme='primary' onClick={(event)=> this.onSubmit(event)}>Submit</Button>
              </form>
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
  logout: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout, upload, updateProfile })(Profile)
