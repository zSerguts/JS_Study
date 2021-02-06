let num = 266219;
let proiz = 1;

for (let i = 0; i < 6; i++)
{
    proiz *= num % 10;
    num = Math.floor (num / 10); 
}
console.log (proiz);
proiz *= proiz * proiz;

proiz = String(proiz).slice(0,2);
console.log (proiz);