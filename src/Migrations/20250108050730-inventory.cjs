'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('Inventory', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      warehouse_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'warehouses',
          field:'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      product_id:  {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Products',
          field: 'id'
        },
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('Inventory');
  }
};
