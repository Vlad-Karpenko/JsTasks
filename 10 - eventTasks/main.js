document.addEventListener("DOMContentLoaded", function () {
    // 1)  Создать тег “a” с атрибутом “href=‘www.google.com’ ” и текстом “Перейти по ссылке”(Можете Ваш вариант текста).
    // При клике на элемент, отменить переход по ссылке и вывести уведомление, что переход на www.google.com отменен
    // (значение сайта взять из атрибута);
    // 2) Добавление к первой задаче, при наведении курсора на элемент, менять фон и цвет текста (аналог css a:hover).
    // 3) Создать текстовое поле input type=“text”. При вводе текста дополнительно отображать данный текст в отдельном блоке
    // (span, p и т.д.)
    // 4) Текстовое поле input. Разрешить ввод только чисел.(Подсказка: это определенный диапазон keyCode значений).
    // 5) Есть HTML структура <ul><li></li></ul>. Создайте к примеру список фруктов.
    // При клике на li элемент, выводить его название. Попробуйте решить через обработку событий на li элементах,
    // а так же через делегирование.
    // 6) HTML из предыдущего примера, на li идентичные обработчики + на ul повесить обработчик onclick, который будет
    // выводить уведомление “Фрукты распроданы”. Данное событие не должно сработать в случае, если мы кликнем по li.


    /*1*/
    let link = document.querySelector('a');
    link.addEventListener('click', function (event) {
        event.preventDefault();
        alert(`Переход по ссылке ${link.href} отменен`)
    });

    /*2*/
    link.addEventListener('mouseover', function (event) {
        this.style.cssText = "color:yellow;background:blue";
    });
    link.addEventListener('mouseout', function (event) {
        this.style.cssText = ""
    });

    /*3*/
    let textField = document.querySelector('input');
    let span = document.createElement('span');
    document.body.appendChild(span);
    textField.addEventListener('keyup', function () {
        span.innerHTML = textField.value;
    });

    /*4*/
    let formNumb = document.forms.numberOnly;
    let numField = formNumb.querySelector('input');
    numField.addEventListener('keypress', function (event) {
        if ((event.keyCode > 47) && (event.keyCode <= 57)) {
            numField.removeAttribute('readonly')
        } else {
            numField.setAttribute('readonly', "")
        }
    });

    /*5*/
    /*обработка через li*/
    let ul = document.querySelector('ul');
    let li = ul.querySelectorAll('li');
    let p = document.createElement('p');
    document.body.appendChild(p);
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function (event) {
            p.innerHTML = this.textContent;
        })
    }

    /*делегирование*/
    ul.addEventListener("click", function (event) {
        let elem = event.target;
        if (elem.tagName == "LI") {
            p.innerHTML = elem.textContent;
        }

    });

    /*6*/
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function (event) {
            p.innerHTML = this.textContent;
            event.stopPropagation();
        });

    }

    ul.addEventListener("click", function (event) {
        alert("Фрукы расспроданы")
    })
});