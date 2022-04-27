import operationClone from './operation.js';

const d = document;
export default function operationsListItems(arrData) {
  let $fragment = d.createDocumentFragment();
  arrData.forEach((operationData) => {
    $fragment.appendChild(operationClone(operationData));
  });
  return $fragment;
}
