document.addEventListener("DOMContentLoaded", function () {
    // Создайте макет сайта, который при заходе на него пользователя в первый раз, показывает сообщение с просьбой ввести
    // имя пользователя в поле формы.  При следующем заходе на сайт (при перезагрузке) – пользователь видит
    // приветственный текст: “Привет” + сохраненное имя. При этом форма и текст с просьбой ввода текста – скрыты.

    let input = document.querySelector('input');
    let form = document.forms.hello;
    form.addEventListener('submit', function () {
        if (/^[A-Za-zА-Яа-яЁё]+$/.test(input.value) === false) {//проверяем на недопустимые значение,
            // чтобы при выводе приветствия не было пустоты и т.д. Разрешено только латинница и киррилица
            return false
        } else {//если все норм, то записываем значение
            localStorage.setItem("name", input.value);
        }
    });
    if (localStorage.getItem('name')) {//если значение в хранилище есть, то скрываем форму и выводим приветствие
        form.style.display = "none";
        let p = document.createElement('p');
        document.body.appendChild(p);
        p.innerHTML = `Привет ${localStorage.getItem('name')}`;
    }

});