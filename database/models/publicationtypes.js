'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PublicationTypes extends Model {//*
    static associate(models) {
      //PublicationTypes.hasMany(models.Publications, { as: 'publications', foreignKey:'' })//*
    }
  }
  PublicationTypes.init({//*
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    description:{
        type:DataTypes.STRING,
        allowNull: false
    }
  }, {
    sequelize,
    modelName: 'PublicationTypes',//*
    tableName: 'publicationtypes',//*
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: { attributes: { exclude: ['created_at', 'updated_at'] } }
    }
  });
  return PublicationTypes;//*
};