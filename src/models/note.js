const { DataTypes, FLOAT } = require('sequelize');
const sequelize = require('../config/database');

const Note = sequelize.define('Note', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  score: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      isFloat: "Tipo inválido"
    }
  }
});

module.exports = Note;
