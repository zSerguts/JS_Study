//1
let num = 266219;
//2
let proiz = 1;

for (let i = 0; i < 6; i++)
{
    proiz *= num % 10;
    num = Math.floor (num / 10); 
}
console.log (proiz);
//3
proiz = proiz * proiz * proiz;
console.log (proiz);
//4

proiz = String(proiz).slice(0,2);
console.log (proiz);