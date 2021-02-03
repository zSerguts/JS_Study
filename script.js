'use strict';

//2
let money = prompt('Какой ваш месячный доход?');


//3
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');


//4
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 50000;
let period = 12;

money = +money;

console.log (typeof money);
console.log (typeof addExpenses);
console.log (typeof deposit);
console.log (addExpenses.length);
console.log ("Период равен", period, "месяцев.");
console.log( "Цель заработать", mission, "рублей" );

addExpenses.toLowerCase();
console.log(addExpenses);
console.log(addExpenses.split());

//5
let expenses1 = prompt('Введие обязательную статью расходов:');
let amount1 = prompt('Сколько это будет стоить?');
let expenses2 = prompt('Введите обязательную статью расходов:');
let amount2 = prompt('Сколько это будет стоить?');
amount1 = +amount1;
amount2 = +amount2;


//6
let budgetMonth = money - amount1 - amount2;
console.log("Бюджет на месяц равен: " ,budgetMonth);


//7
console.log("Цель будет достигнута через" , Math.round(mission/budgetMonth), "месяцев(-а)");


//8
let budgetDay = Math.round(budgetMonth / 30);
console.log ("Бюджет в день" , budgetDay);


//9
if (budgetMonth >= 1200){
    console.log('У вас большой уровень дохода.');
} else if (budgetMonth >= 600 && budgetMonth < 1200){
    console.log('У вас средний уровень дохода.')
} else if (budgetMonth > 0 && budgetMonth < 600){
    console.log ('К сожалению у вас уровень дохода ниже среднего.')
} else if (budgetMonth <= 0){
    console.log('Что-то пошло не так...');
}