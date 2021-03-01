document.addEventListener('DOMContentLoaded', function(){
'use strict';

const parents = document.querySelectorAll ('.books');
const books = document.querySelectorAll ('.book');

books[2].after(books[4]);
parents[0].prepend(books[1]);
parents[0].append(books[2]);


 let image = document.getElementsByTagName ('body');

 console.log (image);

 image[0].style.backgroundImage = "url(./image/you-dont-know-js.jpg)";


let mark = document.getElementsByTagName('h2')[2];

console.log (mark);

mark.textContent = ("Книга 3. this и Прототипы Объектов");
mark.style.color = "darkkhaki";

let spam = document.querySelector ('.adv');
spam.remove();

let list = document.querySelectorAll ('.book ul')[1];

let points = document.querySelectorAll('.book ul li');

points[9].after(points[12]);
points[12].after(points[14]);
points[15].after(points[8]);


points[38].before(points[45]);
points[45].after(points[39]);
points[39].after(points[40]);
points[44].before(points[41]);

let OurObject = document.querySelectorAll ('.book ul')[5];
const NewElem = document.createElement ('li');
NewElem.textContent = " Глава 8: За пределами ES6 ";

OurObject.append(NewElem);
points[55].after(NewElem);


console.log (list);
console.log (points);
});