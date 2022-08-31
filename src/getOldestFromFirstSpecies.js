const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // primeiro utilizei a contatante abaixo para saber qual id está sendo trabalhando:
  const findEmploye = employees.find((employe) => employe.id === id);
  // segundo foi preciso identificar a primeira specie de aninal que o id é responsável:
  const findFirstSpecie = findEmploye.responsibleFor[0];
  // terceiro é dar o match entre especie e primeira specie do id responsável:
  const matchFirstSpecie = species.find((specie) => specie.id === findFirstSpecie);
  // quarto é acessar o array da especie que foi dado o 'match':
  const specieArray = matchFirstSpecie.residents;
  // retornar o array com as informações do animal mais velho da especie:
  return Object.values(specieArray.sort((a, b) => a.age - b.age)[specieArray.length - 1]);
}

module.exports = getOldestFromFirstSpecies;
