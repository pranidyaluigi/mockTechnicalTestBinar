"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Rossa",
        email: "rossa@gmail.com",
        password: "rossa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bobby",
        email: "bobby@gmail.com",
        password: "bobby",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ryan",
        email: "ryan@gmail.com",
        password: "ryan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
