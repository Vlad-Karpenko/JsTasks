/*1*/
// Создать конструктор для производства автомобилей. Конструктор должен
// принимать марку автомобиля и возраст машины.
// Конструктор должен иметь метод, который возвращает марку автомобиля,
// а второй метод должен возвращать год производства автомобиля (год
// текущий минус возраст автомобиля, используйте Date для получения
// текущего года).

function Car(brand, year) {
    this.brand = brand;
    this.year = year;
    this.getBrand = () => {
        return (this.brand.slice(0, 1).toUpperCase() + this.brand.slice(1));
    };
    this.getYear = () => {
        let now = new Date();
        return (now.getFullYear() - this.year);
    }
}

let lexus = new Car('lexus', 2);
let porsche = new Car('porsche', 4);


/*2*/
// Создать класс, который создает экземпляры, работающие со строкой и
// имеет следующие свойства и методы:
//     а. свойство “строка” будет содержать строку
//     б. методы для получения и установки строки
//     в. метод для получения длины строки
//     г. при вызове toString() вернуть строку
//     д. при приведении объекта к числу – вернуть длину строки

class MyString {
    constructor(string) {
        this.string = String(string);

    }

    getString() {
        return this.string
    }

    setString(string) {
        this.string = String(string);
    }

    getLengthString() {
        return this.string.length;
    }

    toString() {
        return this.string
    }

    valueOf() {
        return this.string.length;
    }
}

let str = new MyString(34);
