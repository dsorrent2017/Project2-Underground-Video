
module.exports = function (sequelize, DataTypes) {
  return sequelize.define("Webstore", {
    store_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    manager_staff_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true
    },
    address_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    store_name: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: "VidsRUs"
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  }, {
    sequelize,
    tableName: "Webstore"
  });
};