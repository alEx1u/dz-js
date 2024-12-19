const arr = [
    { id: 1, name: 'Вася', value: 1 },
    { id: 2, name: 'Петя', value: 2 },
    { id: 1, name: 'Вася', value: 3 },
    { id: 1, name: 'Вася', value: 4 },
    { id: 2, name: 'Петя', value: 5 },
    { id: 3, name: 'Петя', value: 6 }
]
const uniquePerson = new Set(arr.map(item => arr.find(el => item.id === el.id)));
console.log(uniquePerson)