'use strict';

// ////// 10
const People = (sequelize, DataTypes) => sequelize.define('People', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  }
});

module.exports = People;
// go back to models/index.js for /// 11