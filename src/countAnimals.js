const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const totalAnimalforSpecie = species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
    return totalAnimalforSpecie;
  }
  const nameSpecie = species.find((specie) => animal.specie === specie.name);
  const residentsSpecie = nameSpecie.residents;
  const sumResidentsSpecie = residentsSpecie.length;
  if (animal.sex && animal.specie) {
    const sexAnimal = residentsSpecie.filter(({ sex }) => sex === animal.sex);
    const sumForSex = sexAnimal.length;
    return sumForSex;
  }
  return sumResidentsSpecie;
}

module.exports = countAnimals;
