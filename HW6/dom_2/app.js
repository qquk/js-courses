// 1. Создать функцию, которая принимает два элемента. 
// Функция проверяет, является ли первый элемент родителем для второго:

const isParent = (parent, child) => parent.contains(child);

console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
const links = Array.from(document.querySelectorAll('a')).filter((elem) => {
    return elem.closest('ul') === null;
});
console.log(links);

//3. Найти элемент, который находится перед и после списка ul
console.log(document.querySelector('ul').previousElementSibling, document.querySelector('ul').nextElementSibling);
