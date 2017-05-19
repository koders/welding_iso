import React from 'react';
import Orders from './Orders';
import Layout from '../../components/Layout';

export default {

  path: '/orders',

  async action({ fetch }) {
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{orders{id, t, data, ct, mt, createdBy, type, createdAtMilliseconds}}',
      }),
    });
    const { data } = await resp.json();
    const orders = data.orders;
    orders.forEach((order) => {
      order.data = JSON.parse(order.data);
    });
    data.orders.sort((a, b) => (b.createdAtMilliseconds * 1) - (a.createdAtMilliseconds * 1));
    if (!data || !data.orders) throw new Error('Failed to load the orders feed.');
    return {
      title: 'React Starter Kit',
      component: <Layout><Orders orders={orders} fetch={fetch} /></Layout>,
    };
  },

};
