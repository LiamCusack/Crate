// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } from 'graphql'

// App Imports
import { ProductType } from '../product/types'

// Order Product Type
const OrderProductType = new GraphQLObjectType({
  name: 'OrderProduct',
  description: 'Order Product Type',

  fields: () => ({
    id: { type: GraphQLInt },
    product: { type: ProductType },
    returned: { type: GraphQLBoolean},
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})

export { OrderProductType }
