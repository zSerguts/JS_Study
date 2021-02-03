let money = 500;
let income = ' Frilance';
let addExpenses = 'Internet, taxi, commynalka';
let deposit = true;
let mission = 5000;
let period = 12;


console.log (money, income, deposit);
console.log (addExpenses.length);
console.log ("Период равен", period, "месяцев. Цель заработать", mission, "рублей" );

addExpenses.toLowerCase();
let arr = [];
for ( let i = 0; i < addExpenses.length; i++)
{
    arr[i] = addExpenses[i];
}
console.log (arr);

let budgetDay = money / 30;
console.log (budgetDay, "В день");