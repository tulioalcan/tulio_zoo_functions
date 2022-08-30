const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  if (isManager(managerId)) {
    const employeeByManager = data.employees
      .filter((employee) => employee.managers.includes(managerId));
    return employeeByManager.map((emp) => `${emp.firstName} ${emp.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
