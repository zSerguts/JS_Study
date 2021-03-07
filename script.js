
'use strict';

const start = document.getElementById ('start'),
    cancel = document.getElementById('cancel'),
    incomePlus = document.getElementsByTagName ('button')[0],
    expensesPlus = document.getElementsByTagName ('button')[1],
    depositCheck = document.querySelector ('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll ('.additional_income-item'),
    budgetMonthValue = document.getElementsByClassName ('result-total budget_month-value')[0], 
    //доход за месяц
    budgetDayValue = document.getElementsByClassName ('result-total budget_day-value')[0], 
    // доход за день
    expensesMonthValue = document.getElementsByClassName ('result-total expenses_month-value')[0], 
    // расходы за месяц через value
    additionalIncomeValue = document.getElementsByClassName ('result-total additional_income-value')[0],
    // возможный расходы
    additionalExpensesValue = document.getElementsByClassName ('result-total additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName ('result-total income_period-value')[0], 
    // накопления за периоd, правый столбец
    targetMonthValue = document.getElementsByClassName ('result-total target_month-value')[0],
    salaryAmount = document.querySelector ('.salary-amount'),
    selectTitle = document.getElementsByClassName ('period-amount')[0],
    periodSelect = document.querySelector ('.period-select'),
    additionalExpensesItem = document.querySelector ('.additional_expenses-item'),
    targetAmount = document.querySelector ('.target-amount');
    // цель

let expensesItems = document.querySelectorAll ('.expenses-items'),
    incomeItems = document.querySelectorAll('.income-items');

const isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

class AppData {
    constructor(){
        this.budget = 0,
        this.budgetDay = 0,
        this.budgetMonth = 0,
        this.expensesMonth = 0,
        this.income = {},
        this.incomeMonth = 0,
        this.addIncome = [],
        this.expenses = {}, 
        this.addExpenses = [],
        this.deposit = false,
        this.percentDeposit = 0,
        this.moneyDeposit = 0;
    }

    cancel(){
        targetAmount.disabled = false;
        depositCheck.disabled = false;
        expensesPlus.disabled = false; // +
        incomePlus.disabled = false; // +
        periodSelect.disabled = false; // +
        periodSelect.value = 1;
        selectTitle.textContent = 1;
        salaryAmount.disabled = false; // +
        salaryAmount.value = '';
        depositCheck.checked = '';
        salaryAmount.value = '';
        additionalExpensesItem.disabled = false; // +
        additionalExpensesItem.value = '';
        targetAmount.value = '';
        cancel.style.display = 'none'; // +
        start.style.display = 'initial'; // +
        expensesItems.forEach(function(item, index){
            item.querySelector('.expenses-title').disabled = false;
            item.querySelector('.expenses-title').value = '';
            item.querySelector('.expenses-amount').disabled = false;
            item.querySelector('.expenses-amount').value = '';
            if(index !== 0){
                item.remove();
            }
        }); // +
        if(expensesPlus.style.display === 'none'){
            expensesPlus.style.display = 'initial';
        }
        incomeItems.forEach(function(item, index){
            item.querySelector('.income-title').disabled = false;
            item.querySelector('.income-title').value = '';
            item.querySelector('.income-amount').disabled = false;
            item.querySelector('.income-amount').value = '';
            if(index !== 0){
                item.remove();
            }
        });
        if(incomePlus.style.display === 'none'){
            incomePlus.style.display = 'initial';
        }
        additionalIncomeItem.forEach(function(item){
            item.disabled = false;
            item.value = '';
        }),
        this.budget = 0,
        this.budgetDay = 0,
        this.budgetMonth = 0,
        this.expensesMonth = 0,
        this.income = {},
        this.incomeMonth = 0,
        this.addIncome = [],
        this.expenses = {}, 
        this.addExpenses = [],
        this.deposit = false,
        this.percentDeposit = 0,
        this.moneyDeposit = 0;
    
        // правый столбец
        additionalExpensesValue.value = '';
        additionalIncomeValue.value = '';
        budgetMonthValue.value = '';
        budgetDayValue.value = '';
        expensesMonthValue.value = '';
        additionalExpensesValue.value = '';
        additionalIncomeValue.value = '';
        targetMonthValue.value = '';
        incomePeriodValue.value = '';
        budgetMonthValue.value = '';
        budgetDayValue.value = 0;
        // правый столбец
    
    }

    start(){
        depositCheck.disabled = true; //+
        targetAmount.disabled = true; // +
        expensesPlus.disabled = true; // +
        incomePlus.disabled = true; // +
        periodSelect.disabled = true; // +
        salaryAmount.disabled = true; // +
        additionalExpensesItem.disabled = true; // +
        start.style.display = 'none'; // +
        cancel.style.display = 'initial'; // +
        expensesItems.forEach(function(item){
            item.querySelector('.expenses-title').disabled = true;
            item.querySelector('.expenses-amount').disabled = true;
    
        }); // +
        incomeItems.forEach(function(item){
            item.querySelector('.income-title').disabled = true;
            item.querySelector('.income-amount').disabled = true;
        });
        additionalIncomeItem.forEach(function(item){
            item.disabled = true;
        });
        additionalExpensesValue.value = '';
        additionalIncomeValue.value = '';
        this.budget = Number(salaryAmount.value);
        this.getExpenses();
        this.getIncome();
        this.getAddExpenses();
        this.getAddIncome();
        this.getBudget();
        this.showResult();
    }


//const appData = new AppData();

checkAmountValue(e){
    if(e.target.checked === ''){
        start.disabled = true;
    }   else {
        start.disabled = false;
    }
}

updateValue(e){
    selectTitle.textContent = e.target.value;
    periodSelect.value = e.target.value;
}

showResult(){
    additionalExpensesValue.value = '';
    additionalIncomeValue.value = '';
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.ceil(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.budgetMonth * periodSelect.value;
}

addExpensesBlock(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);   
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
    }
}

addIncomeBlock(){
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3){
        incomePlus.style.display = 'none';
    }
}

getExpenses(){
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== '')
        {
            appData.expenses[itemExpenses] = Number(cashExpenses);
        }
    },this);
}

getIncome(){
    incomeItems.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
            appData.income[itemIncome] = Number(cashIncome);
        }
    },this);
}

getAddExpenses(){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
        item = item.trim();
        if (item !== ''){
            this.addExpenses.push(item);
        }
    },this);
}

getAddIncome(){
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
            this.addIncome.push(itemValue);
        }
    },this);
}

getBudget(){
    let sum = 0;
    for (let expense of Object.values(appData.expenses)){
        sum += expense;
    }
    this.expensesMonth = sum;
    sum = 0;
    for (let income of Object.values(appData.income)){
        sum += income;
    }
    this.incomeMonth = sum;
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
    return this.budgetMonth;
}

getTargetMonth(){
    return Number(targetAmount.value)/this.getBudget();
}

calcPeriod(){
    return incomePeriodValue.value = this.budgetMonth * periodSelect.value;
}

EventListeners(){
    salaryAmount.addEventListener('input', AppData.prototype.checkAmountValue);
    expensesPlus.addEventListener('click', AppData.prototype.addExpensesBlock);
    incomePlus.addEventListener('click', AppData.prototype.addIncomeBlock);
    periodSelect.addEventListener('input', AppData.prototype.updateValue); 
    periodSelect.addEventListener('input', AppData.prototype.calcPeriod);
    start.addEventListener('click', AppData.prototype.start.bind(appData));
    cancel.addEventListener('click', AppData.prototype.cancel.bind(appData));
}
}


const appData = new AppData();

appData.EventListeners();