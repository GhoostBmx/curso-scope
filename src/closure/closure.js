function greeting(){   //greeting = saludo
    let username = 'wilmer';

    function displayUserName () {
        return `hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g())



