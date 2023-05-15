// function moneybox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`moneybox; $${saveCoins}`);
// }

// moneybox(5);
// moneybox(15);


function moneybox(){
    let countCoin = 0;
    function myCoins(coins){
        countCoin += coins;
        console.log(`MoneyBox: $${countCoin}`);
    }
    return myCoins;
}

const myMoneyBox = moneybox();
myMoneyBox(5);
myMoneyBox(12);
myMoneyBox(8);

const MoneyBox1 = moneybox();
MoneyBox1(23);
MoneyBox1(10);
MoneyBox1(7);