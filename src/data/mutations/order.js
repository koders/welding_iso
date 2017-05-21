import { GraphQLString } from 'graphql';

import Order from '../models/Order';
import OrderType from '../types/OrderType';

const createOrder = {
  type: OrderType,
  args: {
    data: { type: GraphQLString },
  },
  resolve(data, args) {
    return Order.create({ data: args.data, createdAtMilliseconds: Date.now() });
  },
};

export default createOrder;
