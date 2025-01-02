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
      await queryInterface.createTable('users', {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true,
              allowNull: false,
          },
          google_id: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          name: {
              type: Sequelize.STRING,
              allowNull: false,
          },
          email: {
              type: Sequelize.STRING,
              allowNull: false,
              unique: true,
          },
          picture: {
            type: Sequelize.STRING,
            allowNull: true,
          },
          password:{
            type:Sequelize.STRING,
            allowNull: true,
          }
          ,
          createdAt: {
              allowNull: true,
              type: Sequelize.DATE,
          },
          updatedAt: {
              allowNull: true,
              type: Sequelize.DATE,
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
    await queryInterface.dropTable('users');
  }
};