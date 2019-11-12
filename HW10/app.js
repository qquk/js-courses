// Отображать список книг
// Добавление книги
// Сортирока (по цене, по алф)
// Фильтрация (по стране, по автору)
// валидация
// редактирование книги
// сохранение в локал стор

//Название книги, цена, автор, страна,
// картинка(по умолчанию), рейтинг(select), жанр (строка)
// - массив


const ARRAY_FIELDS = [
    {name: 'book_name', label: 'Название', pattern: '.{6,100}', message: 'Incorrect name'},
    {name: 'price', label: 'Цена', pattern: '[0-9]*\.?[0-9]+', message: 'Incorrect price'},
    {name: 'author', label: 'автор', pattern: '.{6,100}', message: 'Incorrect author'},
    {name: 'country', label: 'страна', pattern: '.{6,100}', message: 'Incorrect country'},
    {name: 'url', label: 'картинка', pattern: '.', message: 'Invalid url'},
    {
        name: 'rate',
        label: 'рейтинг',
        choices: [1, 2, 3, 4, 5],
        type: 'select',
    },
    {name: 'genre', label: 'жанр', pattern: '.{6,100}', message: 'Incorrect genre'},
];

const books = [];

class Field {
    constructor({name, label}) {
        this.name = name;
        this.label = label;
    }
}

class InputField extends Field {
    render() {
        const html = `<div class="form-group">
                        <label class="label">${this.label}</label>
                        <input class = "form-control" name=${this.name} value="" />
                        <span class="error" style="color:red;display:none;"></span>
                      </div>`;
        return html
    }
}

class SelectField extends Field {
    constructor(field) {
        super(field)
        const {choices} = field;
        this.choices = choices;
    }
    render() {
        const html = `<div class="form-group">
                        <label class="label">${this.label}</label>
                        <select class="form-control" name=${this.name}>
                           ${this.choices.map(choice => `<option>${choice}</option>`)}
                        </select>
                      </div>`;
        return html
    }
}

class Form {
    constructor(selector) {
        this.selector = selector;
        this.init()
    }
    init() {
        const form = document.createElement('form');
        const bookForm = document.querySelector(this.selector);
        ARRAY_FIELDS.forEach((field) => {
            const inputName = field.type === 'select' ? new SelectField(field) : new InputField(field);
            const html = inputName.render();
            form.insertAdjacentHTML('beforeend', html);
        });
        const btn = document.createElement('button');
        btn.textContent = 'Добавить книгу';
        btn.classList.add('btn', 'btn-success')
        btn.addEventListener('click', this.addBook)
        form.append(btn);
        bookForm.append(form);
    }
    addBook(event) {
        event.preventDefault();
        console.log(this);
        
        if (Form.validate()) {
            const book = ARRAY_FIELDS.reduce((acc, {name}) => {
                const input = document.querySelector(`[name="${name}"]`).value;
                return {...acc, [name]: input}
            }, {numb: books.length + 1})
                
            books.push(book)
            listBooks.addBook(book)
        }
        
    }
    static validate() {
        for (let element of document.querySelectorAll('.error')) {
            element.textContent = '';
            element.style.display = 'none';
        }
        let valid = true;
        ARRAY_FIELDS.forEach(({name, pattern, message}) => {
            const input = document.querySelector(`[name="${name}"]`);
            if (pattern !== undefined && !(new RegExp(pattern)).test(input.value)) {
                valid = false;
                input.nextElementSibling.textContent = message;
                input.nextElementSibling.style.display = 'block';
            }
        });
        return valid;
    }
}

class Book {
    constructor(book) {
        this.book = book;
    }
    render() {
        let html = '<tr>';
        for(let key in this.book) {
            html += '<td>' + (key === 'url' ? '<img src="' + this.book[key] + '" >' : this.book[key]) + '</td>';
        }
        html += '</tr>';
        return html;
    }
}


class ListBooks {

    constructor(selector) {
        this.wrapper = document.querySelector(selector);
        this.init();
    }
    init() {
        const table = document.createElement('table');
        table.classList.add('table');
        const headTr = document.createElement('tr');
        const headTh = document.createElement('th');
        headTh.textContent = '#';
        headTr.append(headTh);
        for (let field of ARRAY_FIELDS) {
          let th = document.createElement('th');
          th.append(field.label);
          headTr.append(th); 
        }
        table.append(headTr);
        const tbody = document.createElement('tbody');
        table.append(this.getBody());
        this.wrapper.append(table)
    }
    getBody() {
        if (this.body === undefined) {
            this.body = document.createElement('tbody');
        }
        return this.body;
    }
    addBook(book) {
        const body = this.getBody();
        const oneBook = new Book(book);
        const html = oneBook.render();
        body.insertAdjacentHTML('beforeend', html);
    }
    clear() {
        const body = this.getBody();
        body.innerHTML = '';
    }
    updateListBooks() {
        this.clear();
        books.forEach((book) => {
            this.addBook(book);
        })
    }
}

const form = new Form('#book-form');
const listBooks = new ListBooks('#book-list');

//Добавить верстку на форму
//Добавить верстку на список книг
//Добавить возможность отображать картинку по url
//Пофиксить ошибку с добавлением книг на страницу
//Написать метод для добавления одной книги (сейчас добаляются все)

//Реализовать минимум одну из задач: (внизу есть пара подсказок для задач со *)
//1.* Добавить метод validate в класс Form. Метод должен пройтись по объекту book(метод addBook) и проверить
//все ли поля заполнены правильно.

//2.* Добавить сортировку по цене. СортировкИ "от дешевых к дорогим" / "от дорогих к дешевым"

//3.* Добавить фильтрацию по жанрам.

//4. Добавить сортировку по названию книги

//5. Добавить фильтр по рейтингу































// Подсказки

//  Для сортировок. В js сделать две кнопки (или селект). При нажатии на кнопку сортируем глобальный массив books,
//  потом удаляем все книги со страницы и запускаем метод updateListBooks()

// Для фильтров. Сделайте в js список жанров и выведите их списком checkboxes.
// Создайте массив, в котором будет хранится список выбранных жанров. (selectedGenres)
// При нажатии на checkbox с фильтром, нужно добавлять в selectedGenres новый жанр, или, если такой жанр уже есть в этом массиве - удалять
// Сделать кнопку "отфильтровать"
// При нажатии на кнопку запускать метод filter(), который будет проходить по глобальному массиву books и проверять у каждого
// элемента строку genre. То есть, есть ли в этой строке, хотя бы один элемент массива selectedGenres.
// После фильтрации массива books, запускаем метод updateListBooks
// И ещё. Если вы будете изменять массив books, то после первой же фильтрации у вас потеряется часть элементов. Советую создать
//ещё один массив - unfilteredBooks

//Для валидации. Начнем с того, что нужно определить, что значит "заполнены правильно".
// Добавьте в массив, который описывает поля формы, несколько полей: обязательноЗаполнить, минКоличествоСимволов,
// максКоличествоСимволов, сообщениеОбОшибке - тут будет текст, который вы будете где-то выводить