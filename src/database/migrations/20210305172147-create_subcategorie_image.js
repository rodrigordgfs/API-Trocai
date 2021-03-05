'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subcategorieimages', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      subcategorie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "subcategories", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sm: {
        type: Sequelize.STRING,
        defaultValue: true
      },
      md: {
        type: Sequelize.STRING,
        defaultValue: true
      },
      lg: {
        type: Sequelize.STRING,
        defaultValue: true
      },
      xl: {
        type: Sequelize.STRING,
        defaultValue: true
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
    await queryInterface.dropTable('subcategorieimage');
  }
};
