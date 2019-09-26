//1 . Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let str = 'hidden'

if (str === 'hidden') {
    str = 'visible';
} else {
    str = 'hidden';
}
console.log(str);
//Используя if, записать условие:
// если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
 
let variable = 4;

if (variable == 0) {
    variable = 1;
} else if(variable < 0) {
    variable = "less then zero";
} else {
    variable *= 10;
}
console.log(variable);

//3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
//Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 
//'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
if (car.age > 5) {
    console.log("Need Repair");
    car.needRepair = true;
} else {
    car.needRepair = false;
}

//4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
//Написать условие если у item есть поле discount и там есть значение то в объекте 
//item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, 
//обратите внимание  что поля discount и price это строки и вам из них нужно получить числа 
//чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = { name: 'Intel core i7', price: '100$', discount: '15%' };

if (item.discount && parseInt(item.discount)) {
    item.priceWithDiscount = `${(100 - parseInt(item.discount)) / 100 * parseInt(item.price)}$`
    console.log(item.priceWithDiscount);
} else {
    console.log(item.price);
}

// 5. Дан следующий код:

// let product = {
//     name: “Яблоко”,
//     price: “10$”
// };

// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// Написать условие если (цена товара больше или равна минимальной цене) 
// и (меньше или равна максимальной цене) то вывести в консоль название этого товара,
//  иначе вывести в консоль что товаров не найдено.

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10;
let max = 20;

if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
    console.log(product.name);
} else {
    console.log("product not found");
}