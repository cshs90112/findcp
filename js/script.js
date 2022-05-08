 $(function () {

     new WOW().init();
     $('.slider').slick({
         infinite: true,
         speed: 300,
         dots: false,
         slidesToShow: 4,
         autoplay: true,
         autoplaySpeed: 4000,
         arrows: true,
         pauseOnHover: false,
         responsive: [
             
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
            }
          ]
     });
     $('.slider-2').slick({
         infinite: true,
         speed: 300,
         dots: false,
         slidesToShow: 4,
         autoplay: true,
         autoplaySpeed: 4000,
         arrows: true,
         pauseOnHover: false,
         responsive: [
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
            }
          ]
     });
     $('.slider-0').slick({
         infinite: true,
         speed: 300,
         dots: false,
         slidesToShow: 4,
         autoplay: true,
         autoplaySpeed: 4000,
         arrows: true,
         pauseOnHover: false,
         responsive: [
             {
                 breakpoint: 480,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 2
                 }
            }
          ]
     });


     $(".btn-h").hover(function () {
         $(this).attr("src", function (index, attr) {
             return attr.replace(".svg", "-h.svg");
         });
     }, function () {
         $(this).attr("src", function (index, attr) {
             return attr.replace("-h.svg", ".svg");
         });
     });



     //scroll function
     if ($(this).scrollTop() > 500) {
         $('.btn-top').fadeIn(500);
     } else {
         $('.btn-top').fadeOut(500);
     }
     $(window).scroll(function () {

         if ($(this).scrollTop() > 500) {
             $('.btn-top').stop().fadeIn(500);
         } else {
             $('.btn-top').stop().fadeOut(500);
         }
     });

     //          $('.nav a').bind('click', function (e) {
     //              e.preventDefault(); 
     //              var target = $(this).attr("href"); 
     //              $('html, body').stop().animate({
     //                  scrollTop: $(target).offset().top - 50
     //              }, 600, function () {
     //              });
     //              $('a[href*=#]').removeClass('active');
     //              $(this).addClass('active');
     //              return false;
     //          });



     //Windows Width
     var window_w = $(window).width();
     if (window_w < 1000) {
         $('.nav li a').click(function () {
             var pageId = $(this).attr("class");
             $("html, body").animate({
                 scrollTop: $('#' + pageId).offset().top - 150
             }, 1000);

             $('.nav').hide();
         });

     } else {

     }


     $(window).scroll(function () {
         if ($(this).scrollTop() > 700) {
             $('.navbar').addClass('fixed');
         } else {
             $('.navbar').removeClass('fixed');
         }

     });
     var btn = $('.btn');

     btn.on('click', function () {
         $(this).toggleClass('active');
         $(this).toggleClass('not-active');
         $('nav').fadeToggle();
     });



     // Animate the scroll to top
     $('.go-top').click(function (event) {
         event.preventDefault();
         $('html, body').animate({
             scrollTop: 0
         }, 300);
     });

     
     $(".kv-cfa,.mb-cfa-sign").click(function () {
         var pageId = $(".ix07");
         $("html, body").animate({
             scrollTop: $(pageId).offset().top - 30
         }, 1000);
     });

 });
