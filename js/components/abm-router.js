import ajax from '../helpers/ajax.js';
import api from '../helpers/api.js';
import operationsList from './operations-list.js';
import scrollPage from '../helpers/scrollPage.js';
import operationsListItems from './operations-list-items.js';

const d = document;
export default function abmRouter() {
  let $main = d.getElementById('main'),
    { hash } = location;
  console.log(hash);
  if (!hash || hash === '#incomes') {
    ajax({ url: api.incomesOfPage(1) }, (data) => {
      $main.appendChild(operationsList(data, 'Incomes'));
    });
  } else if (hash === '#expenses') {
    ajax({ url: api.expensesOfPage(1) }, (data) => {
      $main.appendChild(operationsList(data, 'Expenses'));
    });
  }
  if (hash === '#create') {
  }
  if (hash === '#update') {
  }
}
