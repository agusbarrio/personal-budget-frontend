import ajax from '../helpers/ajax.js';
import api from '../helpers/api.js';
import operationsList from './operations-list.js';
import createForm from './create-form.js';

const d = document;
export default async function abmRouter() {
  let $abmContent = d.getElementById('abm-content'),
    { hash } = location;
  if (!hash || hash === '#incomes') {
    await ajax({ url: api.incomesOfPage(api.apiPage) }, (data) => {
      console.log(data);
      $abmContent.appendChild(operationsList(data, 'Income history'));
    });
  }
  if (hash === '#expenses') {
    await ajax({ url: api.expensesOfPage(api.apiPage) }, (data) => {
      console.log(data);
      $abmContent.appendChild(operationsList(data, 'Expense history'));
    });
  }
  if (hash === '#create') {
    $abmContent.appendChild(createForm('create-form-template'));
  }
  if (hash === '#update') {
  }
}
