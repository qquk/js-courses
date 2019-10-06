// 1.Записать в виде switch case следующее условие:
// if (a === ‘block’) {
// 	console.log(‘block’)
// } else if (a === ‘none’) {
// 	console.log(‘none’)
// } else if (a === ‘inline’) {
// console.log(‘inline’)
// } else {
// 	console.log(‘other’)
// }
// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
let a = 'block';
switch(a) {
    case 'block': console.log('block'); break;
    case 'block': console.log('none'); break;
    case 'block': console.log('inline'); break;
    default: console.log('other'); break;
}

// 2. Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

let str = 'hidden'
str = str === 'hidden' ? 'visible' : 'hidden';
console.log(str);



let variable = 0;
variable = variable === 0 ? 1 : (variable < 0 ? 'less then zero' : variable * 10);
console.log(variable);

let car = { name: 'Lexus', age: 4, create: 2008, needRepair: false };
car.age > 5 ? (function() {
                console.log("Need Repair");
                car.needRepair = true;
               })()
            : car.needRepair = false;
console.log(car);