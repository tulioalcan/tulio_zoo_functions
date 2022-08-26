const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));

module.exports = getSpeciesByIds;
// fonte de pesquisa https://desenvolvimentoparaweb.com/javascript/every-some-find-includes-javascript/