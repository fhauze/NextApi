'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [{
       name: 'John Doe',
       email: 'jhon@ini.com',
       createdAt: new Date(),
       updatedAt: new Date(),
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:20250101060518-demo-user.js
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('users', null, {});
  }

};
