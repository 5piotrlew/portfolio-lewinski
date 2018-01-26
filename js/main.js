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