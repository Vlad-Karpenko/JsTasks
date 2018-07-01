// 1) let text = “Годовой бюджет организации составляет 500 тыс долларов в год, что равняется 41,6 тысяч в месяц.
// За 12й месяц наблюдается прирост на 10 тыс долларов”;Задача – найти в строке числа, обозначающие деньги
// (т.е. все числа, после которых есть слово “тыс” или “тысяч”) и заменить их на символы XXX.

//  2) В строке `Маша ела кашу, Саша любит Дашуню, это дети наши`, найти все слова, которые содержат буквосочетание “аш”.

//  3) Проверить, что телефон соответствует заданному формату:+Х(ХХX)-XX-XX-XXX, где Х – это цифра.
// Условия: первый X – может соответствовать одной или двум цифрам. В скобках может от двух до трех цифр.
// Не забудьте экранировать скобки и знак +. Пример:- Правильные номера: `+38(095)-11-22-333`, `+2(07)-10-20-999`
// Неправильные номера: `+380(95)-11-22-333`, `+(077)-66-777-00`


/*1*/
let text = 'Годовой бюджет организации составляет 500 тыс долларов в год,' +
    ' что равняется 41,6 тысяч в месяц. За 12й месяц наблюдается прирост на 10тыс долларов';
let res = text.replace(/\d*,?\d*\s?(тысяч|тыс)/g, 'XXX $1');
console.log(res);

/*2*/
let str = 'Маша ела кашу, Саша любит Дашуню, это дети наши';
console.log(str.match(/[а-я]*аш[а-я]*/gi));

/*3*/
let submit = document.querySelector('input[type=submit]');
let tel = document.getElementById('tel');
let p = document.createElement('p');

submit.addEventListener("click", function () {
    event.preventDefault();
    if (/^\+\d{1,2}\(\d{2,3}\)-\d{2}-\d{2}-\d{3}$/.test(tel.value) == false) {
        p.style.color = 'red';
        document.body.appendChild(p);
        p.innerHTML = "Неправильный формат данных";
    } else {
        p.style.color = "green";
        document.body.appendChild(p);
        p.innerHTML = "Все ок!"
    }

});


