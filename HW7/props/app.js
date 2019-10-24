// 1. Найти параграф и получить его текстовое содержимое (только текст!)

const p = document.querySelector('article > p');
console.log(p.textContent);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию 
// (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
const inspectElem = (node) => {
    return {
        name: node.nodeName,
        type: node.nodeType,
        children: node.childNodes.length
    }
} ;

console.log(inspectElem(document.querySelector('article > p')));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul)
//  ---> ["Link1", "Link2", "Link3"]
const getTextFromUl = (ul) => {
    let linksText = [];
    ul.querySelectorAll('li').forEach((li) => {
        linksText.push(li.textContent);
    });
    return linksText;
}

console.log(getTextFromUl(document.querySelector('ul')));


// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). 
// Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-

const replaceTextNode = (node, text) => {
    for (child of node.childNodes) {
       if (child.nodeType === 3) {
           child.textContent = text;
       }
    }
}

replaceTextNode(document.querySelector('p'), '-text-');

//1. Найти в коде список ul и добавить класс “list”
let ul = document.querySelector('ul');
ul.classList.add('list');

//2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// let a  = document.querySelector('ul ~ a').setAttribute('id', 'link');

let elem = ul.nextSibling;
while(true) {
    if (elem && elem.nodeType === 1 && elem.tagName === 'A') {
        elem.setAttribute('id', 'link');
        break;
    }
    elem = elem.nextSibling;
} 




//3. На li через один (начиная с самого первого) установить класс “item”

for (li of ul.querySelectorAll('li:nth-child(2n+1)')) {
    li.classList.add('item');
}

//4. На все ссылки в примере установить класс “custom-link”
for (link of document.querySelectorAll('a')) {
    link.classList.add('custom-link');
}

//1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
//<li><a href="#">Link1</a></li>
//...
//<li class=”new-item”>item 5</li>
//<li class=”new-item”>item 6</li>
//</ul>
//Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке. */}

const addLis = (ul, count) => {
    for (let i = 1; i<= count; i++) {
        let newLi = document.createElement('li');
        newLi.classList.add('new-item')
        newLi.textContent = 'item' + (ul.children.length + 1);
        ul.append(newLi);
    }
}

// addLis(ul, 4);

// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по 
// тегу strong (в каждую ссылку один - strong). 

for (a of ul.querySelectorAll('a')) {
    let strong = document.createElement('strong');
    strong.innerHTML = a.innerHTML;
    a.innerHTML = strong.outerHTML;
}

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). 
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement. 

let img = document.createElement('img');
img.alt = 'picture';
img.src = 'https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg';
document.body.prepend(img);

// 4. Найти на странице элемент mark, добавить в конец содержимого 
// текст “green” и на элемент установить класс green

let mark = document.querySelector('mark');
mark.append('green');
mark.classList.add('green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)

const sortUl = (ul) => {
    let newUl = ul.cloneNode(false);
    let sortedLis = Array.from(ul.children)
                    .sort((a,b) => (b.querySelector('a').textContent > a.querySelector('a').textContent) 
                    ? 1 : ((a.querySelector('a').textContent > b.querySelector('a').textContent) ? -1 : 0)); 
    newUl.append(...sortedLis);
    ul.replaceWith(newUl);
}

sortUl(ul);

const fields = {name: 'Name', email: "Email", balance: "Balance"}
const users = [
    {
      
      "balance": 2853.33,
      "name": "Buckner Osborne",
      "email": "bucknerosborne@empirica.com",
    },
    {
      "balance": 1464.63,
      "name": "Rosalie Smith",
      "email": "rosaliesmith@katakana.com",
    },
    {
      "balance": 2823.39,
      "name": "Estrada Davenport",
      "email": "estradadavenport@ebidco.com",
    }
  ];

  const createTable = () => {
      let table = document.createElement('table');
      table.classList.add('table');
      let headTr = document.createElement('tr');
      let headTh = document.createElement('th');
      headTh.textContent = '#';
      headTr.append(headTh);
      for (let key in fields) {
          let th = document.createElement('th');
          th.append(fields[key]);
          headTr.append(th); 
      }
      table.append(headTr);
      let balance = 0;
      for (i = 1; i<=users.length;  i++) {
          let userTr = document.createElement('tr');
          let numTd = document.createElement('td');
          numTd.append(i);
          userTr.append(numTd);
          for (let key in fields) {
              let td = document.createElement('td');
              td.append(users[i-1][key]);
              userTr.append(td);
          }
          balance += users[i-1]['balance'];
          table.append(userTr);
      }

      let footerTr = document.createElement('tr');
      let footerCol = document.createElement('td');
      footerCol.setAttribute('colspan', 3);
      footerTr.append(footerCol);
      let balanceTd = document.createElement('td');
      balanceTd.innerHTML = `Total balance: <b>${balance}</b>`;
      footerTr.append(balanceTd)  
      table.append(footerTr);
      document.getElementById("table-container").append(table);
  }

  createTable();