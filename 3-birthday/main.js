function validCheckDream(date) {
    return (((new Date().getTime() - new Date(date).getTime()) / (1000 * 3600 * 24 * 365)) >= 14);
}
console.log(validCheckDream('2010-12-15'));
/// без 366 дневных годов было бы славно...

function validCheck(date) {
    const rn = new Date();
    const bt = new Date(date);
    if ((rn.getFullYear() - bt.getFullYear()) > 14) return true;
    if ((rn.getFullYear() - bt.getFullYear()) < 14) return false;
    return (rn.getMonth() * 30 + rn.getDate()) >= (bt.getMonth() * 30 + bt.getDate())
}
console.log(validCheck('2010-12-13'));