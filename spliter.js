function check(str) {
    const string = str.toLowerCase();
    const a = string.split(' ').join('');
    const b = a.split('').reverse().join('');
    return a===b;

}

const splinter = check('Rats live on evil star')
console.log(splinter);