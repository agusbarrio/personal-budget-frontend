import api from './api.js';
import ajax from './ajax.js';
import operationsListItems from '../components/operations-list-items.js';
const w = window,
  d = document;
export default function scrollPage() {
  w.addEventListener('scroll', () => {
    let { scrollTop, clientHeight, scrollHeight } = d.documentElement;
    let { hash } = w.location;
    if (scrollTop + clientHeight >= scrollHeight) {
      ajax({ url: api.COUNT }, (count) => {
        if (api.apiPage >= count / 10) {
          return false;
        } else {
          api.apiPage++;
          if (!hash || hash === '#incomes') {
            ajax({ url: api.incomesOfPage(api.apiPage) }, (data) => {
              let $operationsContainer = d.getElementById(
                'operations-container'
              );
              $operationsContainer
                .querySelector('ul')
                .appendChild(operationsListItems(data));
              console.log(data);
            });
          }
          if (hash === '#expenses') {
            ajax({ url: api.expensesOfPage(api.apiPage) }, (data) => {
              let $operationsContainer = d.getElementById(
                'operations-container'
              );
              $operationsContainer
                .querySelector('ul')
                .appendChild(operationsListItems(data));
              console.log(data);
            });
          }
        }
      });
    }
  });
}
