import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Order.css';

class Order extends React.PureComponent {
  render() {
    const { order } = this.props;

    return (
      <div>Single order goes here id: {order.id}</div>
    );
  }
}

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(s)(Order);
