// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql' // can also use GraphQLId

import { UserType } from '../user/types'
import CrateType from  '../crate/types'
import { ProductType } from  '../product/types'
import { OrderProductType } from '../orderProduct/types'

// Order type
const OrderType = new GraphQLObjectType({
  name: 'order',
  description: 'Order type',

  fields: () => ({
    id: { type: GraphQLInt },
    user: { type: UserType },
    crate: { type: CrateType },
    orderProducts: { type: new GraphQLList(OrderProductType) },
    deliveryDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export default OrderType 
