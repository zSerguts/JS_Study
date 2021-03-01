'use strict';

let start = document.getElementById ('start'),
    incomePlus = document.getElementsByTagName ('button')[0],
    expensesPlus = document.getElementsByTagName ('button')[1],
    depositCheck = document.querySelector ('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll ('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName ('result-total budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName ('result-total budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName ('result-total expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName ('result-total additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName ('result-total additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName ('result-total income_period-value')[0],
    targetMonthValue = document.getElementsByClassName ('result-total target_month-value')[0],
    salaryAmount = document.querySelector ('.salary-amount'),
    incomeTitle = document.querySelector ('.income-title'),
    expensesTitle = document.querySelector ('.expenses-title'),
    selectTitle = document.getElementsByClassName ('period-amount')[0],
    expensesItems = document.querySelectorAll ('.expenses-items'),
    periodSelect = document.querySelector ('.period-select'),
    additionalExpensesItem = document.querySelector ('.additional_expenses-item'),
    targetAmount = document.querySelector ('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items');

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};


const appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {}, 
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function(){
        appData.budget = Number(salaryAmount.value);
        appData.getExpenses();
        appData.getIncome();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();
    },

    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = Math.ceil(appData.budgetDay);
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());   
        incomePeriodValue.value = appData.calcPeriod();
    },

    addExpensesBlock: function(){
        let cloneExpensesItem = expensesItems[0].cloneNode(true);   
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');
        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },

    addIncomeBlock: function(){
        let cloneIncomeItem = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');
        if (incomeItems.length === 3){
            incomePlus.style.display = 'none';
        }
    },

    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !== '')
            {
                appData.expenses[itemExpenses] = Number(cashExpenses);
            }
        });
    },

    getIncome: function(){
        incomeItems.forEach(function(item){
            let itemIncome = item.querySelector('.income-title').value;
            let cashIncome = item.querySelector('.income-amount').value;
            if(itemIncome !== '' && cashIncome !== ''){
                appData.income[itemIncome] = Number(cashIncome);
            }
        });
    },

    getInputPeriodSelect: function(){
        var range = periodSelect.nodeType;
        return range;
    },

    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if (item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },

    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.addIncome.push(itemValue);
            }
        });
    },

    getBudget: function(){
        let sum = 0;
        for (let expense of Object.values(appData.expenses)){
            sum += expense;
        }
        appData.expensesMonth = sum;
        sum = 0;
        for (let income of Object.values(appData.income)){
            sum += income;
        }
        appData.incomeMonth = sum;
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
        return appData.budgetMonth;
    },

    getTargetMonth: function(){
        return Number(targetAmount.value)/appData.getBudget();
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

    calcPeriod: function(){
        return appData.budgetMonth * periodSelect.value;
    }
};
start.addEventListener('click', appData.start);
periodSelect.addEventListener('input', appData.getInputPeriodSelect);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
    // appData.getTargetMonth();
    // appData.getStatusIncome();
appData.getInfoDeposit();
// for (let key in appData){
//     console.log (' ' + key + ' ' + appData[key]);
// }
periodSelect.addEventListener('change', function () {
    /* После отжатия кнопки мышки с ползунка */
    periodSelect.value = this.value;
    selectTitle.textContent = this.value;
    console.log(periodSelect.value);
}, false);
periodSelect.oninput = function(){
    selectTitle = periodSelect.value;
}
console.log(appData.getInputPeriodSelect());
// while (salaryAmount.value.trim() === ''){
//     start.disabled = true;
// }