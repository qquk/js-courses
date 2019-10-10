// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

// Первая функция возвращает строку “New value: ” и результат обработки:

// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

function transformArray(arr, handler) {
    return "New Value: " + arr.map(handler).join(', ');
}

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
let arr = ['my', 'name', 'is', 'Trinity'];
console.log(transformArray(arr, ucFirst));


function multiply(number) {
    return number * 10;
}
arr = [10, 20, 30];
console.log(transformArray(arr, multiply));


function userInfo(user) {
    return user.name + ' is ' + user.age;
}
arr = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
console.log(transformArray(arr, userInfo));


function reverseString(str) {
    return str.split("").reverse().join("");
}
arr = ['abc', '123'];
console.log(transformArray(arr, reverseString));


// 2. Написать аналог метода every. Создайте функцию every, 
// она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) 
// вторым аргументом callback (обязательно проверьте что передана функция)
// функция должна возвращать true или false в зависимости от результата вызова callback 
// (проверить число больше 5). Callback  должен принимать один элемент массива, его индекс в 
// массиве и весь массив. 
 
function myEvery(arr, handler) {
    if (!Array.isArray || typeof(handler) !== 'function') {
        alert("Incorrect parameters");
    }
    for (let i = 0; i < arr.length; i++) {
        if (!handler(arr[i])) {
            return false;
        }
    }
    return true;
}

function checkNumber(number, index, arr) {
    return number > 5;
}

console.log(myEvery([7,27,47,57], checkNumber));