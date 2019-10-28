// Есть класс Planet
// function Planet(name) {
//     this.name = name;
//     this.getName = function () {
//         return 'Planet name is ' + this.name;
//     }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.call(this, name);
    this.satelliteName = satelliteName;
    let parentGetName = this.getName;
    this.getName = function() {
        let originalText = parentGetName.call(this);
        return originalText + ' ' + 'The satellite is ' + this.satelliteName;
    }
}

let earth = new PlanetWithSatellite('earth', 'moon');
console.log(earth.getName());

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” 
//     и метод “установить количество этажей”).
// Создайте наследников этого класса:
// классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование 

// У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” 
// должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

// У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество 
// этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экземпляр (дом, торговый центр)

function Building(name, floors) {
    this.name = name;
    this.floors = floors;
    this.getFloors = function() {
        return this.floors;
    }
    this.setFloors = function(value) {
        this.floors = value;
    }
}

console.log((new Building('Building', 5)).getFloors());

function ApartmentBuilding(name, floors, flats) {
    Building.call(this, name, floors);
    this.flats = flats;
    const parentGetFloors = this.getFloors;
    this.getFloors = function() {
        return {
            floors: parentGetFloors.call(this),
            flats: parentGetFloors.call(this) * this.flats,
        }
    }
}

console.log((new ApartmentBuilding('Apartments', 5, 8)).getFloors());

function ShoppingCenter(name, floors, magazines) {
    Building.call(this, name, floors);
    this.magazines = magazines;
    const parentGetFloors = this.getFloors;
    this.getFloors = function() {
        return {
            floors: parentGetFloors.call(this),
            magazines: parentGetFloors.call(this) * this.magazines,
        }
    }
}

console.log((new ShoppingCenter('Shoppingcenter', 5, 28)).getFloors());

// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” 
// (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). 
// Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров
//  (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” 
//  должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function() {
    return {
        name: this.name,
        price: this.price
    }
}
console.log((new Furniture('desc', 50)).getInfo());

function OfficeFurniture(name, price, color) {
    Furniture.call(this, name, price);
    this.color = color;
}

let oFurniture = new OfficeFurniture('desc', 50, 'black');
oFurniture.getInfo = function() {
    return {...Furniture.prototype.getInfo.call(this), color: this.color};
}
console.log(oFurniture.getInfo());

function HomeFurniture(name, price, material) {
    Furniture.call(this, name, price);
    this.material = material;
}

let hFurniture = new HomeFurniture('sofa', 50, 'leather');
hFurniture.getInfo = function() {
    return {...Furniture.prototype.getInfo.call(this), material: this.material};
}
console.log(hFurniture.getInfo());


// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” 
// и методом “получить информацию” (метод должен вывести имя и дату регистрации).
//  Метод должен быть объявлен с помощью прототипов (Func.prototype...)
//   Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), 
// содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию
//  о дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User(name, registerDate) {
    this.name = name;
    this.registerDate = registerDate;
}

User.prototype.getInfo = function() {
    return {
        name: this.name,
        registerDate: this.registerDate
    }
}

function Admin(name, registerDate, superAdmin) {
    let _superAdmin;
    User.call(this, name, registerDate);
    this._superAdmin = superAdmin;
    
}

Admin.prototype.getInfo = function() {
    return {...User.prototype.getInfo.call(this), superAdmin: this._superAdmin};
}

console.log((new Admin('q', '2019.10.29', true)).getInfo());


function Guest(name, registerDate, valid) {
    let _valid;
    User.call(this, name, registerDate);
    this._valid = valid;
}

Guest.prototype.getInfo = function() {
    return {...User.prototype.getInfo.call(this), valid: this._valid};
}

console.log((new Guest('q', '2019.10.29', 2)).getInfo());