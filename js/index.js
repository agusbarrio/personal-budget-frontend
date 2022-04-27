import ajax from './helpers/ajax.js';
import api from './helpers/api.js';
import operationClone from './components/operation.js';
import actualBalance from './components/actual-balance.js';
import operationsList from './components/operations-list.js';
const d = document;

d.addEventListener('DOMContentLoaded', () => {
  ajax({ url: api.OPERATIONS }, (data) => {
    //Actual balance
    d.getElementById('actual-balance').appendChild(actualBalance(data));

    //Last 10 operations
    d.getElementById('main').appendChild(
      operationsList(data.splice(-10).reverse(), 'Last operations')
    );
  });
});
