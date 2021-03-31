const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "task",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      created_in: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.fn("now"),
      },
    },
    {
      sequelize,
      tableName: "task",
      schema: "todoapp",
      timestamps: false,
      indexes: [
        {
          name: "task_pkey",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
