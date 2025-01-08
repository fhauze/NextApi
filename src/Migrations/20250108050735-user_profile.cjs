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
    await queryInterface.createTable('UserProfile', {
      id:{type:Sequelize.INTEGER, allowNull:false, autoIncrement:true, primaryKey:true},
      first_name:{type: Sequelize.STRING},
      last_name:{type: Sequelize.STRING},
      phone:{type: Sequelize.STRING, allowNull:true},
      address:{type: Sequelize.STRING, allowNull:true},
      date_of_birth:{type: Sequelize.DATE},
      gender:{type: Sequelize.STRING, allowNull:true},
      avatar_url:{type:Sequelize.STRING},
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
    await queryInterface.dropTable('UserProfile');
  }
};
