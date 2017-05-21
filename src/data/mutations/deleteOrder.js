import { GraphQLString } from 'graphql';

import Order from '../models/Order';
import OrderType from '../types/OrderType';

const deleteOrder = {
  type: OrderType,
  args: {
    id: { type: GraphQLString },
  },
  resolve(data, args) {
    return Order.destroy({ where: { id: args.id } });
  },
};

export default deleteOrder;
