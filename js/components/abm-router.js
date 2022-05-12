import ajax from '../helpers/ajax.js';
import api from '../helpers/api.js';
import operationsList from './operations-list.js';
/* import scrollPage from '../helpers/scrollPage.js'; */
import operationsListItems from './operations-list-items.js';

const d = document;
export default async function abmRouter() {
  let $main = d.getElementById('main'),
    { hash } = location;
  if (!hash || hash === '#incomes') {
    await ajax({ url: api.incomesOfPage(api.apiPage) }, (data) => {
      console.log(data);
      $main.appendChild(operationsList(data, 'Income history'));
    });
  }
  if (hash === '#expenses') {
    await ajax({ url: api.expensesOfPage(api.apiPage) }, (data) => {
      console.log(data);
      $main.appendChild(operationsList(data, 'Expense history'));
    });
  }
  if (hash === '#create') {
  }
  if (hash === '#update') {
  }
}
