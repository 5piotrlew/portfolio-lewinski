$(function () {

    //Main-nav - Start
    var windowWidth = $(window).width();
    if (windowWidth < 680) {
        var flag = true;

        function mobileMenu() {
            flag = !flag;
            if (!flag) {
                $('nav#main-nav').addClass("mobile-menu");
            } else {
                $('nav#main-nav').removeClass("mobile-menu");
            }
        };

        $('.menu-mobile-item').on("click", function () {
            mobileMenu();
        });

        $('.list-menu-item').on("click", function () {
            mobileMenu();
        });
    }
    //Main-nav - Stop*/
    
    /* Section ABOUT - Start (PICTURE) */
    $('.behind-img').mouseenter(
        function () {
            $('.html').text('90');
            $('.css').html('80');
            $('.js').html('67');
            $('.jquery').html('65');
            $('.skills').addClass('bar-animation');
            $('.bar-animation').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });

            });
        }
    );
    $('.behind-img').mouseleave(
        function () {
            $('.skills').removeClass('bar-animation');
            setTimeout(function () {
                $('.skills').html('0');
            }, 200);
        });
    /* Section ABOUT - Stop (PICTURE) */
    
     /* Section About - PICTURE DESCRIPTION - Start*/
    var descOneText = $('.programmer-description-item[0]').text();
    var descOne = $('.programmer-description-item[0]');
    var descTwoText = $('.programmer-description-item[1]').text();
    var descTwo = $('.programmer-description-item[1]');
    var descThreeText = $('.programmer-description-item[2]').text();
    var descThree = $('.programmer-description-item[2]');
    
    $('.programmer-description-item').each(function(index) {
        $(this).text('');
    });
    
    

    var a = 1;
    var b = 1;
    var c = 1;

    /*function typeWriter() {

        if (a < rowOne.length) {
            rowOneZ.innerHTML += rowOne.charAt(a);
            a++;
            setTimeout(typeWriter, 50);
        }

        if (a >= rowOne.length && b < rowTwo.length) {
            rowTwoZ.innerHTML += rowTwo.charAt(b);
            b++;
            setTimeout(typeWriter, 100);
        }

        if (b >= rowTwo.length && c < rowThree.length) {
            rowThreeZ.innerHTML += rowThree.charAt(c);
            c++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();*/
    /* Section ABOUT - Stop */

    //Animate scroll  - Start
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1200);
        }
    });
    //Animate scroll  - Stop
});