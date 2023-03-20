'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class States extends Model {//*
    static associate(models) {
      States.belongsTo(models.Countris, { as: 'countris', foreignKey:'country_id' })//*
    }
  }
  States.init({//*
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false
    },
    country_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    } 
  }, {
    sequelize,
    modelName: 'States',//*
    tableName: 'states',//*
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: { attributes: { exclude: ['created_at', 'updated_at'] } }
    }
  });
  return States;//*
};