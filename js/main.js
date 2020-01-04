$(document).ready(function () {

    //SLIDER
    if (window.location.href.indexOf('index') > -1) {

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
        });
    }


    //POST  
    if (window.location.href.indexOf('index') > -1) {

        var posts = [
            {
                title: ' Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().format("DD") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet onsectetur adipisicing elit. Placeat               doloremque asperiores laudantium nostrum cumque accusamus? Rerum              aliquid modi totam.Suscipit quam quia quis eligendi sed quidem              neque quas nesciunt hic.'
            },
            {
                title: ' Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().format("DD") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet onsectetur adipisicing elit. Placeat               doloremque asperiores laudantium nostrum cumque accusamus? Rerum              aliquid modi totam.Suscipit quam quia quis eligendi sed quidem              neque quas nesciunt hic.'
            }, {
                title: ' Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().format("DD") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet onsectetur adipisicing elit. Placeat               doloremque asperiores laudantium nostrum cumque accusamus? Rerum              aliquid modi totam.Suscipit quam quia quis eligendi sed quidem              neque quas nesciunt hic.'
            }, {
                title: ' Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().format("DD") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet onsectetur adipisicing elit. Placeat               doloremque asperiores laudantium nostrum cumque accusamus? Rerum              aliquid modi totam.Suscipit quam quia quis eligendi sed quidem              neque quas nesciunt hic.'
            }, {
                title: ' Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().format("DD") + ' de ' + moment().format('MMMM') + ' de ' + moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet onsectetur adipisicing elit. Placeat               doloremque asperiores laudantium nostrum cumque accusamus? Rerum              aliquid modi totam.Suscipit quam quia quis eligendi sed quidem              neque quas nesciunt hic.'
            }
        ]
        posts.forEach((item, index) => {
            var post = `<article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
              ${item.content}
            </p>
            <a href="" class="button-more">Leer mas</a>
          </article>`;

            $('#posts').append(post);

        })
    }


    //Selector de temas
    var theme = $('#theme')
    $('#to-green').click(function () {
        theme.attr('href', './css/green.css')
    });

    $('#to-red').click(function () {
        theme.attr('href', './css/red.css')
    });

    $('#to-blue').click(function () {
        theme.attr('href', './css/blue.css')
    });


    //Scroll hacia el inicio de la web
    $('.subir').click(function (e) {
        e.preventDefault()
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })


    //Login
    $('#login form').submit(function () {

        var form_name = $('#form_name').val()
        localStorage.setItem('form_name', form_name)
    });

    var form_name = localStorage.getItem('form_name')

    if (form_name != null && form_name != 'undefined') {
        $('.about p').html('<br> Bienvenido , ' + form_name)
        $('#login').hide()
        $('.about p').append('<br><br><a href="#" id="logout">Cerrar sesion</a>');

        $('#logout').click(function () {
            localStorage.clear()
            location.reload()
        });
    }


    //Acordeon
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();

    }


    //Reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(() => {
            var reloj = moment().format('hh:mm:ss')
            $('#reloj').html(reloj)
        }, 1000)
    }


    //Validacion
    if (window.location.href.indexOf('contact') > -1) {
        $('form input[name="date"]').datepicker({
            dateFormat : 'dd/mm/yy'
        })
        $.validate({
            lang: 'es',
        });
    }


});