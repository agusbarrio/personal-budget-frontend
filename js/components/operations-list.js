import operation from './operation.js';
const d = document;
export default function operationsList(arrData, listTitle) {
  const $template = d.getElementById('operations-list');

  let $clone = d.importNode($template.content, true);

  arrData.forEach((dataOperation) => {
    $clone.querySelector('ul').appendChild(operation(dataOperation));
  });
  $clone.getElementById('list-title').textContent = listTitle;
  return $clone;
}
