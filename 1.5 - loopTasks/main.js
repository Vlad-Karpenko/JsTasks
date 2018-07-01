// 1) Дана строка ‘I am studying in the easy code’. Сделать первую букву каждого слова в верхнем регистре.
// Использовать циклы for и while
// 2)  Дана строка ‘tseb eht ma I’ . С помощью циклов развернуть строку таким образом что бы I стала на первое место и т.д.
// 3)Факториал числа – произведение всех натуральных чисел от 1 до n включительно: 5! = 5 * 4 * 3 * 2 * 1.
// C помощью циклов вычислить факториал 10.
// 4) Используя циклы создать строку:
//     “Считаем до 10-ти: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10”
// 5) Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль

/*1 через for*/
let string = "I am studying in the easy code";
let array = string.split(" "); // преобразовываем в массив
for (let i = 0; i < array.length; i++) { // перебираем созданные элементы
    array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1); // первый символ в каждом элементе в верхний регистр + остальные символы элемента
}
let newString = array.join(" ");//обратно в строку
console.log(newString);

/*1 через while*/
let array2 = string.split(" ");
let y = 0;
while (y < array2.length) {
    array2[y] = array2[y].charAt(0).toUpperCase() + array2[y].slice(1);
    y++;
}
let newString2 = array2.join(" ");
console.log(newString2);


/*2*/
let str = "tseb eht ma I";
let new_str = ""; // для записи перевернутой строки
for (let i = str.length - 1; i >= 0; i--) {//берем длину строки -1, чтобы взять последний символ и выполняем пока i>=0, на каждой итерации уменьшаем на 1 символ
    new_str += str[i];//присваиваем новой строке символы
}
console.log(new_str);


/*3*/
let fact = 0;
let val = 1;
for (let i = 1; i <= 10; i++) {
    val *= i;
}
fact += val;
console.log(`10! = ${fact}`);

/*4*/
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
let newStr = arr.join(",");
console.log(`Считаем до 10: ${newStr}`);

/*5*/
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0)
        console.log(i)
}
