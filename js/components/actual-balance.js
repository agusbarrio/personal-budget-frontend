const d = document;
export default function actualBalance(operations) {
  let $balance = d.createElement('p'),
    balance = 0;

  operations.forEach((operation) => {
    if (operation._type === 'income') balance += operation.amount;
    if (operation._type === 'expense') balance -= operation.amount;
  });

  if (balance >= 0) {
    $balance.classList.add('text-primary');
  } else {
    $balance.classList.add('text-danger');
  }

  $balance.textContent = `$ ${balance.toFixed(2)}`;
  return $balance;
}
