import DataType from 'sequelize';
import Model from '../sequelize';

const Order = Model.define('Order', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  t: {
    type: DataType.INTEGER,
  },

  data: {
    type: DataType.TEXT,
  },

  ct: {
    type: DataType.DATE,
  },

  mt: {
    type: DataType.DATE,
  },

  createdBy: {
    type: DataType.STRING(255),
  },

  type: {
    type: DataType.INTEGER,
  },

  createdAtMilliseconds: {
    type: DataType.BIGINT,
  },

  createdAt: {
    type: DataType.DATE,
  },

  updatedAt: {
    type: DataType.DATE,
  },

},

);

export default Order;
