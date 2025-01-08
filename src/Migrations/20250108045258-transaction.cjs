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
    await queryInterface.createTable('Transactions',{
      id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
      },
      warehouse_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'warehouses',
          key: 'id'
        }
      },
      product_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Products',
          field:'id'
        }
      }, 
      
      transaction_type:{
        type: Sequelize.STRING,
        allowNull:true
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      user_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Users',
          field: 'id'
        }
      }, 
      target_warehouse_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'warehouses',
          field:'id'
        }
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
    await queryInterface.dropTable('Transactions');
  }
};
