// В папке task1 открыть index.html в браузере. В консоли будет ошибка.Найти причину ошибки и исправить ее.

    function getAllNames(users) {
    return users.map(function (user) {
        if ("first_name" in user == false) {//если нет свойства, то не включаем, возвращаем false
            return false
        } else {//иначе присваиваем
            var name = user.first_name;
        }
        return {
            name: name,
            length: name.length
        };

    });
}

getAllNames(users);