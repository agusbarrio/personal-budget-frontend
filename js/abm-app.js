import abmRouter from './components/abm-router.js';
import api from './helpers/api.js';
import intersectionObserver from './helpers/scrollPage.js';

const d = document,
  w = window;
export default async function abmApp() {
  api.apiPage = 1;
  try {
    await d.getElementById('operations-container').remove();
  } catch (error) {}

  console.log('ABM app');
  abmRouter();
}
intersectionObserver.observe(document.querySelector('.scrollerFooter'));
