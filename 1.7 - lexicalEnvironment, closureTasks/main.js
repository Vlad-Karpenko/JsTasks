//ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ

/*1*/
//  UNDEFINED из-за того что переменная инициализирована после вызова ф-и, если поставим перед тогда MIKE
getBigName(userName);
function getBigName(name) {
    name = name+ "";
    return name.toUpperCase();
}

var userName = 'Mike';

/*2*/
function test() { // вернет JOHN, так как в аргументы передается переменная userName
    var name = 'Mike';
    return getBigName(userName);
}

function getBigName(name) {
    name = name + "";
    return name.toUpperCase();
}

var userName = 'John';
test();

/*3*/
var food = 'cucumber';// выведет cucumber, так как переменная food=bread в локальной области видимости, getFood имеет globalLexEnv
// поэтому будет брать переменную из этого окуржения
(function () {
    var food = 'bread';
    getFood();
})();

function getFood() {
    console.log(food);
}

/*ЗАМЫКАНИЕ*/

/*1*/
var getDollar, // вернет 0, так как самовызывающая ф-я берет локальные данные, переменная dollar = 0, а в глобальном контексте getDollar это переменная, а не ф-я
    dollar;
(function () {

    getDollar = function () {
        return dollar;
    }
})();
dollar = 30;
getDollar();

/*2*/
var greet = 'Hello';
(function () {
    var text = 'World';
    console.log(greet + text);//выведет HelloWorld. Сначала будет искать переменные в своем лексичесском окружении, найдет там text
    //потом, если не все переменные найдены пойдет в выше, в глобальное окружение, в данном случае и найдет там переменную greet
})();
// console.log(greet + text);//выведет ошибку так как переменная text в этом лексичесском окружении не найдена

/*3*/
// Создайте функцию, которая бы умела делать:
//     minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); //10
// minus()(6); // 6
// minus()(); //0
function minus(num1) {
    let obj = function diff(num2) {
        if (num1 == undefined && num2 == undefined) {
            return 0;
        } else if (num2 === undefined) {
            num2 = 0;
            return num1 + num2;
        } else if (num1 === undefined) {
            num1 = 0;
            return num1 + num2;
        } else {
            return num1 - num2;
        }

    };
    return obj;

};

/*4*/
// Реализовать функцию, которая умножает и умеет запомнить возвращаемый результат между вызовами:
//     function multiplyMaker …
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2*2);
// multiply(1); // 4 (4 * 1);
// multiply(3); //12 (4 * 3);
// multiply(10); // 120 (12 * 10);
function multiplyMaker(res) {
    let obj2 = function (n) {
        return res *= n;
    };
    return obj2;
}

let mult = multiplyMaker(2);


let counter = (function () {
    let i = 0;

    function inc() {
        return ++i;
    }

    return {
        inc: inc
    }
})();

/*5*/
// Реализовать модуль, который работает со строкой и имеет методы:
//     а) установить строку:
//     - если передано пустое значение, то установить пустую строку
// - если передано число, то число привести к строке
// б) получить строку
// в) получить длину строки
// г) получить строку перевертыш (первый символ становится последним и т.д.)
let myString = (function () {
    let string;

    function setString(value) {
        if (value === undefined) {
            value = " ";
        } else if (typeof value == "number") {
            value = String(value);
        }
        string = value;

    }

    function getString() {
        return string;
    }

    function getLengthString() {
        return string.length;
    }

    function getReverseString() {
        return string.split("").reverse().join("");

    }

    return {
        setString: setString,
        getString: getString,
        getLengthString: getLengthString,
        getReverseString: getReverseString
    };

})();

/*6*/
// Создать модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в ступень.
// Конечное значение необходимо округлить до двух знаков после запятой (значение должно храниться в обычной переменной, не в this…)
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести значение
//
// Также сделать возможность вызывать методы цепочкой:
//     модуль.установитьЗначение(10).вСтупень(2).узнатьЗначение(); //100

let calculator = (function () {
    let res;

    function setNum(value) {
        if (typeof value !== "number") {
            console.log("Введите число, а не строку")
        } else {
            res = value;
        }
        return this;
    }

    function getNum() {
        res = parseFloat(res.toFixed(2));
        console.log(res);
        return this;
    }

    function plus(inc) {
        res += inc;
        return this;
    }

    function minus(diff) {
        res -= diff;
        return this;
    }

    function multiplication(mult) {
        res *= mult;
        return this;
    }

    function division(div) {
        res /= div;
        return this;
    }

    function power(m) {
        res = Math.pow(res, m);
        return this;
    }

    return {
        setNum: setNum,
        getNum: getNum,
        plus: plus,
        minus: minus,
        multiplication: multiplication,
        division: division,
        power: power
    };
})();
