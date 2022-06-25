"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("data", [
      {
        name: "Sony",
        price: 15890,
        imageurl:
          "https://www.sony.fr/image/31f9ce4e17ec8e22fe04a067c6a9833b?fmt=pjpeg&wid=660&bgcolor=F1F5F9&bgc=F1F5F9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samsung",
        price: 60789,
        imageurl:
          "https://images.samsung.com/is/image/samsung/p6pim/id/2202/gallery/id-galaxy-a53-5g-a536-sm-a536elbgxid-531435843?$650_519_PNG$",
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
    await queryInterface.bulkDelete("data", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
