const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animalSpecies = species.find((specie) => specie.name === animal);
  return animalSpecies.residents.every((specieAge) => specieAge.age >= age);
};

module.exports = getAnimalsOlderThan;
