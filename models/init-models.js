var DataTypes = require("sequelize").DataTypes;
var _task = require("./task");

function initModels(sequelize) {
  var task = _task(sequelize, DataTypes);

  return {
    task,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
