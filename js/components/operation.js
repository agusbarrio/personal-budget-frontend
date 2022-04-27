const d = document;
export default function operation(data) {
  const { id, amount, _type, concept, _date } = data,
    $template = d.getElementById('operation-template');

  let $clone = d.importNode($template.content, true),
    $c_amount = $clone.getElementById('amount'),
    $c_type = $clone.getElementById('_type'),
    $c_concept = $clone.getElementById('concept'),
    $c_date = $clone.getElementById('date');

  $clone.querySelector('li').dataset.id = id;
  $clone.querySelector('li').dataset.amount = amount;
  $clone.querySelector('li').dataset._type = _type;
  $clone.querySelector('li').dataset.concept = concept;
  $clone.querySelector('li').dataset._date = _date;
  $c_type.textContent = _type;
  if (_type === 'income') {
    $c_amount.textContent = `$ ${amount}`;
    $c_amount.classList.add('text-success');
  }
  if (_type === 'expense') {
    $c_amount.textContent = `$ - ${amount}`;
    $c_amount.classList.add('text-danger');
  }

  $c_concept.textContent = concept;
  $c_date.textContent = _date;
  return $clone;
}
