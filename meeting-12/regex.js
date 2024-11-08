let foo = /ab+c/;

console.log(foo);
console.log(typeof foo);

let bar = new RegExp("ab+c");

console.log(bar);
console.log(typeof bar);

foo = "Belajar Javascript";
let pola = /Javascript/;

console.log(pola.test(foo));
console.log(/Belajar/.test(foo));
console.log(/belajar/.test(foo));

foo = "1 jam sama dengan 60 menit, juga sama dengan 3600 detik";
pola = /\d+/;

console.log(pola.exec(foo));

pola = /\d+/g;
console.log(pola.exec(foo));
console.log(pola.exec(foo));
console.log(pola.exec(foo));
console.log(pola.exec(foo));

pola = /[abcde]../;
console.log(pola.test('abaa'));
console.log(pola.test('fba'));
console.log(pola.test('1dd'));
console.log(pola.test('add'));
console.log(pola.test(' dd'));
console.log(pola.test('belajar'));

