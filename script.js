'use strict';


let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
    start = function(){
    money = +prompt('Ваш месячный доход?', 12000);
    while (!isNumber(money)){
        money = prompt ('Ваш месячный доход?');
    }
}; // ++


let appData = {
    budget: 12000,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {}, // получен
    addExpenses: [], //получен
    deposit: false, //получен
    mission: 50000,
    period: 3,

    asking: function(){
        let addExpenses = prompt('Перечислите возможные расходы через запятую?', 'Садик, школа, автошкола.');
        appData.addExpenses = addExpenses.toLowerCase().split(' , ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }, // ++

    getExpensesMonth: function(){
        for (let i = 0 ; i<2;i++){
            let key = prompt('Введите обязательную статью расходов.');
            let expenses = +prompt('Сколько это будет стоить?');
            appData.expenses[key] = expenses;  
        }
    }, // ++

    getBudget: function(){
        let sum = 0;
        for (let expense of Object.values(appData.expenses)){
            sum += expense;
        }
        appData.expensesMonth = sum;
        appData.budgetMonth = money - sum;
        appData.budgetDay = appData.budgetMonth / 30;
        return appData.budgetMonth;
    },

    getTargetMonth: function(){
        if (appData.getBudget() > 0){
            console.log ('Цель будет достигнута через ' + appData.mission/appData.getBudget() + ' месяц(ев).');
        } else {
            console.log ('Цель не будет достигнута.');
        }
    },

    getStatusIncome: function(){
    if (appData.getBudget() >= 1200){
        console.log('У вас большой уровень дохода.');
        } else if (appData.getBudget() >= 600 && appData.getBudget() < 1200){
            console.log('У вас средний уровень дохода.');
        } else {
            console.log ('Ваш уровень дохода ниже среднего.');
        }
    }

};

start(); // ++
appData.asking(); // ++
appData.getExpensesMonth(); // ++
appData.getBudget();

console.log (appData.expensesMonth);
appData.getTargetMonth();
appData.getStatusIncome();

for (let key in appData){
    console.log ('Ключ: ' + key + ' Значение: ' + appData[key]);
}
