// 1) Создать объект, который описывает ширину и высоту прямоугольника,
//     а также может посчитать площадь фигуры:
//     let rectangle = {width: …, height:…, getSquare:…};
// 2) Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
//     let product = {
//         price: 10,
//         discount: ’15%’ ,
// …
// }

// 3) Дан объект и функция:
//     let user = { name: “John” };
// function getUserName() {…};
// Внести в этот код изменения таким образом, что бы можно было вызвать user.getUserName() и получить “John”

// 4) Создать объект, у которого будет свойство “высота” и метод “увеличить высоту на один” . Метод должен возвращать новую высоту:
//     obj.height = 10;
// obj.inc();   //Придумайте свое название метода
// obj.height  // 11
// price.getPrice(); // 10
// price.getPriceWithDiscount();  // 8.5

// 5) Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку вызовов.
//     let numerator = {
//     value: 1,
//     double: function () {…},
//     plusOne: function () {…},
//     minusOne: function () {…}
// }
//
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value;  // 3

// 6) Что выведет код и почему?
//
//     function getList() { return this.list };
// let users = {
//     length: 4,
//     list: [“Abraham”, “John”, “James”, “Mike”]
// }
// getList();  ?
//     users.getList = getList;
// users.getList();   ?
//     getLists(users);  ?

// 7) Даны объект и функция:
//
//     let sizes = { width: 5, height: 10 };
// function getSquare() { return this.width * this.height };
// Не изменяя функцию или объект, получить результат функции getSquare для объекта size

// 8) Дан массив let numbers = [4, 12, 0, 10, -2, 4]. Используя ссылку на массив numbers и Math.min, найти минимальный элемент массива

// 9) Дан объект:
//     let element = {
//         height: “15px”,
// marginTop: “5px”,
// marginBottom: “5px”,
// getFullHeight: function () {
//     return this.height + this.marginTop + this.marginBottom;  //тут ошибки
// }
// };
// Исправить метод getFullHeight таким образом, что бы можно было вычислить сумму трех слагаемых (высота плюс отступы);
//
// Для другого объекта block: {height: “5px”, marginTop: “3px”, marginBottom: “3px”}, вычислить полную высоту getFullHeight, используя для этого объект element. В объект ничего не дописывать.

/*1*/
let rectangle = {
    width: 100,
    height: 200,
    getSquare: function () {
        return this.width * this.height
    }
};
console.log(`${rectangle.getSquare()}px`);

/*2*/
let product = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price
    },
    getPriceWithDiscount: function () {
        return this.price - (this.price * parseFloat(this.discount)) / 100
    }
};
console.log(product.getPrice());
console.log(product.getPriceWithDiscount());

/*3*/
let user = {
    name: 'John',
    getUserName: getUserName // методу присволии ф-ю
};

function getUserName() {
    return this.name;
}

console.log(user.getUserName());

/*4*/
let objHeight = {
    height: 10,
    getNewHeight: function () { // при вызове метода height увеличивается на 1
        this.height++
    }
};

/*5*/
let numerator = {
    value: 1,
    double: function () {
        this.value = this.value * 2;
        return this;
    },
    plusOne: function () {
        ++this.value;
        return this
    },
    minusOne: function () {
        --this.value;
        return this
    }
};


/*6*/
function getList() {
    return this.list
};

let users = {
    length: 4,
    list: ['Abraham', 'John', 'James', 'Mike']
};
getList();//undefined, так как в функции нет переменной list
users.getList = getList;// создали метод у обьекта user и присвоили ему функцию, выведет код этой ф-и
users.getList();// выведет массив имен, так как выше созданный метод, в котором возвращается свойство list этого обьекта
// getLists.call(users);//ошибка, нет метода getLists

/*7*/
let sizes = {
    width: 5,
    height: 10
};

function getSquare() {
    return this.width * this.height
};

getSquare.call(sizes);//call в качесвте this указывает методу getSquare взять обьект sizes

/*8*/
let numbers = [4, 12, 0, 10, -2, 4];
console.log(Math.min.apply(null, numbers));

/*9*/
let element = {
    height: '15px',
    marginTop: '5px',
    marginBottom: '5px',
    getFullHeight: function () {
        return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(this.marginBottom);
    }
};

let block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px'
};
console.log(element.getFullHeight.call(block));