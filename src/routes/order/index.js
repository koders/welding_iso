import React from 'react';
import Order from './Order';
import Layout from '../../components/Layout';

export default {

  path: '/orders/:id',

  async action({ fetch, params }) {
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: `{order(id: "${params.id}"){id, data}}`,
      }),
    });
    const { data } = await resp.json();
    if (!data || !data.order) throw new Error('Failed to load the order feed.');
    return {
      title: 'React Starter Kit',
      component: <Layout><Order order={data.order} /></Layout>,
    };
  },

};
