// 1) Придумайте название для переменных, которые описывают:
// а) цену автомобиля (значение может меняться)
// б) имя пользователя (постоянное значение)
// в) информация о юзере (может меняться)
// г) максимальное значение (постоянное)
// д) количество посещений (изменяется)
//
// 2) Что будет выведено в консоле:
//  а)console.log(text);
//  var text = “Hello World!”
// 	console.log(text);
//  б)var str = “This is Mike”;
//  var str = “This is Nikole”;
//  console.log(str);
//  var str = “This is Jason”;
//
// 3) Что будет выведено в консоле:
//   а) console.log(test);
//   let test = “Some string”
// 	 б) let string = “This is first string”;
//   string = string + “ plus additional string”;
//   console.log(string);
//   в) let employees = 10;
//   let employees = 15;
//   console.log(employees)

'use strict';
/*1*/
var price_of_car;
const userName = "Vlad";
var info_about_user;
const maxValue = 1000;
var count_of_visits;

/*2*/
/* Будет выведено undefined, так как переменная будет обьявлена выше, а затем Hello World  */
console.log(text);
var text = "Hello World!";
console.log(text);

/*Будет выведено "This is Nikole", так как оно перезаписало первую строку */
var str = "This is Mike";
var str = "This is Nikole";
console.log(str);
var str = "This is Jason";


/*3*/
/*Будет выведено ошибку Uncaught ReferenceError: test is not defined*/
console.log(test);
let test = "Some string";

/*Произойдет сложение строк*/
let string = "This is first string";
string = string + "plus additional string";
console.log(string);

/*Ошибка, попытка перезаписи переменной типа let*/
let employees = 10;
let employees = 15;
console.log(employees);