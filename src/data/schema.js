/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import news from './queries/news';
import orders from './queries/orders';
import order from './queries/order';

import createOrder from './mutations/order';
import deleteOrder from './mutations/deleteOrder';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      news,
      orders,
      order,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      createOrder,
      deleteOrder,
    },
  }),
});

export default schema;
