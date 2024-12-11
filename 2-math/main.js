//Функция по заданию с режимами 
function func(mode) {
    function dice(num) {
        return Math.floor(Math.random() * num + 1);
    }
    const modes = new Map()
            .set('D2', dice(2))
            .set('D4', dice(4))
            .set('D6', dice(6))
            .set('D8', dice(8))
            .set('D10', dice(10))
            .set('D12', dice(12))
            .set('D16', dice(16))
            .set('D20', dice(20));
    return modes.get(mode);    
}
// console.log(func('D2'));
// console.log(func('D4'));
// console.log(func('D6'));
// console.log(func('D8'));
// console.log(func('D10'));
// console.log(func('D12'));
// console.log(func('D16'));
// console.log(func('D20'));



//Функция для любого 'режима'
function easyDice(mode) {
    return Math.floor(Math.random() * Number(mode.split('').slice(1).join('')) + 1)
}
console.log(easyDice('D3'));
