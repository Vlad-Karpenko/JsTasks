/*DOM*/

//1)  Создать функцию, которая принимает два элемента. Функция проверяет является ли первый элемент родителем для второго:
//     isParent(parent, child);
//
// isParent(document.body.children[0], document.querySelector(‘mark’));
// // true так как первый div является родительским элементом для mark
//
// isParent(document.querySelector(‘ul’), document.querySelector(‘mark’));
// // false так как ul НЕ явяется родительским элементом для mark
// 2) Получить список всех ссылок, которые не находятся внутри списка ul;
// 3) Найти элемент, который находится перед и после списка ul;
// 4) Посчитать количество элементов li в списке;

/*1*/
function isParent(parent, child) {
    while (child.parentNode != null) {
        if (child.parentNode == parent) {
            return true;
        }
        child = child.parentNode;
    }
    return false;
}

/*2*/
let ul = document.querySelector('ul');
let a = document.getElementsByTagName('a');

for (let i = 0; i < a.length; i++) {
    if (a[i].parentNode.tagName != "LI") {
        console.log(a[i])
    }
}

/*3*/
let listUl = document.getElementsByTagName('ul')[0];
let prev = listUl.previousElementSibling;
let next = listUl.nextElementSibling;
console.log(prev, next);

/*4*/
let li = listUl.getElementsByTagName('li');
console.log(li.length);


/*Манипуляция содержимым*/
//
// 1) Не используя innerHTML, добавить в список несколько li c классом ‘new-item’ и текстом ‘item’ + номер li;
// <ul>
// <li><a href=“#”>Link1</a></li>
// 	…
// <li class=“new-item”>item 5</li>
// <li class=“new-item”>item 6</li>
// </ul>
// 2) Создать три элемента strong и добавить их в конец ссылок, которые находятся внутри списка ul (в каждую ссылку один - strong)
// 3) В начало документа (в начало body) добавить картинку img с атрибутом src и alt. В src добавьте реальный URL к картинке.
// 4) Найти на странице элемент mark и добавить в конец содержимого слово “green”.
// 5) Отсортировать элементы списка li в обратном порядке.

/*1*/
let text;
let Li;
for (let i = 5; i < 7; i++) {
    Li = document.createElement('li');
    Li.className = "new-item";
    text = document.createTextNode("item " + i);
    Li.appendChild(text);
    listUl.appendChild(Li);
}

/*2*/
let link = listUl.querySelectorAll('a');
for (let i = 0; i < link.length; i++) {
    let strong = document.createElement('strong');
    link[i].insertAdjacentElement('beforeend', strong);
}

/*3*/
let img = document.createElement('img');
img.setAttribute('src', 'https://www.google.ru/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&u' +
    'act=8&ved=2ahUKEwjEver8tMHbAhW0hKYKHc0HAlgQjRx6BAgBEAU&url=https%3A%2F%2Ffifarus.ru%2Ffifa-world-cup-2018-v' +
    '-fifa-18&psig=AOvVaw285Re01EWQtLYrLGUne_R7&ust=1528456133766283');
img.setAttribute('alt', 'world cup');
document.body.insertBefore(img, document.body.children[0]);

/*4*/
let mark = document.querySelector('mark');
let green = document.createTextNode(' green');
mark.appendChild(green);

/*5*/
let liRev = listUl.querySelectorAll('li');
for (let i = liRev.length - 1; i >= 0; i--) {
    console.log(liRev[i]);
}

/*Nodes*/
// 1) Найти параграф и получить его текстовое содержимое (только текст);
// 2) Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет – вывести 0);
// 3) Создать функцию, которая возвращает массив, который состоит из текстового содержимого ссылок внутри списка ul, пример:
// getTextFromUl(ul)  [‘Link1’, ‘Link2’, ‘Link3’, ‘Link4’];
// 4) В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
//     -text-<a href=“#”>reprehendunt</a>-text-<mark>nemore</mark>-text-

/*1*/
let p = document.querySelector('p');
console.log(p.textContent);

/*2*/
function domNodes(nodes) {
    let info = {
        typeNodes: nodes.nodeType,
        name: nodes.nodeName,
        countChild: nodes.childNodes.length
    };
    return `Тип узла - ${info.typeNodes}, название узла - ${info.name}, кол-во дочерних эл.- ${info.countChild}`;
}

/*3*/
function getTextLink() {
    let arr = [];
    for (let i = 0; i < link.length; i++) {
        arr.push(link[i].textContent);
    }
    return arr;
}

console.log(getTextLink());

/*4*/
for (let i = 0; i < p.childNodes.length; i++) {
    if (p.childNodes[i].nodeType == 3) {
        p.childNodes[i].textContent = "-text-"
    }
    console.log(p.childNodes[i])
}

/*Работа со стилями*/

// 1) Вывести в консоль цвет фона элемента mark.
// 2) С помощью JS поменять цвет фона элемента mark на синий.
// 3) Узнать цвет текста первой ссылки в документе.
// 4) Узнать размер шрифта и семейство шрифта, которые применены к параграфу.
// 5)  Сделать все ссылки внутри списка UL красного цвета (цвет текста).
// 6) Спрятать ссылку, стоящую после списка UL

/*1*/
console.log(getComputedStyle(mark).backgroundColor);

/*2*/
mark.style.backgroundColor = "blue";
console.log(getComputedStyle(mark).backgroundColor);

/*3*/
let firstLink = document.querySelector('a');
console.log(getComputedStyle(firstLink).color);

/*4*/
console.log(getComputedStyle(p).fontSize, getComputedStyle(p).fontFamily);

/*5*/
for (let i = 0; i < link.length; i++) {
    link[i].style.color = 'red';
}

/*6*/
let UlLastLink = document.querySelector('ul~a');
UlLastLink.style.display = "none";







