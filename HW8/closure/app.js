//1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0

function minus(a) {
    return function(b) {
        return a - b; 
    }
}

console.log(minus(3)(4));

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(initial) {
    let res = initial;
    return function(a) {
        return res *= a;
    }
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(4));
console.log(multiply(1));
console.log(multiply(2));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш


const myString = (function() {
            let string = '';
            function set(value) {
                string = value;
            }

            function get() {
                return string;
            }

            function length() {
                return string.length;
            }

            function reverse() {
                return string.split('').reverse().join('');
            }

            return {
                set, get, length, reverse
            }
    }());

    myString.set("abcd");
    console.log(myString.length());
    console.log(myString.get());
    console.log(myString.reverse());


// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в 
// степень. Конечное значение округлить до двух знаков после точки 
// (значение должно храниться в обычной переменной, не в this).

// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const calculator = (function() {
    let result;

    function set(value) {
        result = value;
        return this;
    }

    function plus(a) {
        result += a;
        return this;
    }

    function minus(a) {
        result -= a;
        return this;
    }

    function multiply(a) {
        result *= a; 
        return this;
    }

    function equal() {
        return Math.round(result);
    }

    return {
        set, plus, minus, multiply, equal
    }
}())

const res = calculator.set(10).plus(5).multiply(10).minus(151).equal();
console.log(res);