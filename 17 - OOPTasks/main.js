/*1*/

/*Есть класс Planet
function Planet(name) {
this.name = name;
this.getName = function () {
return `Planet name is: ${this.name}`;}}
Создать наследника от Planet, который будет называться PlanetWithSatellite
и будет принимать кроме name, название спутника (satelliteName).
Переопределите метод getName для PlanetWithSatellite так, что бы он
возвращал ту же самую строчку + дополнительный текст `The satellite is ` +
steliteName.*/

function Planet(name) {
    this.name = name;
    this.getName = () => {
        return `Planet name is ${this.name}`;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.apply(this, arguments);
    this.satelliteName = satelliteName;
    let oldGetName = this.getName;
    this.getName = () => {
        let originalGetName = oldGetName.call(this);
        return `${originalGetName}. The satellite is ${this.satelliteName}`;
    }
}

let earth = new PlanetWithSatellite("Earth", "Moon");
console.log(earth.getName());
/*2*/

/*Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод
“получить количество этажей” и метод “установить количество этажей”).
Создайте наследников этого класса:
классы “Жилой дом” и “Торговый центр”.
У жилого дома появится свойство “количество квартир на этаже”, а метод
“получить количество этажей” {этажи: 5, всегоКвартир: 5 * количествоКвартир}
У торгового центра появится свойство “количество магазинов на этаже”, а
метод “получить количество этажей” {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
От каждого класса создать экземпляр (дом, торговый центр)*/

class Building {
    constructor(title, countOfFloor) {
        this.title = title || "MyHouse";
        this.countOfFloor = countOfFloor;
    }

    get countFloor() {
        return this.countOfFloor;
    }

    set countFloor(countOfFloor) {
        this.countOfFloor = countOfFloor;
    }
}

class House extends Building {
    constructor(title, countOfFloor, countFlatInFloor) {
        super(title, countOfFloor);
        this.countFlatInFloor = countFlatInFloor;
    }

    get countFloor() {
        let countFloor = super.countFloor;
        return `Этажи:${countFloor}, всего квартир:${countFloor * this.countFlatInFloor}`
    }
}

let house = new House("MyHouse", "5", "4");
console.log(house.countFloor);


class Shop extends Building {
    constructor(title, countOfFloor, countShopInFlat) {
        super(title, countOfFloor);
        this.countShopInFlat = countShopInFlat;
    }

    get countFloor() {
        let countFloor = super.countFloor;
        return `Этажи:${countFloor}, всего магазинов:${countFloor * this.countShopInFlat}`
    }
}

let shop = new Shop("MyHouse", "3", "15");
console.log(shop.countFloor);