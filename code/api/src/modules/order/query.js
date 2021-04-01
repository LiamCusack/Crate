// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import  OrderType  from './types'
import { getBySubscription, getAll } from './resolvers'
// how do i do this?
// import { getByUser, getAll } from './resolvers'

// Orders All
export const orders = {
  type: new GraphQLList(OrderType),
  resolve: getAll
}

// Orders by subscription
export const ordersByUser = {
  type: new GraphQLList(OrderType),
  resolve: getBySubscription
}
