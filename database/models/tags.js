'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      Tags.hasMany(models.PublicationsTags, { as: 'publicationstags', foreignKey: 'tag_id' })
      //Tags.hasMany(models.UsersTags, { as: 'userstags', foreignKey: '' })
    }
  }
  Tags.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    desciption: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'Tags',
    tableName: 'tags',
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  })
  return Tags
}