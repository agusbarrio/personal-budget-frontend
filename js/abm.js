import abmApp from './abm-app.js';
import api from './helpers/api.js';
import formSubmit from './helpers/formSubmit.js';

const d = document,
  w = window;

d.addEventListener('DOMContentLoaded', abmApp);
w.addEventListener('hashchange', () => {
  api.apiPage = 1;
  abmApp();
});
d.addEventListener('submit', (e) => {
  formSubmit(e);
});
