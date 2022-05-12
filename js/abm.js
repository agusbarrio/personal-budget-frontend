import abmApp from './abm-app.js';
import api from './helpers/api.js';

const d = document,
  w = window;

d.addEventListener('DOMContentLoaded', abmApp);
w.addEventListener('hashchange', () => {
  api.apiPage = 1;
  abmApp();
});
