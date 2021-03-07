"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      color_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "colors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      subcategorie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "subcategories", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      price: {
        type: Sequelize.DECIMAL(8, 2),
        allowNull: false,
      },
      delivery: {
        type: Sequelize.ENUM("Em Mãos", "Envio"),
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
