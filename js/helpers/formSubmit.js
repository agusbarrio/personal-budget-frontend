import ajax from './ajax.js';
import api from './api.js';
let $abmContent = document.getElementById('abm-content');
export default async function formSubmit(e) {
  e.preventDefault();
  if (e.target.matches('#create-form')) {
    let data = {
      _type: e.target._type.value,
      amount: e.target.amount.value,
      _date: e.target._date.value,
      concept: e.target.concept.value,
    };

    console.log(data);
    await fetch(api.OPERATIONS, {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(data),
    })
      .then((res) => (res.ok ? res.text() : Promise.reject(res)))
      .then((text) => {
        console.log(text);
        $abmContent.innerHTML = `<h3>Successfully saved</h3>`;
      })
      .catch((err) => window.alert('Invalid operation'));
  }
  if (e.target.matches('#update-form')) {
    let data = {
      id: e.target.id.value,
      amount: e.target.amount.value,
      _date: e.target._date.value,
      concept: e.target.concept.value,
    };

    console.log(data);
    await fetch(`${api.OPERATIONS}/${data.id}`, {
      method: 'PUT',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        amount: data.amount,
        _date: data._date,
        concept: data.concept,
      }),
    })
      .then((res) => (res.ok ? res.text() : Promise.reject(res)))
      .then((text) => {
        console.log(text);
        $abmContent.innerHTML = `<h3>Successfully saved</h3>`;
      })
      .catch((err) => window.alert('Invalid operation'));
  }
  if (e.target.matches('#delete-form')) {
    let id = e.target.dataset.id;
    await fetch(`${api.OPERATIONS}/${id}`, {
      method: 'DELETE',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify({
        id,
      }),
    })
      .then((res) => (res.ok ? res.text() : Promise.reject(res)))
      .then((text) => {
        console.log(text);
        $abmContent.querySelector(`li[data-id="${id}"]`).remove();
      })
      .catch((err) => {
        console.log(err);
        window.alert('Deletion failed');
      });
  }
}
