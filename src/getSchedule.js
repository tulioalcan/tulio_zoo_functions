const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Primeiro passo criar um array contendo todos os dias, o arry deve conter as cheves officehour e exhibitoin contendo o horário de funcuonamento para o officehour e as espécies em visitação para exhibition
const daysOfWeek = {
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'],
  },
};

function getSchedule(scheduleTarget) {
  // necessário criar a constante para armazernar o objeto com as informações que serão colocadas no parâmetro
  const animalDays = {};
  // Utilizar o some para saber se foi colocado como parâmetro alguma espécie defidada no arquivo data. Caso a condição seja verdadeira, cria constante animals que encontra espécie e retorna os dias da semana disponíveis para visitação.
  // se for passado um animal, deverá retornar um array com os dias em que ele está em exibição (3ms)
  if (species.some((specie) => specie.name === scheduleTarget)) {
    const animals = species.find((animal) => animal.name === scheduleTarget);
    return animals.availability;
    // se o parâmetro passado for um dia ele será igual a uma das chaves do objeto daysOFWeek, dessa forma, ele será armazenado no indice da constante criada e irá retornar logo em seguida as informações desse dia.
  } if (Object.keys(daysOfWeek).find((day) => day === scheduleTarget)) {
    animalDays[scheduleTarget] = daysOfWeek[scheduleTarget];
    return animalDays;
  }
  // caso nenhuma das informações passadas anteriormente seja dada como parâmetro, ele irá retornar todo o objeto criado daysOfWeek
  return daysOfWeek;
}

module.exports = getSchedule;
