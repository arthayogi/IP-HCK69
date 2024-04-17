'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const axios = require("axios")

    const options = {
      method: "GET",
      url: "https://digi-api.com/api/v1/digimon?name=&pageSize=100"
    }

    const { data : unit } = await axios.request(options)
    // console.log(unit.content);

    const array = unit.content

    const digimons = array.map((digimon)=>{
      // console.log(digimon);
      return {
        name: digimon.name,
        image: digimon.image,
        rarity: Math.floor(Math.random() * 3) + 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    // console.log(digimons);

    await queryInterface.bulkInsert('Digimons', digimons)
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Digimons',null, {})
  }
};
