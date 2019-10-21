// Зная структуру html, с помощью изученных
// методов получить (в консоль):

// 1. head
console.log(document.head);

//2. body
console.log(document.body);

// 3. все дочерние элементы body и вывести их в
// консоль.

console.log(document.body.children);

// 4. первый div и все его дочерние узлы

console.log(document.body.firstElementChild);

// а) вывести все дочерние узлы в консоль
console.log(document.body.firstElementChild.children);

// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего

const firstChildChildren = document.body.firstElementChild.children;

for(let i = 1; i < firstChildChildren.length-1; i++) {
    console.log(firstChildChildren[i]);
}
