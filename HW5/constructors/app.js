// Практика

// Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// mul() возвращает произведение введённых свойств. 
// (пример вызова есть в конце теории)

function Calculator() {
    this.a = 0;
    this.b = 0;
    this.read = function() {
        this.a = +prompt("Enter a", 0);
        this.b = +prompt("Enter b", 0);
    };
    this.sum = function() {
        return this.a + this.b;
    },
    this.mul = function() {
        return this.a * this.b;
    }
}

let calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

