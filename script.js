'use strict';

//1
const lang = prompt('Выберите язык');
const week = [
    ["Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье."], 
    ["Monday, Tuesday, Wednesday, Thursday, Friday, Sunday, Saturday."]
];
const miss = "На таком языке мы не говорим.";

//a
if (lang === "ru"){
    console.log (week[0]);
} 
else if (lang === "en"){
    console.log (week[1]);
}
else {
    console.log(miss);
}


//b
switch(lang){
    case "ru":
        console.log (week[0]);
        break;
    case "en":
        console.log (week[1]);
        break;
    default:
        console.log(miss);
}

//через тернарку

console.log(lang === "ru" ? week[0] : lang === "en" ? week[1] : miss);


//c
const data = [];

data.ru = week[0];
data.en = week[1];

console.log(String(data[lang]));


//2

const namePerson = prompt('Введите имя:');
console.log (namePerson === 'Артём' ? "директор" : namePerson === 'Максим' ? "преподаватель" : "такого человека нет.");