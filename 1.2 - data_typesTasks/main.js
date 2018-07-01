// Числа:
//     1) Используя Math найти максимальное и минимальное число из ряда 	чисел 17,21,55,78,31,2,9,43
//     2) Получить число из строки “100$”
// 	   3) Проверить результат вычисления 0.6+0.7 . Добиться того, что бы 	результатом было (1.3)
//     4) Работа с Max.random()
//       - получить случайное число и округлить его до 2 цифр после запятой
//       - получить случайное число от 0 до 100

// Строки:
// let string = ‘some test string’
// 1) Получить первую и последнюю букву строки
// 2) Сделать первую и последнюю букву в верхнем регистре
// 3) Найти положение слова ‘string’ в строке
// 4) Найти положение второго пробела
// 5) Получить строку с 5-го символа длиной 4 буквы
// 6) Получить строку с 5-го по 9-ый символ
// 7)Получить новую строку из исходной, путем удаления последних
// 6-ти символов
// 8)Получить число из строки ‘$300’


//Number
/*1*/
console.log(Math.max(17, 21, 55, 78, 31, 2, 9, 43));
console.log(Math.min(17, 21, 55, 78, 31, 2, 9, 43));

/*2*/
let $ = "100$";
console.log(parseInt($));

/*3*/
console.log(((0.6 * 10) + (0.7 * 10)) / 10);
console.log((0.6 + 0.7).toFixed(1));

/*4*/
let rand = Math.random();
console.log(rand.toFixed(2));

let rand_2 = (Math.random() * 100);
console.log(rand_2.toFixed());

//String
let string = "some test string";
console.log(string.substr(0, 1), string.substr(-1));

let newString = (string.substr(0, 1).toUpperCase() + string.slice(1, -1));
let newString_2 = (newString + string.substr(-1).toUpperCase());
console.log(newString_2);

console.log(string.indexOf("string"));

console.log(string.indexOf(" ", 5));

console.log(string.substr(5, 4));

console.log(string.substring(5, 9));

let string_2 = (string.substring(0, string.length - 6));
let string_3 = (string.slice(0, -6));
console.log(string_2);
console.log(string_3);

let $$ = ("$300");
let $$$ = $$.split("$");
console.log($$$[1]);


