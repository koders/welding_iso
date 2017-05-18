import { GraphQLString } from 'graphql';

import Order from '../models/Order';
import OrderType from '../types/OrderType';

const order = {
  type: OrderType,
  args: {
    id: { type: GraphQLString },
  },
  resolve(data, args) {
    return Order.findOne({ where: { id: args.id } });
  },
};

export default order;
