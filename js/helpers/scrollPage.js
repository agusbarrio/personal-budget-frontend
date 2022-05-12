import api from './api.js';
import ajax from './ajax.js';
import operationsListItems from '../components/operations-list-items.js';
const w = window,
  d = document;

let $main = d.getElementById('main');
const addItems = async (apiCountUrl, apiDataUrl) => {
  await ajax({ url: apiCountUrl }, async (count) => {
    let totalPages = Math.ceil(count / 10);
    if (api.apiPage > 1 && api.apiPage <= totalPages) {
      await ajax({ url: apiDataUrl }, (data) => {
        console.log(data);
        $main
          .querySelector('#operations-container ul')
          .appendChild(operationsListItems(data));
      });
    }
    if (api.apiPage <= totalPages) {
      api.apiPage++;
    } else {
      return;
    }
  });
};

const intersectionObserver = new IntersectionObserver(async function (entries) {
  // If intersectionRatio is 0, the target is out of view
  // and we do not need to do anything.

  if (entries[0].intersectionRatio <= 0) {
    return;
  } else {
    let { hash } = location;

    if (!hash || hash === '#incomes') {
      await addItems(api.INCOMES_COUNT, api.incomesOfPage(api.apiPage));
    }
    if (hash === '#expenses') {
      await addItems(api.EXPENSES_COUNT, api.expensesOfPage(api.apiPage));
    }
  }
});

export default intersectionObserver;
