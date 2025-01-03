'use strict'

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
let url = '';

request.addEventListener('load', function() {
  const data = JSON.parse(this.responseText);
  url+=data.abilities[0].ability.url;  
  const request2 = new XMLHttpRequest();
  request2.open('GET', url);
  request2.send();
  request2.addEventListener('load', function() {
    const data2 = JSON.parse(this.responseText);
    console.log(data2.effect_entries[1].effect);
  })
});


const promise = new Promise(function (resolve, reject) {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
  request.send();
  request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    resolve(data.abilities[0].ability.url);
  })
})

promise.then(response => {
  const request = new XMLHttpRequest();
  request.open('GET', response);
  request.send();
  request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    console.log(data.effect_entries[1].effect)
  })
})


