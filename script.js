'use strict';

function outputMessage(name){
    console.log('Hello ' + name);
    console.log('Hello ' + name);
}

outputMessage('Max');

// const consoleMessage = function(){
//     console.log('Hello, friend!')
// }

// consoleMessage();

// const alertMessage = new Function ('alert("Hi!")');

// alertMessage();

const sum = function(a, b){
    let res = a + b;
    console.log(res);
}

sum(3,5);