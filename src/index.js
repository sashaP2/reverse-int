module.exports = function reverse (n) {
    n = String(n);

    if (n[0] === '-') {
        return n.split('').slice(1).reverse().join('');
    }
   return n.split('').reverse().join('');
}