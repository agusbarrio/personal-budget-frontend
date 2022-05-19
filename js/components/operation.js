const d = document;
export default function operation(data) {
  const { id, amount, _type, concept, _date } = data,
    $template = d.getElementById('operation-template');

  let $clone = d.importNode($template.content, true),
    $c_amount = $clone.getElementById('amount'),
    $c_type = $clone.getElementById('_type'),
    $c_concept = $clone.getElementById('concept'),
    $c_date = $clone.getElementById('date');
  if ($clone.querySelector('form')) {
    $clone.querySelector('form').dataset.id = id;
  }

  $clone.querySelector('li').dataset.id = id;
  /*$clone.querySelector('li').dataset._type = _type;
  $clone.querySelector('li').dataset.concept = concept;
  $clone.querySelector('li').dataset._date = _date; */
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
  if ($clone.querySelector('a[href="#update"')) {
    $clone.querySelector('a[href="#update"').onclick = async (e) => {
      e.preventDefault();
      await localStorage.setItem('id', id);
      await localStorage.setItem('amount', amount);
      await localStorage.setItem('concept', concept);
      await localStorage.setItem('_date', _date);
      window.location.hash = '#update';
    };
  }

  return $clone;
}
