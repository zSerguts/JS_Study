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
function getExpensesMonth(term1, term2){
    console.log(term1 + term2);
}

//2
function getAccumulatedMonth(minuend, subtr1, subtr2){
    return (minuend - subtr1 - subtr2);
} 

//3
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);

function getTargetMonth(mission, accumulatedMonth){
    console.log(mission / accumulatedMonth);
}


function showTypeOf(data){
    console.log(data, typeof(data));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

getExpensesMonth(amount1,amount2);

console.log(addExpenses);
console.log(addExpenses.toLowerCase().split());

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
        return ('Ваш уровень дохода ниже среднего.');
    }
};
console.log(getStatusIncome());