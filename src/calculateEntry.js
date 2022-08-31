const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageGroup = {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  };
  return ageGroup;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants.length === undefined) {
    return 0;
  }
  const childPrice = countEntrants(entrants).child * 20.99;
  const adultPrice = countEntrants(entrants).adult * 49.99;
  const seniorPrice = countEntrants(entrants).senior * 24.99;
  const sum = seniorPrice + adultPrice + childPrice;
  return sum;
}

module.exports = { calculateEntry, countEntrants };
