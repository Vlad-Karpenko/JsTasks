document.addEventListener('DOMContentLoaded', function () {
    /*DOM*/
    // Зная html структуру, с помощью изученных методов вывести в консоль:
    // Head
    // Body
    // Все дочерние элементы body
    // Первый div и:
    // а) вывести в консоль все дочерние узлы
    // б) вывести все дочерние узлы кроме первого и последнего
    // Для навигации по DOM использовать методы, которые возвращают только элементы.
    console.log(document.head.tagName);
    console.log(document.body.tagName);
    console.log(document.body.children);
    let divFirst = document.querySelector('div');
    console.log(divFirst.children);
    console.log(Array.prototype.slice.call(divFirst.children, 1, -1));

});


