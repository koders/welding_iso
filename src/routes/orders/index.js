import React from 'react';
import Orders from './Orders';
import Layout from '../../components/Layout';

export default {

  path: '/orders',

  async action({ fetch }) {
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{orders{id, t, data, ct, mt, createdBy, type}}',
      }),
    });
    const { data } = await resp.json();
    if (!data || !data.orders) throw new Error('Failed to load the orders feed.');
    return {
      title: 'React Starter Kit',
      component: <Layout><Orders orders={data.orders} fetch={fetch} /></Layout>,
    };
  },

};
