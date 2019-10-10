// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
let arr = [1,2,3,5,8,9,10];

/**
 * 
 * @param {array} arr 
 */
function getObjFromArray(arr) {
    return arr.map(item => {
        return {digit: item, odd: !!(item % 2)}
    }, arr)
}

console.log(getObjFromArray(arr))

// Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

/**
 * 
 * @param {array} arr 
 */
function checkForZero(arr) {
    return arr.some(item => item === 0)
}

console.log(checkForZero([12, 4, 50, 1, 0, 18, 40]))

// Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] 
// хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

/**
 * 
 * @param {array} arr 
 * @param {number} length 
 */
function checkForLength(arr, length) {
    return arr.some(item => item.length > length);
}
console.log(checkForLength(['yes', 'hello', 'no', 'easycode', 'what'], 3));


// Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке 
// {буква: “a”, позиция_в_предложении: 1}:

// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”

let words = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

/**
 * 
 * @param {array} arr 
 */
function makeString(arr) {
    return arr.sort((a, b) => a.index - b.index)
           .reduce((str, letter) => str + letter.char, '');
}
    
console.log(makeString(words));
