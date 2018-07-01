// В папке task2 явных ошибок в консоли нет. Но функция не возвращает ожидаемый результат – количество рабочих.
//     Необходимо разобраться и исправить.Любые ошибки в данных (если ожидается число, а получено не число) – заменить на ноль.

    function getTotalAmount(list, field) {
    var total = 0,
        index;

    for (index = list.length; index--;) {
        if (isNaN(parseInt(list[index][field])) == true) {//если преобразованное поле в число == NaN, то присвоить полю 0
            list[index][field] = 0;
        }
        total += parseInt(list[index][field]);// сумировать кол-во рабочик, которые преобразованы к числу
    }

    return total;
}

document.write(getTotalAmount(workers, 'workers'));
