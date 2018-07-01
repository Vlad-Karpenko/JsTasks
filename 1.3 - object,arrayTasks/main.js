// Объекты:
// - cоздайте пустой объект product
// - добавьте свойство name со значениeм ‘iPhone’
// - добавьте свойство price со значением ‘1000$’
// - добавьте свойство details, которое будет содержать объект со свойствами color и model
// При выводе в консоль информации должен получиться текст
// “Это мобильный телефон iPhone, модель 5s, черного цвета, стоимостью 1000$”
//
// Массивы:
//     - дана строка “This is some random string”. Необходимо вернуть развернутую строку
//     - дан массив чисел [-10, 3, -50, 6, 20, -7].
// 1)Необходимо вернуть массив с положительными числами
// 2)Необходимо вернуть массив, что бы даже отрицательные числа 	стали положительными (смотрим Math), а также отсортировать
// корректно массив чисел

//     - дан массив [1, 2, 3, 4, 5]
// 1)Удалить из массива второй и третий элемент
// 2)Удалить второй и третий элементы а на их место поставить 	“three”, “four”
//
// - вставьте в произвольный массив после третьего элемента любое значение, например [‘I’, ‘am’, ‘an’, ‘array’] => [‘I’, ‘am’, ‘an’, ‘awesome’, ‘array’]
// - дан массив [1, 2, 3, 4, 5] – вернуть сумму элементов массива

//object
let product = {};
product.name = "iPhone";
product.price = "1000$";

product.details = {
    color: "черного",
    model: "5s"
};
console.log("Это мобильный телефон " + product.name + ", модель " + product.details.model + ", " + product.details.color + " цвета, стоимостью " + product.price);

//array
let string = "This is some random string";
let arr = string.split("");
arr.reverse();
let newString = arr.join("");
console.log(newString);

let arrNumber = [-10, 3, -50, 6, 20, -7];
let positivArr = arrNumber.filter(function (num) {
    return num > 0
});
console.log(positivArr);


let allArr = arrNumber.map(function (val) {
    return Math.abs(val);
});
allArr.sort(function (a, b) {
    return a - b;
});
console.log(allArr);


let array = [1, 2, 3, 4, 5];
array.splice(2, 2, "three", "four");
console.log(array);

let mass = ["I", "am", "an", "array"];
mass.splice(3, 0, "awesome");
console.log(mass);


let arr1 = [1, 2, 3, 4, 5];
let sum = 0;
arr1.forEach(function (value) {
    sum += value;
});
console.log(sum);

