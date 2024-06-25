const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Doc = sequelize.define('Doc', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Doc;
