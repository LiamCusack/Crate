import { rootReducer } from './store'

describe('rootReducer', () => {
  it('should have passed state', () => {
    const passedState = {
      common: 'common',
      user: 'user'
    }

    const actual = rootReducer(passedState, 'AUTH/SET_USER')
    const keys = Object.keys(actual)

    expect(keys).toEqual(['common', 'user', 'products', 'product', 'productsRelated',
      'subscriptions', 'subscriptionsByUser', 'subscription', 'crates', 'crate'])
  })

  it('should empty state when resetting', () => {
    const passedState = {}

    const actual = rootReducer(passedState, 'RESET')

    expect(actual.crates.list).toEqual([])
    expect(actual.subscription.item).toEqual({})
  })
})

