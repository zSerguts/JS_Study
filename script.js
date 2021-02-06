'use strict';

let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


let money;
const income = 'Фриланс',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    mission = 50000;
    
let expenses = [];



let start = function(){
    money = +prompt('Ваш месячный доход?');
    while (!isNumber(money)){
        money = prompt ('Ваш месячный доход?');
    }
};

start ();


let getExpensesMonth = function(){
    let sum = 0;

    for (let i = 0; i < 2;i++){
        
        expenses [i] = prompt ('Введите обязательную статью расходов?');

        sum += +prompt('Во сколько это обойдётся?');
    }
    console.log(expenses);
    return sum;
}

let expensesAmount = getExpensesMonth();

console.log ('Расходы за месяц: ' + expensesAmount);

let getAccumulatedMonth = function(){
    return money - expensesAmount;
}


let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
    if (accumulatedMonth > 0){
        console.log ('Цель будет достигнута через ' + mission/accumulatedMonth);
    } else {
        console.log ('Цель не будет достигнута.');
    }
}

function showTypeOf(data){
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses);
console.log(addExpenses.split());

getTargetMonth(mission, accumulatedMonth);

let budgetDay = Math.round(accumulatedMonth / 30);
console.log ("Бюджет в день" , budgetDay);

let getStatusIncome = function(){
    if (accumulatedMonth >= 1200){
        return('У вас большой уровень дохода.');
    } else if (accumulatedMonth >= 600 && accumulatedMonth < 1200){
        return('У вас средний уровень дохода.');
    } else {
        return ('вы нищеброд.');
    }
};
console.log(getStatusIncome());