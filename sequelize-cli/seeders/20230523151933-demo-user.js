"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */

		await queryInterface.bulkInsert(
			"Users",
			[
				{
					firstName: "Hung 1",
					lastName: "Tran 1",
					email: "hungtran@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					firstName: "Hung 2",
					lastName: "Tran 2",
					email: "hungtran@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					firstName: "Hung 3",
					lastName: "Tran 3",
					email: "hungtran@gmail.com",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
