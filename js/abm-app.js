import abmRouter from './components/abm-router.js';
import api from './helpers/api.js';
import scrollPage from './helpers/scrollPage.js';
const d = document;
export default function abmApp() {
  api.apiPage = 1;
  if (d.getElementById('operations-container')) {
    d.getElementById('main').removeChild(
      d.getElementById('operations-container')
    );
  }

  abmRouter();
  scrollPage();
}
