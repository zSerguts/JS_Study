'use strict';

let money = prompt('Какой ваш месячный доход?'),
    income = 'Фриланс';
money =+ money;

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
      deposit = confirm('Есть ли у вас депозит в банке?'),
      mission = 50000,
      period = 12;

let expenses1 = prompt('Введие обязательную статью расходов:');
let amount1 = prompt('Сколько это будет стоить?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = prompt('Сколько это будет стоить?');
amount1 = +amount1;
amount2 = +amount2;





//1
function getExpensesMonth(a,b){
    console.log(a + b);
}

//2
function getAccumulatedMonth(a,b,c){
    return (a-b-c);
} 

//3
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

function getTargetMonth(a,b){
    console.log(a/b);
}


function showTypeOf(data){
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

getExpensesMonth(amount1,amount2);

addExpenses.toLowerCase();
console.log(addExpenses);
console.log(addExpenses.split());

getTargetMonth(mission, accumulatedMonth);

let budgetDay = Math.round(accumulatedMonth / 30);
console.log ("Бюджет в день" , budgetDay);


// budgetmonth заменили на getaccumulatedmonth
//9
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