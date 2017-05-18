import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Link from '../../components/Link';
import history from '../../history';
import s from './Orders.css';

class Orders extends React.Component {
  getStatusName(status) {
    let statusName = 'Unknown';
    switch (status) {
      case 0:
        statusName = 'New';
        break;
      case 1:
        statusName = 'In Production';
        break;
      case 2:
        statusName = 'Completed';
        break;
      case 3:
        statusName = 'Deleted';
        break;
      default:
        statusName = 'Unknown';
    }
    return statusName;
  }
  getStatusHtml(status) {
    const statusName = this.getStatusName(status);
    let className = 'default';
    switch (status) {
      case 0:
        className = 'info';
        break;
      case 1:
        className = 'warning';
        break;
      case 2:
        className = 'success';
        break;
      case 3:
        className = 'danger';
        break;
      default:
        className = 'default';
    }
    const html = <span className={`label label-${className}`}>{statusName}</span>;
    return html;
  }
  async handleCreate(event) {
    event.preventDefault();
    const fetch = this.props.fetch;
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: 'mutation createOrder{createOrder(data: "{}"){id}}',
      }),
    });
    const { data } = await resp.json();
    if (!data || !data.createOrder) throw new Error('Failed to create order.');
    history.push(`/orders/${data.createOrder.id}`);
    // this.context.router.push(`/orders/${data.createOrder.id}`);
  }
  render() {
    const { orders } = this.props;
    const someOrders = orders.slice(0, 100);
    return (
      <div className="orders">
        <button onClick={this.handleCreate.bind(this)}>New Order</button>
        <table className="table">
          <thead>
            <tr>
              <td>Status</td>
              <td>Company</td>
              <td>Order Number</td>
              <td>Order date</td>
              <td>Delivery date</td>
              <td>Total amount</td>
            </tr>
          </thead>
          <tbody>
            {
              someOrders.map((order) => {
                const status = order.t;
                const data = JSON.parse(order.data);
                return (
                  <tr className="orderRow" key={order.id} data-status={this.getStatusName(status)}>
                    <td>{this.getStatusHtml(status)}</td>
                    <td>{data.company}</td>
                    <td className="orderNumber" ><Link to={`/orders/${order.id}`}>{data.ocnr || order.id}</Link></td>
                    <td>{data.odate}</td>
                    <td>{data.ddate}</td>
                    <td>{data.tot}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

Orders.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  })).isRequired,
};

export default withStyles(s)(Orders);
