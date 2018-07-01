document.addEventListener("DOMContentLoaded", function () {
// 1) Найти в коде список UL и добавить класс ‘list’
// 2) Найти в коде ссылку, находящуюся после списка UL и добавить ей id=“link”
// 3) На элементы списка li через один (начиная с самого первого) – установить клсс “item”
// 4) На все ссылки в примере установить класс “custom-link”
// 5)Подключите файл стилей, и опишите там класс .toUpperCase {text-transform: upperCase}.
// Далее найдите на страницу параграф и добавьте ему созданный класс.

        /*1*/
    let ul = document.querySelector('ul');
    ul.className = "list";
    /*2*/
    let linkafterUl = document.querySelector('ul~a');
    linkafterUl.setAttribute("id", "link");
    /*3*/
    let li = ul.querySelectorAll('li');
    for (let i = 0; i < li.length; i += 2) {
        li[i].className = "item";
    }
    /*4*/
    let link = document.querySelectorAll('a');
    for (let i = 0; i < link.length; i++) {
        link[i].className = "custom-link"
    }
    /*5*/
    let p = document.querySelector('p');
    p.className = "toUpperCase";
});