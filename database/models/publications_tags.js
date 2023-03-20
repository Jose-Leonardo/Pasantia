'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Publications_Tags extends Model {
    static associate(models) {
        Publications_Tags.belongsTo(models.Tags, { as: 'tags', foreignKey: 'tag_id' })
        //Publications_Tags.belongsTo(models.Publications, { as: 'publications', foreignKey: 'publication_id' })
    }
  }
  Publications_Tags.init({
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    publication_id: {
      type: DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Publications_Tags',
    tableName: 'publications_tags',
    underscored: true,
    timestamps: true,
    scopes: {
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  })
  return Publications_Tags
}