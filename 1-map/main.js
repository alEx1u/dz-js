let arr = [
    {id: 1, name: 'Vasya'},
    {id: 2, name: 'Nastya'},
    {id: 3, name: 'Anya'},
    {id: 1, name: 'Masha'},
    {id: 3, name: 'Misha'},
    {id: 4, name: 'Grisha'}
]
let set = new Set() 
console.log(arr.filter(el => set.size < set.add(el.id).size));