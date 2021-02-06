const money = 500,
    income = ' Frilance',
    addExpenses = 'Internet, taXi, coMMynalka',
    deposit = true,
    mission = 5000,
    period = 12;


console.log(typeof(money), typeof(income), typeof(deposit));
console.log (addExpenses.length);
console.log ("Период равен", period, "месяцев. Цель заработать", mission, "рублей" );


console.log (addExpenses.toLowerCase().split());

let budgetDay = money / 30;
console.log (budgetDay, "В день");