import { GraphQLList as List } from 'graphql';

import Order from '../models/Order';
import OrderType from '../types/OrderType';

const orders = {
  type: new List(OrderType),
  resolve() {
    return Order.all();
  },
};

export default orders;
