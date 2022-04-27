// https://mi-presupuesto-personal.herokuapp.com
// http://localhost:3000

const DOMAIN = `https://mi-presupuesto-personal.herokuapp.com`,
  API = `${DOMAIN}/api`,
  OPERATIONS = `${API}/operations`,
  INCOMES = `${API}/operations/income`,
  EXPENSES = `${API}/operations/expense`,
  COUNT = `${API}/operations/count`;

const operationsOfPage = (p) => `${OPERATIONS}?page=${p}`;
const incomesOfPage = (p) => `${INCOMES}?page=${p}`;
const expensesOfPage = (p) => `${EXPENSES}?page=${p}`;

let apiPage = 1;

export default {
  DOMAIN,
  API,
  OPERATIONS,
  INCOMES,
  EXPENSES,
  COUNT,
  operationsOfPage,
  incomesOfPage,
  expensesOfPage,
  apiPage,
};
