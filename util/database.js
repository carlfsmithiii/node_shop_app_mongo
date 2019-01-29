const Sequelize = require("sequelize");

const sequelize = new Sequelize("schwarz-node-complete", "carl", "ffp&8bSeT", {
  dialect: "mysql",
  host: "localhost",
  operatorsAliases: false
});

module.exports = sequelize;
