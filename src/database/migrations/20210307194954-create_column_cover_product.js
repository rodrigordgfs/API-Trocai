"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("products", "cover_id", {
      after: "subcategorie_id",
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "productimages", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("products", "cover_id");
  },
};
