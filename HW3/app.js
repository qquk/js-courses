//1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать 
// их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
    if (arguments.length === 0) {
        return 0;
    }
    let result = 1;
    for (number of arguments) {
        if (typeof(number) !== 'number' || isNaN(number)) {
            alert('Incorrect argument: ' + number);
        }
        result *= number;
    }
    return result;
}

console.log(multiply(9,2));

//2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('test'));

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
// где каждый символ разделен пробелом и заменен на юникод-значение символа: 
function getCodeStringFromText(str) {
    let letters = str.split('');
    let codes = letters.map(function(letter) {
        return letter.charCodeAt(0);
    })
    return codes.join(' ');
}
console.log(getCodeStringFromText('hello'));

// 4. Создать функцию угадай число. Она принимает число от 1-10 
// (обязательно проверить что число не больше 10 и не меньше 0). 
// Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает 
// “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”.
// Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumber(number) {
    if (number > 10 || number < 0) {
        alert("Incorrect parameter");
    }
    let randomNumber = Math.round(Math.random() * 10);
    if (randomNumber === number) {
        return "You won";
    }
    return "You loose";
}

console.log(guessNumber(8));

// 5. Создать функцию, которая принимает число n и возвращает массив, 
// заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(n) {
    let numbers = [];
    for (let i = 1; i<=n; i++) {
        numbers.push(i);
    }
    return numbers;
}
console.log(getArray(5));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(arr) {
    return [...arr, ...arr];
}

console.log(doubleArray([1,2,3]));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый 
// элемент, а возвращает массив из оставшихся значений: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] 
// и т.д.

function changeCollection() {
    let result = [];
    for (argument of arguments) {
        result.push(argument.slice(1))
    }
    return result;
}
console.log(changeCollection([1,2,3], ['a','b','c']));

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение 
// на которое хочу проверять. Проверять что все аргументы переданы. 
// Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

function getUsers(users, field, value) {
    if (typeof(users) === undefined || typeof(field) === undefined || typeof(value) === undefined) {
        alert("Incorrect params");
    }
    let result = [];
    for (user of users) {
        if (user[field] === value) {
            result.push(user);
        }
    }
    return result;
}
let users = [ {name: 'Denis', age: '29', gender: 'male'} , {name: 'Ivan', age: '20', gender: 'male'} ];
console.log(getUsers(users, 'age', '20'));

//9. Исходный массив [-2, 3, 4, -5, -6, 2, 4, -56]. Найдите количество отрицательных и положительных элементов
function getEvenAndOddCount(numbers) {
    let oddCnt = 0, evenCnt = 0;
    for (number of numbers) {
        number % 2 === 0 ? evenCnt++ : oddCnt++;
    }
    return {odd: oddCnt, even: evenCnt}
}
console.log(getEvenAndOddCount([-2, 3, 4, -5, -6, 2, 4, -56]));

//10. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

function arrayInfo(arr) {
    return arr.map(element => {
        return {digit: element, odd: !!(element % 2)}
    });
}
console.log(arrayInfo([1,2,3,5,8,9,10]));