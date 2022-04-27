import abmApp from './abm-app.js';

const d = document,
  w = window;

d.addEventListener('DOMContentLoaded', abmApp);
w.addEventListener('hashchange', () => {
  abmApp();
});
