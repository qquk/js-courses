// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
// будут в верхнем регистре. Использовать for или while.
let str = 'i am in the easycode';

function ucFirst(str) {
    let words = str.split(' ');
    let result = '';
   
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        result += ((i === 0) ? '' : ' ') + word[0].toUpperCase() + word.slice(1);
    }
    return result;
}

console.log(ucFirst(str));

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш 
// (то есть последняя буква становится первой, предпоследняя - второй итд).
str = 'tseb eht ma i';
let reverseStr = '';

for (i = str.length -1; i >= 0; i--) {
    reverseStr += str[i]; 
}
console.log(reverseStr);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. 

function factorial(number) {
    let factorial = 1;
    for (let i = number; i > 1; i--) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorial(4));

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
// где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
str = 'JavaScript is a pretty good language'
let newStr = '';

for (i = 0; i < str.length; i++) {
    if (i !== ' ') {
        newStr += (i === 0 || str[i-1] === ' ') ? str[i].toUpperCase() : str[i];
    }
}
console.log(newStr);

// 5. Найти все нечетные числа в массиве от 1 до 15 
// включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] 
// Использовать for of.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; 
for (number of numbers) {
    if (number % 2 === 0 ) {
        console.log(number);
    }
}

// 6. Дан объект:
// let list = {
//      name: ‘denis’,
//      work: ‘easycode’,
//      age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать 
// ее всю в верхнем регистре. Использовать for in.

let list = {
     name: 'denis',
     work: 'easycode',
     age: 29
}

for (field in list) {
    if (typeof(list[field]) === 'string') {
        list[field] = list[field].toUpperCase();
    }
}

console.log(list);