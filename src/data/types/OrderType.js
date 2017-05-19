import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLFloat as FloatType,
  GraphQLNonNull as NonNull,
} from 'graphql';
import GraphQLDate from 'graphql-date';

const OrderType = new ObjectType({
  name: 'Orders',
  fields: {
    id: { type: new NonNull(ID) },
    t: { type: IntType },
    data: { type: StringType },
    ct: { type: GraphQLDate },
    mt: { type: GraphQLDate },
    createdBy: { type: StringType },
    type: { type: IntType },
    createdAtMilliseconds: { type: FloatType },
    createdAt: { type: GraphQLDate },
    updatedAt: { type: GraphQLDate },
  },
});

export default OrderType;
