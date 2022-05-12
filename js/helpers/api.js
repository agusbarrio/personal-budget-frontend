// https://mi-presupuesto-personal.herokuapp.com
// http://localhost:3000

const DOMAIN = `http://localhost:3000`,
  API = `${DOMAIN}/api`,
  OPERATIONS = `${API}/operations`,
  INCOMES = `${API}/operations/income`,
  EXPENSES = `${API}/operations/expense`,
  COUNT = `${API}/operations/count`,
  INCOMES_COUNT = `${API}/operations/income/count`,
  EXPENSES_COUNT = `${API}/operations/expense/count`;

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
  INCOMES_COUNT,
  EXPENSES_COUNT,
  operationsOfPage,
  incomesOfPage,
  expensesOfPage,
  apiPage,
};
