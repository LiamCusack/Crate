import * as actions from './actions'

describe('actions', () => {
  // testing one existing action
  it('should have a type of AUTH/SET_USER', () => {
    const user = {
      id: 1,
      name: 'me'
    }

    const actual = actions.setUser('SET_USER', user)

    expect(actual).toEqual({
      type: 'AUTH/SET_USER',
      user
    })
  })
})


