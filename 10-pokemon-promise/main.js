'use strict'


function getFetch(url, message) {
  return fetch(url)
  .then(
    response => {
      if(!response.ok) {
        throw new Error(message);
      }
      return response.json()
    }
  )
}


getFetch('https://pokeapi.co/api/v2/pokemon/ditto', 'Нету такого')
  .then(data => {
    return getFetch(data.abilities[0].ability.url, 'Что-то пошло не так')
  })
  .then(data => {
      const el = document.createElement('div');
      const elH1 = document.createElement('h1');
      elH1.innerHTML = data.effect_entries[1].effect;
      elH1.style.color = 'white';
      el.appendChild(elH1);
      document.body.appendChild(el);
  })
  .catch(error => {
    const el = document.createElement('div');
    const elH1 = document.createElement('h1');
    elH1.innerHTML = `${error.message}`;
    elH1.style.color = 'white';
    el.appendChild(elH1);
    document.body.appendChild(el);
    })