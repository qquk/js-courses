// У вас на странице есть три инпута, чекбокс(галочка) и кнопка "отправить" (итого: пять элементов).

// Ваша задача - написать валидацию. То есть, пользователь заполняет все поля, 
// нажимает на кнопку "Отправить", а вы проверяете все ли поля заполнены корректно.

// Результат вывести в консоль (все хорошо/всё плохо).

// Список полей:

// Имя (больше 2-х символов и меньше - 40)

// Логин (должен быть заполнен/не пустой)

// Пароль (больше 8-ми символов, должна быть цифра, буква, большая буква)

// Галочка - "Прочитал условия" (должна быть включена)

// Если хоть одно из условий не совпадает, то форма не валидна.

const validateForm = () => {
    let form = document.forms[0];
    let inputs = form.querySelectorAll('input[type=text],input[type=password]');
    let valid = true;

    if(inputs.length > 0) {
        for(let i = 0; i < inputs.length; i++) {
            let pattern = inputs[i].dataset.pattern;
            if (pattern !== undefined && !(new RegExp(pattern)).test(inputs[i].value)) {
                valid = false;
            }
        } 
    }
    let agree = form.querySelector('[name=agree]');
    if (agree) {
        valid = valid && agree.checked;
    }
    
    return valid;
}

document.querySelector('button').onclick = () => {
    console.log(validateForm());
}