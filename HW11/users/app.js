// 1. Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com.
// Получив ответ от сервера вывести имена пользователей на страницу.
// При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем.
// Для визуальной части можно использовать bootstrap или другие фреймворки.
// 2.*Создать форму добавления пользователя состоящая из полей name, email, username, phone,
//     website при сабмите формы сделать POST запрос на сервер после ответа от сервера добавлять полученного
// пользователя на страницу.

    const ARRAY_FIELDS = [
    {name: 'name', label: 'Name'},
    {name: 'username', label: 'User Name'},
    {name: 'email', label: 'Email'},
    {name: 'phone', label: 'Phone'},
];

const modal = $('#user-modal');

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText))
    }
}

const http = new CustomHttp();

http.get("https://jsonplaceholder.typicode.com/users", (res) => {
    const users = JSON.parse(res);
    const userForRendering = new User();
    users.forEach((user) => {
        userForRendering.render(user);
    });
});

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
        return html;
    }
}

class Form {
    constructor(selector) {
        this.selector = selector;
        this.submitButton = document.getElementById('user-submit');
        this.init();
    }
    init() {
        const form = document.createElement('form');
        const bookForm = document.querySelector(this.selector);
        ARRAY_FIELDS.forEach((field) => {
            const inputName = new InputField(field);
            const html = inputName.render();
            form.insertAdjacentHTML('beforeend', html);
        });
        bookForm.append(form);
        this.submitButton.addEventListener('click', this.addUser.bind(this))
    }
    addUser() {
        const user = ARRAY_FIELDS.reduce((acc, {name}) => {
            const field = document.querySelector(`[name='${name}']`).value;
            acc = {...acc, [name] : field}
            return acc;
        },{});
        http.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(user), (res) => {
            const result = JSON.parse(res);
            if (result.id !== undefined) {
                const userForRendering = new User();
                userForRendering.render({id: result.id, ...user});
                modal.modal('hide');
            }
        });
    }

}

const form = new Form('#user-form');

class User {
    constructor() {
        this.wrapper = document.querySelector('#users');
    }
    handleClick(event) {
        event.preventDefault();
        http.get(`https://jsonplaceholder.typicode.com/users/${event.target.dataset.id}`, (res) => {
            const user = JSON.parse(res);
            const userForRendering = new Profile();
            userForRendering.render(user);
            window.scrollTo(0, 0);
        });
    }
    render(user) {
        const html = `<div class="media text-muted pt-3">
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark"><a href="#" data-id="${user.id}">${user.email}</a></strong>
                        ${user.name} tel. ${user.phone}            
                     </p>
                </div>`;
        this.wrapper.insertAdjacentHTML('beforeend', html);
        const userLink= this.wrapper.querySelector(`a[data-id='${user.id}']`);
        userLink.addEventListener('click', this.handleClick);
    }
}

class Profile {
    constructor() {
        this.wrapper = document.querySelector('#user-info')
    }
    render(user) {
        const html = `<h4>
                   ${user.name}
                </h4>
                <div class="row">
                    <div class="col-md-6">
                        <label>Email</label>
                    </div>
                    <div class="col-md-6">
                        <p>${user.email}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label>Phone</label>
                    </div>
                    <div class="col-md-6">
                        <p>${user.phone}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label>Website</label>
                    </div>
                    <div class="col-md-6">
                        <p>${user.website}</p>
                    </div>
                </div>`;
        this.wrapper.innerHTML = '';
        this.wrapper.insertAdjacentHTML('beforeend', html);
    }
}

