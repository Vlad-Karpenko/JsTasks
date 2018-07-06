$(function () {

    // Создать собственный плагин, который будет плавно изменять высоту и
    // прозрачность выборки. При повторном запуске высота и прозрачность
    // возвращаются в первоначальное состояние.
    (function ($) {
        $.fn.myPlugin = function () {
            this.animate({
                opacity: 'toggle',
                height: 'toggle'
            });
        }
    })(jQuery);

    /*trigger*/
    $('button#first').on('click', function (event, data) {
        console.log("Click on button 1");
        console.log($(this).data('greeting') + " " + (data ? data.text : "nothing"));
        sendRequest();
    });

    $('button#second').on('click', function () {
        console.log("Click on button 2");
        let dataText = $(this).data('text');
        $('button#first').trigger('click', {text: dataText});
    });

    /*ajax*/
    function sendRequest() {
        $.ajax({
            type: "GET",
            url: "https://api.github.com/users/Vlad-Karpenko",
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                console.log(err)
            }
        })
    }

    /*plugin*/
    (function ($) {
        $.fn.colorText = function (color) {
            this.css('color', color || "#000000");
            return this;
        }
    })(jQuery);

    /*extent (перезаписывание свойств обьекта)*/
    let user = {
        name: 'John',
        age: 25
    };
    let data = {
        eyes: 'green',
        skin: 'black',
        address: {
            city: "some city",
            street: "some street"
        }
    };

    let data1 = {
        eyes: 'blue',
        hair: 'white',
        address: {
            city: "newcity",

        }
    };
    console.log($.extend(true, user, data, data1));

});


