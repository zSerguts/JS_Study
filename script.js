'use strict';


const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
const start = function(){
    money = +prompt('Ваш месячный доход?', 12000);
    while (!isNumber(money)){
        money = prompt ('Ваш месячный доход?');
    }
}; // ++

const _start = document.getElementById ('start'),
    incomePlus = document.getElementsByTagName ('button')[0],
    expensesPlus = document.getElementsByTagName ('button')[1],
    depositCheck = document.querySelector ('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll ('input.className.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName ('result-total budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName ('result-total budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName ('result-total expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName ('result-total additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName ('result-total additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName ('result-total income_period-value')[0],
    targetMonthValue = document.getElementsByClassName ('result-total target_month-value')[0],
    salaryAmount = document.querySelector ('.salary-amount'),
    incomeTitle = document.querySelector ('.income-title'),
    incomeAmount = document.querySelector ('.income-amount'),
    expensesTitle = document.querySelector ('input.className.expenses-title'),
    expensesAmount = document.querySelector ('input.className.expenses-amount'),
    additionalExpensesItem = document.querySelector ('.additional_expenses-item'),
    targetAmount = document.querySelector ('.target-amount'),
    periodSelect = document.querySelector ('.period-select');

const appData = {
    budget: 12000,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    addIncome: [],
    expenses: {}, // получен
    addExpenses: [], //получен
    deposit: false, //получен
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,

    asking: function(){
        if(confirm('Есть ли у вас дополнительный источник заработка?'))
        {
            let itemIncome = prompt('Какой у вас дополнительный источник заработка?', 'Таксую').trim();
            while(isNumber(itemIncome) === true){
                itemIncome = prompt('Какой у вас дополнительный источник заработка?', 'Таксую').trim();
            }
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000).trim();
            while (isNumber(cashIncome) !== true){
                cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000).trim();
            }
            appData.income[itemIncome] = cashIncome;
        }
        
        let addExpenses = prompt('Перечислите возможные расходы через запятую?', 'Садик, шКола, аВтошКола.');
        appData.addExpenses = addExpenses.toLowerCase().split(' , ')
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`);
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
    }, // ++

    getExpensesMonth: function(){
        for (let i = 0 ; i<2;i++){
            let key = prompt('Введите обязательную статью расходов.').trim();
            while (isNumber(key) === true){
                key = prompt('Введите обязательную статью расходов.').trim();
            }
            let expenses = +prompt('Сколько это будет стоить?').trim();
            while (isNumber(expenses) !== true){
                expenses = +prompt('Сколько это будет стоть?');
            }
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
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            while (isNumber(appData.percentDeposit) !== true)
            {
                appData.percentDeposit = prompt('Какой годовой процент?', '10');
            }
            appData.moneyDeposit = prompt('Сколько денег вложено?', 10000);
            while (isNumber(appData.moneyDeposit) !== true)
            {
                appData.moneyDeposit = prompt('Сколько денег вложено?', 10000);
            }
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

start(); // ++
appData.asking(); // ++
appData.getExpensesMonth(); // ++
appData.getBudget();

console.log (appData.expensesMonth);
appData.getTargetMonth();
appData.getStatusIncome();

appData.getInfoDeposit();
console.log(appData.addExpenses);

for (let key in appData){
    console.log (' ' + key + ' ' + appData[key]);
}

console.log(typeof(expensesTitle));

console.log(typeof(expensesAmount));
console.log(additionalIncomeItem);