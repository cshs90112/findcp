$(function () {

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
//        fade: true,
    });


    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    var btn = $('.btnnav');




    $(".hover").hover(function () {
        $(this).attr("src", function (index, attr) {
            return attr.replace(".svg", "-h.svg");
        });
    }, function () {
        $(this).attr("src", function (index, attr) {
            return attr.replace("-h.svg", ".svg");
        });
    });
    btn.on('click', function () {
        $(this).toggleClass('active');
        $(this).toggleClass('not-active');
        $('nav').fadeToggle();
    });


    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {
            $('.head').addClass('fadein');
        } else {
            $('.head').removeClass('fadein');
        }
        if ($(this).scrollTop() > 400) {
            $('.backtop').addClass('fadein');
        } else {
            $('.backtop').removeClass('fadein');
        }
    });

    var window_w = $(window).width();
    if (window_w < 1000) {      
        
      
        function closenav() {
            $('nav').hide();
            $('.btnnav').removeClass('active');
            $('.btnnav').addClass('not-active');
        }
        
        

    } else {


        $("nav a").click(function () {
            $('nav a').removeClass('active');
            $(this).addClass('active');
            var pageId = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(pageId).offset().top - 90
            }, 1000);

        });
        $(".backtop a").click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);

        });

    }

});
