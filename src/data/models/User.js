/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';

const User = Model.define('User', {

  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  // username
  un: {
    type: DataType.STRING(45),
  },

  // password
  psw: {
    type: DataType.STRING(45),
  },

  // role
  t: {
    type: DataType.INTEGER,
    defaultValue: 1,
  },

}, {

  instanceMethods: {
    verifyPassword(password) {
      return password === this.psw;
    },
  },

});

export default User;
