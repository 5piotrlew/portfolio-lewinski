
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
    
    var paragraphText1 = $('.programmer-description').find('p').eq(0).text();
    var paragraph1 = $('.programmer-description').find('p').eq(0);
    var paragraphText2 = $('.programmer-description').find('p').eq(1).text();
    var paragraph2 = $('.programmer-description').find('p').eq(1);
    var paragraphText3 = $('.programmer-description').find('p').eq(2).text();
    var paragraph3 = $('.programmer-description').find('p').eq(2);
    
    
    $('.programmer-description-item').each(function(i) {       
        $(this).text('');
    });
    
    
    
   /* for (var i = 1; i < paragraphText1.length; i++) {
        paragraph1.append(paragraphText1.charAt(i));
    }*/
    
    var a = 0,
        b = 0,
        c = 0;
    
    var petla = setInterval(function(){
        a++;
        if (paragraphText1.length >= a){
            paragraph1.append(paragraphText1.charAt(a));
        } 
        
    }, 50);
    /* Section ABOUT - Stop (PICTURE) */
    
     /* Section About - PICTURE DESCRIPTION - Start*/
   /* $('.programmer-description-item').each(function(i) {
        i++;
        window['paragraphDescription' + i++] = $(this).text();        
        $(this).text('');
    });
    zmienna = paragraphDescription1;
    console.log(paragraphDescription1);
    console.log(paragraphDescription2);
    console.log(paragraphDescription3);

    
    for (var i = 0; i < zmienna.length; i++) {
        $('.programmer-description-item').text(zmienna.charAt(i));
    }*/
   /* var a = 1;
    var b = 1;
    var c = 1;*/

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