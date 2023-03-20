'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {//*
    static associate(models) {
      Cities.belongsTo(models.States, { as: 'states', foreignKey:'state_id' })//*
      //Cities.belongsTo(models.Publications, { as: 'publications', foreignKey:'' })
    }
  }
  Cities.init({//*
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false
    },
    state_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'Cities',//*
    tableName: 'cities',//*
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: { attributes: { exclude: ['created_at', 'updated_at'] } }
    }
  });
  return Cities;//*
};