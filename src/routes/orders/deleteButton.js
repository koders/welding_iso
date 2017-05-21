import PropTypes from 'prop-types';
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Orders.css';

class DeleteButton extends React.PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleDelete(this.props.id);
  }
  render() {
    return (
      <button className="btn btn-danger" onClick={this.handleClick}>
        <i className="glyphicon glyphicon-remove" />
      </button>
    );
  }
}

DeleteButton.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default withStyles(s)(DeleteButton);
