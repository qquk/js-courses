let a = 0 || "string"; // 'string' потому что  0 - false 'string' - true

let a = 1 && "string"; // 'string' так как  1 и 'string' true выводит последнее

let a = null || 25; // 25 потому что null false

let a = null && 25; // null потому что null false дальше не идем

let a = null || 0 || 35; // 35 так как null и 0 false

let a = null && 0 && 35; //null потому что null false дальше не идем


//Что отобразится в консоли. Почему?
12 + 14 + '12' //2612 сложение потом конкатинация
3 + 2 - '1'//4 сложение потом вычитание с приведением типов
'3' + 2 - 1//31  вычитание потом конкатенация
true + 2//3 true - 1
+'10' + 1//11 +'10' приводится к 10
undefined + 2//NaN
null + 5//5 null - 0
true + undefined//NaN
