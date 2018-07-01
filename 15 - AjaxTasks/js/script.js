// По нажатию на кнопку Get users получить данные из файла users.json и отобразить в списке все имена юзеров.
//
//     При клике на юзера – показать сообщение вида:
//     Сообщение должно быть стилизированным,
//     например div с текстом.
//     При нажатии на крестик, сообщение должно
//     скрыться.


document.addEventListener('DOMContentLoaded', function () {
    let btnGetUser = document.querySelector('button');
    btnGetUser.addEventListener("click", () => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "../data/users.json");
        xhr.send();
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status !== 200) {
                alert(`Error ${xhr.status} : ${xhr.statusText}`)
            } else {
                let user = JSON.parse(xhr.responseText);
                let textField = document.createElement('ul');
                document.body.appendChild(textField);
                for (let i = 0; i < user.length; i++) {
                    textField.insertAdjacentHTML('beforeend', `<li>${user[i].name}</li><br>`);
                }

                let listUser = document.querySelectorAll('li');

                for (let i = 0; i < listUser.length; i++) {
                    listUser[i].addEventListener("click", () => {
                        listUser[i].insertAdjacentHTML('afterend', `<div><span>X</span>name: ${user[i].name}<br>gender: ${user[i].gender}<br>job: ${user[i].job}</div>`);
                        let span = document.querySelectorAll("span");
                        for (let m = 0; m < span.length; m++) {
                            span[m].addEventListener("click", () => {
                                let div = document.querySelectorAll("div");
                                div[m].style.display = 'none'
                            })
                        }
                    });

                }


            }
        })
    });

});