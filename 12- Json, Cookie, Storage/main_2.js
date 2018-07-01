document.addEventListener("DOMContentLoaded", function () {
    // Создать страницу с формой: поля для ввода “имени”, “пароля” и кнопка “войти”.  Предположим у нас есть юзер,
    //     у которого имя и пароль “mike” и “qwerty” соответственно. При вводе этих данных – скрыть форму и показать
    // блок с сообщением: “Привет mike! Ты успешно зашел в свой кабинет”. Если данные имени и пароля не совпали,
    //     вывести красное сообщение ( при этом форму не скрывать). После успешного введения данных пусть юзер будет
    // иметь возможность перезагружать страницу в течении минуты без запроса данных (куки с expires).

    /*переменная для получения куки имени*/
    let cookieValueUser = document.cookie.replace(/(?:(?:^|.*;\s*)userName\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    document.cookie = "userName=mike";

    /*переменная для получения куки пароля*/
    let cookieValuePassword = document.cookie.replace(/(?:(?:^|.*;\s*)password\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    document.cookie = "password=qwerty";

    /*переменная для получения куки статуса авторизации пользователя*/
    let cookieValueLogged = document.cookie.replace(/(?:(?:^|.*;\s*)loggedIn\s*\=\s*([^;]*).*$)|^.*$/, "$1");


    let form = document.forms.auth;
    let nameField = form.querySelector('input[type=text]');
    let passwordField = form.querySelector('input[type=password]');
    let p = document.createElement('p');
    let pError = document.createElement('p');


    if (cookieValueLogged.length) {// если переменная о статусе существует, то выводим кабинет
        document.body.appendChild(p);
        p.innerHTML = `Привет ${cookieValueUser}! Ты успешно зашел в свой кабинет.`;
        form.style.display = "none";
        pError.innerHTML = ""
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        /*если значения полей соответствуют кукам, то создаем куку о статусе и выводим кабинет*/
        if (nameField.value == cookieValueUser && passwordField.value == cookieValuePassword) {
            let exp = new Date();
            exp.setMinutes(exp.getMinutes() + 1);
            document.cookie = "loggedIn=true;expires=" + exp.toUTCString();
            document.body.appendChild(p);
            p.innerHTML = `Привет ${cookieValueUser}! Ты успешно зашел в свой кабинет.`;
            form.style.display = "none";
            pError.style.display = "none"

        } else {//иначе выводим ошибку
            pError.style.color = "red";
            document.body.appendChild(pError);
            pError.innerHTML = "Данные неверны"
        }
    });
});